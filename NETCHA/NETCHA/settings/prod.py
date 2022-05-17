from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'moive_app', # DB명 #스펠링틀림...
        'USER': 'python', # 데이터베이스 계정
        'PASSWORD':'python', # 계정 비밀번호
        'HOST':'mysql-svc', # 데이테베이스 IP
        # 'HOST':'localhost', # 데이테베이스 IP
        'PORT':'3306', # 데이터베이스 port
    }
}
