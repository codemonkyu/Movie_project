from accounts.models import User
from accounts.serializers import UserSerializer
from rest_framework import viewsets
from rest_framework import serializers




class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer