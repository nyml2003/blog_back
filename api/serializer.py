from rest_framework import serializers
from .models import Blog, Comment, BlogUser


# 后台管理列表
class BlogUserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogUser
        fields = ['id', 'nickname', 'avatar', 'created_at', 'updated_at', 'logic_delete', 'description', 'email',
                  'telephone']


class BlogUserSelfSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogUser
        fields = ['id', 'nickname', 'avatar', 'created_at', 'updated_at', 'logic_delete', 'description', 'email',
                  'telephone', 'username']


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


class CommentBlogSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = ['content', 'name', 'avatar', 'updated_at']

    def get_name(self, obj):
        if obj.user.nickname is not None:
            return obj.user.nickname
        else:
            return obj.user.username

    def get_avatar(self, obj):
        if obj.user.avatar is not None:
            return obj.user.avatar.url
        else:
            return None


class CommentUserSerializer(serializers.ModelSerializer):
    parent_id = serializers.SerializerMethodField()
    parent_name = serializers.SerializerMethodField()
    parent_type = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = ['content', 'updated_at', 'parent_id', 'parent_name', 'parent_type']

    def get_parent_id(self, obj):
        if obj.parent_blog is not None:
            return obj.parent_blog.id
        else:
            return obj.parent_comment.id

    def get_parent_name(self, obj):
        if obj.parent_blog is not None:
            return obj.parent_blog.title
        else:
            user = obj.parent_comment.user
            if user.nickname is not None:
                return user.nickname
            else:
                return user.username

    def get_parent_type(self, obj):
        if obj.parent_blog is not None:
            return 'blog'
        else:
            return 'comment'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'


class FriendSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogUser
        fields = '__all__'


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogUser
        fields = '__all__'
