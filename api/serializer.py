from rest_framework import serializers
from .models import Blog, Comment
from django.contrib.auth.models import User



class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'title', 'description', 'created_at', 'updated_at']


class BlogDetailSerializer(serializers.ModelSerializer):
    prev_id = serializers.SerializerMethodField()
    next_id = serializers.SerializerMethodField()

    class Meta:
        model = Blog
        fields = ['id', 'title', 'description', 'content', 'views', 'created_at', 'updated_at', 'prev_id', 'next_id']

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


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'date_joined', 'last_login']


class CommentBlogSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()
    class Meta:
        model = Comment
        fields = ['content', 'created_at','username']

    def get_username(self, obj):
        return obj.user.username

class CommentUserSerializer(serializers.ModelSerializer):
    blog_id=serializers.SerializerMethodField()
    blog_title=serializers.SerializerMethodField()
    class Meta:
        model = Comment
        fields = ['content', 'created_at','blog_id','blog_title']

    def get_blog_id(self, obj):
        return obj.parent_blog.id

    def get_blog_title(self, obj):
        return obj.parent_blog.title