from django.urls import path
from . import views

urlpatterns = [
    # 전체 영화
    path('take_movie/', views.take_movie),

    # 세부 영화 (movie_pk 검색)
    path('take_movie_detail/<int:movie_pk>', views.take_movie_detail),
    path('movie_genre_list', views.genre_list),
] 