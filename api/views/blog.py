from django.http import JsonResponse
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from api.models import BlogPost
from api.pagination import ApiDefaultPagination
from api.permission import IsAdmin
from api.serializer import BlogPostSerializer, BlogPostDetailSerializer
from api.filter import BlogPostFilter


# Create your views here.
class BlogView(ModelViewSet):
    serializer_class = BlogPostSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = BlogPostFilter
    pagination_class = ApiDefaultPagination


    def get_permissions(self):
        if self.action in ['create']:
            return [IsAuthenticated(), IsAdmin()]
        return []

    def get_queryset(self):
        return BlogPost.objects.filter().order_by('-id')

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)


class BlogDetailView(ModelViewSet):
    serializer_class = BlogPostDetailSerializer
    lookup_field = 'id'

    def get_queryset(self):
        queryset = BlogPost.objects.filter().order_by('-id')
        return queryset

    def get_permissions(self):
        if self.action in ['update', 'destroy']:
            return [IsAuthenticated(), IsAdmin()]
        return []

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.views += 1
        instance.save()
        serializer = self.get_serializer(instance)
        return JsonResponse(serializer.data, safe=False)


    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.content.delete(save=False)
        instance.delete()
        return JsonResponse({
            'message': 'success'
        })

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
