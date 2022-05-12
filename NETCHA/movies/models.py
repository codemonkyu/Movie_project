from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


#장르
class Genre(models.Model):
    name = models.TextField()
    
    def __str__(self):
      return self.name


# 영화 정보
class Movie(models.Model):
    title = models.TextField()  # 영화제목
    original_title = models.TextField() #원 제목
    release_date = models.TextField()  # 개봉연도
    genres = models.ManyToManyField(Genre, blank=True)  # 장르
    poster_path = models.TextField()  # 포스터
    backdrop_path = models.TextField() #백그라운드 포스터
    overview = models.TextField()  # 줄거리
    adult = models.BooleanField()  # 19금
    runtime = models.IntegerField(validators=[MinValueValidator(0)]) #상영시간
    vote_average = models.FloatField(validators=[MinValueValidator(0), MaxValueValidator(10)])  # 평점
    vote_count = models.IntegerField(validators=[MinValueValidator(0)])  # 평점 투표 수 
    popularity = models.FloatField(validators=[MinValueValidator(0)]) #인기점수
    like = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_movies')  # 좋아요 수: 웹 사용자에게 받을 예정


# 댓글
class Review(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="reviews")
    content = models.TextField()
    rank = models.FloatField(validators=[MinValueValidator(0), MaxValueValidator(10)])
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)