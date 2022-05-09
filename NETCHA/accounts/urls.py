from django.urls import path
from rest_framework.authentication import TokenAuthentication
from . import views


urlpatterns = [
    path('signup/', views.signup),
    path('api-token-auth/', TokenAuthentication),
    # 유저 정보용
    path('getuser/', views.get_user),
]
