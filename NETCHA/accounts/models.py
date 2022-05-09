from django.db import models
from django.contrib.auth.models import AbstractUser	# AbstractUser 불러오기


class User(AbstractUser):
    email = models.EmailField("이메일", max_length=100)
    username = models.CharField("유저이름", max_length=100, unique=True)


    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = []
    
