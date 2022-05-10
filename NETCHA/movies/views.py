from unicodedata import name
from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, serializers, status, generics
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import MovieSerializer, GenreSerializer, ReviewSerializer, MovieTitleSerializer
from .models import  Movie, Genre, Review
from accounts.models import  User
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
    #타이틀 갖고오기
    title_movies = Movie.objects.filter(Q(title__contains=keyword))
    
    #오버뷰 갖고오기
    overview_movies = Movie.objects.filter(Q(overview__contains=keyword))
    
    #장르로 검색
    genres = Genre.objects.filter(Q(name=keyword))

    # 영화 제목 
    serializer1 = MovieSerializer(title_movies, many=True)
    
    # 줄거리 포함
    serializer2 = MovieSerializer(overview_movies, many=True)

    if genres.exists():
        for genre in genres:
            genre=genres.values()[0]
            genre_movies=Movie.objects.filter(Q(genres__contains=genre.pk))
            serializer3 = MovieSerializer(genre_movies, many=True)
            return Response([serializer1.data, serializer2.data, serializer3.data])
    return Response([serializer1.data, serializer2.data])


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
    serializer = MovieTitleSerializer(movies, many=True)
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
@api_view(['Get','POST'])
@permission_classes([IsAuthenticated])
def review_edit(request, movie_pk, review_pk):
    if request.method == 'GET':
        movie = get_object_or_404(Movie, pk=movie_pk)
        review = movie.review_set.get(pk=review_pk)
        serializer = ReviewSerializer(review, many=True)
        return Response(serializer.data)
    
            
    else:
        serializer = ReviewSerializer(data=request.data)
        
        if serializer.is_valid(raise_exception=True):
                serializer.save(user=request.user, review=review)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    
           
                    
#장르별 리스트 출력
@api_view(['GET'])
def genre_list(request, genre_name):
    genre = get_object_or_404(Genre, name=genre_name)
    movies = Movie.objects.filter(Q(genres__id__contains=genre.pk))
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)


##내가 좋아요한 영화와 장르가 비슷한 영화
