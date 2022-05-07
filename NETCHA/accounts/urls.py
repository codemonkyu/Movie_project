from django.urls import path
from . import views


urlpatterns = [
    path('signup/', views.signup),
    # 유저 정보용
    path('getuser/', views.get_user),
]
