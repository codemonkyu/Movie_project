from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, serializers, status, generics
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import MovieSerializer, GenreSerializer, ReviewSerializer, MovieTitleSerializer
from .models import  Movie, Genre, Review
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
api_view(['GET'])       
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
    # 영화 제목 
    serializer1 = MovieSerializer(title_movies, many=True)
    # 줄거리 포함
    serializer2 = MovieSerializer(overview_movies, many=True)
    return Response([serializer1.data, serializer2.data])
















##내가 좋아요한 영화 






##내가 좋아요한 영화와 장르가 비슷한 영화