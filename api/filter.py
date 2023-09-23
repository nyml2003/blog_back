from django.db.models import Q
from django_filters import rest_framework
from django_filters.widgets import CSVWidget

from api.models import Blog


class BlogFilter(rest_framework.FilterSet):
    keyword = rest_framework.CharFilter(method='search', label='关键字')
    tags = rest_framework.CharFilter(field_name='tags__name', lookup_expr='in')
    class Meta:
        model = Blog
        fields = ['keyword', 'tags']

    @staticmethod
    def search(queryset, name, value):
        return queryset.filter(Q(title__icontains=value) | Q(description__icontains=value))
