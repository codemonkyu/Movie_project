from audioop import reverse
from operator import and_
from unicodedata import name
from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, serializers, status, generics
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import MovieSerializer, GenreSerializer, ReviewSerializer, MovieTitleSerializer
from .models import  Movie, Genre, Review
from accounts.models import  User
from accounts.serializers import  UserSerializer
from django.contrib.auth import get_user_model
from django.db.models import Q
import random


#viewset
class GenreView(viewsets.ModelViewSet):
    serializer_class = GenreSerializer
    queryset =  Genre.objects.all()
    
    
class MovieView(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset =  Movie.objects.all()


class ReviewView(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    queryset =  Review.objects.all()

class MovieCreate(generics.ListCreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
# Create your views here.


#전체 영화 가져오기
@api_view(['GET']) 
def take_movie(request):
    movies = Movie.objects.all()
    serializer = MovieTitleSerializer(movies, many=True)
    return Response(serializer.data)

##8점이상 영화 (TOPRATED)
@api_view(['GET']) 
def movie_over8(request):
    movies = Movie.objects.filter(vote_average__gte=8.0)
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)

##무비 상세정보 가져오기
@api_view(['GET'])
def take_movie_detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    genre = movie.genres.all()
    serializer = MovieSerializer(movie)
    serializer2 = GenreSerializer(genre, many=True)
    serializer3 = movie.like.count()
    if movie.like.filter(username=request.user.username).exists():
        is_liking = True
    else:
        is_liking = False 
    return Response([serializer.data, serializer2.data, serializer3, is_liking])


##무비 검색 (타이블 / 줄거리)
@api_view(['GET'])
def take_movie_search(request, keyword):
    movie_list = []

    #타이틀 갖고오기
    title_movies = Movie.objects.filter(Q(title__contains=keyword))
    movie_list.extend(title_movies)

    #오버뷰 갖고오기 (중지 5/13)
    # overview_movies = Movie.objects.filter(Q(overview__contains=keyword))
    # movie_list.extend(overview_movies)

    #장르로 검색
    genres = Genre.objects.filter(Q(name=keyword))

    if genres.exists():
        for genre in genres:
            genre_movies=Movie.objects.filter(genres__id__contains=genre.pk)
            movie_list.extend(genre_movies)
    list=set(movie_list)
    serializer1 = MovieSerializer(list, many=True)
    return Response([serializer1.data])


##좋아요 기능
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def movie_like(request, movie_pk):
  movie = get_object_or_404(Movie, pk=movie_pk)
  if movie.like.filter(pk=request.user.pk).exists():
      movie.like.remove(request.user)
      liking = False     
  else:
      movie.like.add(request.user)
      liking = True
  
  count = movie.like.count()
  return Response([liking, count])



##좋아요한 영화 리스트
@api_view(['GET'])
def movie_like_list(request):
    user=request.user
    movies = user.like_movies.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)



##리뷰 리스트 보여주기
@api_view(['GET'])
def review_list(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    reviews = movie.review_set.all()
    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)


##리뷰 생성
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def review_create(request, movie_pk):
    serializer = ReviewSerializer(data=request.data)
    movie = get_object_or_404(Movie, pk=movie_pk)

    if serializer.is_valid(raise_exception=True):
        if Review.objects.filter(user_id=request.user.pk, movie_id = movie_pk).exists():
            return Response({'message':'이미 작성한 리뷰가 있습니다.'})
        serializer.save(user=request.user, movie=movie)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


##리뷰 삭제(작성자, 관리자만)
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def review_delete(request, movie_pk, review_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    review = movie.review_set.get(pk=review_pk)
    
    if not request.user.reviews.filter(pk=review_pk).exists():
      return Response({'message': '권한이 없습니다.'})
    else:
      review.delete()
      return Response({ 'id': review_pk })
    
    
    
##리뷰 수정(작성자, 관리자만)
@api_view(['PUT','GET'])
@permission_classes([IsAuthenticated])
def review_edit(request, review_pk):
    review = get_object_or_404(Review, pk=review_pk)
    serializer = ReviewSerializer(review, data=request.data)
    if serializer.is_valid(raise_exception=True) : 
        serializer.save()
        return Response(serializer.data)
    
    
           
                    
#장르별 리스트 출력
@api_view(['GET'])
def genre_list(request, genre_name):
    genre = get_object_or_404(Genre, name=genre_name)
    movies = Movie.objects.filter(Q(genres__id__contains=genre.pk))
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)



## 좋아요 리뷰 기반 추천 영화
@api_view(['GET'])
def recommend(request):

    all_genre = Genre.objects.all()
    dict={}

    for g in all_genre:
        dict[g.id] = 0

    # 7점 이상 리뷰 영화들
    movies_reviews = Review.objects.filter(Q(user_id=request.user.pk)&Q(rank__gte=7.0)).values_list('movie_id')

    # 좋아요 영화들
    user=request.user
    movies_likes = user.like_movies.values_list('id')

    list1 = []
    list1 = list(movies_reviews) + list(movies_likes)
    list1 = set(list1)
    result=[]

    if not list1:
        movies = Movie.objects.all().order_by('-popularity')

        for movie in movies:
            result.append(movie)
            if len(result)==30:
                serializer1 = MovieSerializer(result, many=True)
                return Response(serializer1.data)

    movies_list = []
    for li in  list1:
        id = li[0]
        movie = get_object_or_404(Movie, pk=id)
        movies_list.extend(movie.genres.all())

    for li in movies_list:
        dict[li.id]+=1

    sorted_dict = sorted(dict.items(), key = lambda item: item[1], reverse=True)
    high_score = sorted_dict[0][1]

    count = 0
    for dd in sorted_dict:
        if dd[1]== high_score:
            count+=1

    num = 30/count
    
    for i in range(count):
        movies = Movie.objects.filter(Q(genres__id__contains=sorted_dict[i][0])).order_by('-popularity')[:num]

        for movie in movies:
            if not movie in result and not (movie.id,) in list1:
                result.append(movie)

    if len(result) < 30:
        if sorted_dict[count][0] !=0:
            movies = Movie.objects.filter(Q(genres__id__contains=sorted_dict[count][0])).order_by('-popularity')
        
            for movie in movies:
                if not movie in result and not (movie.id,) in list1:
                    result.append(movie)
                if len(result)==30:
                    break
        else:
            movies = Movie.objects.all().order_by('-vote_average')

            for movie in movies:
                if not movie in result and not (movie.id,) in list1:
                    result.append(movie)
                if len(result)==30:
                    break

    serializer = MovieSerializer(result, many=True)
    return Response(serializer.data)