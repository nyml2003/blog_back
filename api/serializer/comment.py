from rest_framework import serializers
from api.models import Comment


class CommentBlogSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = ['content', 'name', 'updated_at']

    def get_name(self, obj):
        if obj.user.nickname is not None:
            return obj.user.nickname
        else:
            return obj.user.username


class CommentUserSerializer(serializers.ModelSerializer):
    parent_id = serializers.SerializerMethodField()
    parent_name = serializers.SerializerMethodField()
    parent_type = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = ['content', 'updated_at', 'parent_id', 'parent_name', 'parent_type', 'id']

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


class CommentSerializer(CommentUserSerializer):
    user = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = ['user', 'content', 'updated_at', 'parent_id', 'parent_name', 'parent_type', 'created_at', 'id',
                  'status']

    def get_user(self, obj):
        if obj.user.nickname is not None:
            return obj.user.nickname
        else:
            return obj.user.username
