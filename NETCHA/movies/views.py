from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MovieSerializer, GenreSerializer, ReviewSerializer
from .models import  Movie, Genre, Review


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




# Create your views here.
