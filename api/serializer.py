from rest_framework import serializers
from .models import Blog


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'title', 'description','created_at','updated_at']

class BlogDetailSerializer(serializers.ModelSerializer):
    prev_id = serializers.SerializerMethodField()
    next_id = serializers.SerializerMethodField()
    class Meta:
        model = Blog
        fields = ['id', 'title', 'description', 'content', 'views','created_at','updated_at','prev_id','next_id']
    def get_prev_id(self, obj):
        prev = Blog.objects.filter(id__lt=obj.id).order_by('-id').first()
        if prev is None:
            return 0
        return prev.id
    def get_next_id(self, obj):
        next = Blog.objects.filter(id__gt=obj.id).order_by('id').first()
        if next is None:
            return 0
        return next.id