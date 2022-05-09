from django.forms import PasswordInput
from rest_framework import serializers
from django.contrib.auth import get_user_model

#장르 API
class UserSerializer(serializers.ModelSerializer):
    Password = serializers.CharField(write_only=True)
    
    
    class Meta:
        model = get_user_model
        fields = ('nickname', 'name', 'email', 'username', 'password')