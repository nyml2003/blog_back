from django.db.models import Q
from django_filters import rest_framework
from api.models import BlogPost, BlogUser


class BlogUserFilter(rest_framework.FilterSet):
    keyword = rest_framework.CharFilter(method='search', label='关键字')

    class Meta:
        model = BlogUser
        fields = ['keyword']

    @staticmethod
    def search(queryset, name, value):
        return queryset.filter(
            Q(nickname__icontains=value) | Q(description__icontains=value) | Q(email__icontains=value) | Q(
                telephone__icontains=value))


class BlogPostFilter(rest_framework.FilterSet):
    keyword = rest_framework.CharFilter(method='search', label='关键字')
    tags = rest_framework.CharFilter(method='searchTag', label='标签')
    order = rest_framework.OrderingFilter(
        fields=(
            ('id', 'id'),
            ('views', 'views'),
            ('created_at', 'created_at'),
            ('updated_at', 'updated_at'),
        ),)

    class Meta:
        model = BlogPost
        fields = ['keyword', 'tags', 'id', 'views', 'created_at', 'updated_at']

    @staticmethod
    def search(queryset, name, value):
        return queryset.filter(Q(title__icontains=value) | Q(description__icontains=value))

    @staticmethod
    def searchTag(queryset, name, value):
        if value:
            tags = value.split(',')
            return queryset.filter(tags__in=tags)
        return queryset
