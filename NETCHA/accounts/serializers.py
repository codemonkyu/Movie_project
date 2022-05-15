from accounts.models import User
from rest_framework import serializers

#userviewset을 위한 serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"