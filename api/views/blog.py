from django.db.models.signals import post_delete
from django.dispatch import receiver
from django.http import JsonResponse
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import ListAPIView
from rest_framework.viewsets import ModelViewSet
from blog_back import settings
from api.models import Blog, test
from api.pagination import BlogPagination
from api.serializer import BlogSerializer
from api.filter import BlogFilter
import json


def getBlogList(request):
    if request.method == 'GET':
        blog_list = Blog.objects.values('id', 'title').order_by('-created_at')
        print(blog_list)
        return JsonResponse({
            'message': 'success',
            'data': list(blog_list)
        })
    else:
        return JsonResponse({
            'message': 'error',
            'error': 'method not allowed'
        })


def upload(request):
    if request.method == 'POST' and settings.DEBUG:
        json_data = json.loads(request.body)
        title = json_data.get('title')
        description = json_data.get('description')
        content = json_data.get('content')
        Blog.objects.create(title=title, description=description, content=content)
        return JsonResponse({
            'message': 'success',
        })
    else:
        return JsonResponse({
            'message': 'error',
            'error': 'method not allowed'
        })


def deleteAll(request):
    if request.method == 'GET' and settings.DEBUG:
        Blog.objects.all().delete()
        return JsonResponse({
            'message': 'success',
        })
    else:
        return JsonResponse({
            'message': 'error',
            'error': 'method not allowed'
        })


def hello(request):
    test.objects.create(name='hello')
    return JsonResponse({
        'message': 'hello'
    })


# Create your views here.
class BlogView(ListAPIView):
    queryset = Blog.objects.all().order_by('-created_at')
    serializer_class = BlogSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = BlogFilter
    pagination_class = BlogPagination


class BlogDetailView(ModelViewSet):
    queryset = Blog.objects.all().order_by('-created_at')
    serializer_class = BlogSerializer
    lookup_field = 'id'

    # @receiver(post_delete, sender=Blog)
    # def submit_delete(self, instance, **kwargs):
    #     instance.content.delete(save=False)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.views += 1
        instance.save()
        serializer = self.get_serializer(instance)
        return JsonResponse(serializer.data, safe=False)

    def update(self, request, *args, **kwargs):
        if settings.DEBUG:
            return super().update(request, *args, **kwargs)
        else:
            return JsonResponse({
                'message': 'error',
                'error': 'method not allowed'
            })
