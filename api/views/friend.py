import os

from django.http import JsonResponse
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from api.models import Friend
from api.pagination import ApiDefaultPagination
from api.permission import IsAdmin
from api.serializer import FriendSerializer


class FriendView(ModelViewSet):
    serializer_class = FriendSerializer
    pagination_class = ApiDefaultPagination

    def get_queryset(self):
        return Friend.objects.order_by('-updated_at')

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    @permission_classes([IsAuthenticated, IsAdmin])
    def create(self, request, *args, **kwargs):
        request.data['avatar'].name = os.urandom(16).hex() + '.' + request.data['avatar'].name.split('.')[-1]
        return super().create(request, *args, **kwargs)


class FriendDetailView(ModelViewSet):
    serializer_class = FriendSerializer
    permission_classes = [IsAuthenticated, IsAdmin]
    lookup_field = 'id'

    def get_queryset(self):
        return Friend.objects.order_by('-updated_at')

    def destroy(self, request, *args, **kwargs):
        instance = Friend.objects.get(id=kwargs['id'])
        instance.avatar.delete()
        instance.delete()
        return JsonResponse({'message': '删除成功'}, status=200)

    def update(self, request, *args, **kwargs):
        if 'avatar' in request.data:
            instance = Friend.objects.get(id=kwargs['id'])
            instance.avatar.delete()
            request.data['avatar'].name = os.urandom(16).hex() + '.' + request.data['avatar'].name.split('.')[-1]
        return super().update(request, *args, **kwargs)