from ast import keyword
from django.urls import path
from . import views

urlpatterns = [
    # 전체 영화
    path('take_movie/', views.take_movie),

    # 세부 영화 (movie_pk 검색)

    path('take_movie_detail/<int:movie_pk>/', views.take_movie_detail),

    # keyword로 검색
    path('search/<keyword>/', views.take_movie_search),

    # 좋아요 기능
    path('like/', views.movie_like),

    # 좋아요 리스트
    path('like_list/', views.movie_like_list),

    # 장르별 리스트
    path('genre/<genre_name>', views.genre_list),

    # 리뷰 리스트
    path('review/<int:movie_pk>/', views.review_list),

    # 리뷰 생성
    path('review_create/<int:movie_pk>/', views.review_create),

    # 리뷰 수정
    path('review_edit/<int:movie_pk>/', views.review_create),

    # 리뷰 삭제
    path('review_delete/<int:movie_pk>/', views.review_delete),
    
]

