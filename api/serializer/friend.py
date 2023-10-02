from rest_framework import serializers
from api.models import Friend


class FriendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friend
        fields = ['id','nickname', 'avatar', 'description', 'url', 'created_at', 'updated_at']

