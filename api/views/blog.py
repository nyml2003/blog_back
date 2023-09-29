import os
import shutil
import uuid

from django.http import JsonResponse
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from api.models import Blog
from api.pagination import BlogPagination
from api.permission import IsAdmin
from api.serializer import BlogSerializer, BlogDetailSerializer
from api.filter import BlogFilter
import json


# Create your views here.
class BlogView(ModelViewSet):
    serializer_class = BlogSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = BlogFilter
    pagination_class = BlogPagination

    def get_queryset(self):
        queryset = Blog.objects.filter(logic_delete=False).order_by('-id')
        return queryset

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    @permission_classes([IsAuthenticated, IsAdmin])
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)


class Recycle(ListAPIView):
    serializer_class = BlogSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = BlogFilter
    pagination_class = BlogPagination

    def get_queryset(self):
        queryset = Blog.objects.filter(logic_delete=True).order_by('-id')
        return queryset


class BlogDetailView(ModelViewSet):
    serializer_class = BlogDetailSerializer

    def get_queryset(self):
        queryset = Blog.objects.filter(logic_delete=False).order_by('-id')
        return queryset

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.views += 1
        instance.save()
        serializer = self.get_serializer(instance)
        return JsonResponse(serializer.data, safe=False)

    @permission_classes([IsAuthenticated, IsAdmin])
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.logic_delete = True
        instance.save()
        return JsonResponse({
            'message': 'success'
        })

    @permission_classes([IsAuthenticated, IsAdmin])
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        if 'content' in request.data and not request.data['content']:
            serializer.exclude_fields(['content'])
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return JsonResponse({
            'message': 'success'
        })


# @api_view(['POST'])
# @permission_classes([IsAuthenticated, IsAdmin])
# def update_blog_content(request, blog_id):
#     instance = Blog.objects.get(id=blog_id)
#     instance.content.delete(save=False)
#     content = request.FILES.get('content')
#     if content is None:
#         return JsonResponse({
#             'message': 'content cannot be null'
#         })
#     new_content_file = content
#     instance.content.save(instance.content.name, new_content_file, save=True)
#     instance.save()
#     return JsonResponse({
#         'message': 'success'
#     })


# @api_view(['POST'])
# @permission_classes([IsAuthenticated, IsAdmin])
# def create(request):
#     if request.method == 'POST':
#         blog = Blog()
#         title = request.POST.get('title')
#         blog.title = title if title is not None else '无标题'
#         description = request.POST.get('description')
#         blog.description = description if description is not None else '无描述'
#         content = request.FILES.get('content')
#         random_file_name = str(uuid.uuid4()) + '.md'
#         if content is None:
#             with open('static/default/empty.md', 'rb') as f:
#                 new_path = os.path.join('media/blog', random_file_name)
#                 shutil.copyfileobj(f, open(new_path, 'wb'))
#                 blog.content.save(random_file_name, open(new_path, 'rb'), save=True)
#         else:
#             blog.content.save(random_file_name, content, save=True)
#         blog.save()
#         return JsonResponse({
#             'message': 'success'
#         })


@api_view(['POST'])
@permission_classes([IsAuthenticated, IsAdmin])
def destroy_blog(request, blog_id):
    # 物理删除
    instance = Blog.objects.get(id=blog_id)
    instance.content.delete(save=False)
    instance.delete()
    return JsonResponse({
        'message': 'success'
    })
