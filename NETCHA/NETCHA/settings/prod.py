from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'movie_app', # DB명
        'USER': 'movie', # 데이터베이스 계정
        'PASSWORD':'movie', # 계정 비밀번호
        'HOST':'mysql-svc', # 데이테베이스 IP
        # 'HOST':'localhost', # 데이테베이스 IP
        'PORT':'3306', # 데이터베이스 port
    }
}
