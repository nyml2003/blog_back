from api.models import BlogPost
from rest_framework import serializers


class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'description', 'created_at', 'updated_at', 'tags', 'views']


class BlogPostDetailSerializer(serializers.ModelSerializer):
    prev_id = serializers.SerializerMethodField()
    next_id = serializers.SerializerMethodField()

    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'description', 'created_at', 'updated_at', 'tags', 'views', 'prev_id', 'next_id']

    def get_prev_id(self, obj):
        prev = BlogPost.objects.filter(id__lt=obj.id).order_by('-id').first()
        if prev is None:
            return 0
        return prev.id

    def get_next_id(self, obj):
        nxt = BlogPost.objects.filter(id__gt=obj.id).order_by('id').first()
        if nxt is None:
            return 0
        return nxt.id

