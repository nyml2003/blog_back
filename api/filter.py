from django.db.models import Q
from django_filters import rest_framework
from api.models import Blog


class BlogFilter(rest_framework.FilterSet):
    keyword = rest_framework.CharFilter(method='search', label='关键字')

    class Meta:
        model = Blog
        fields = ['keyword']

    @staticmethod
    def search(queryset, name, value):
        return queryset.filter(Q(title__icontains=value) | Q(description__icontains=value))
