from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from api.models import Friend
from api.pagination import BlogPagination
from api.permission import IsAdmin
from api.serializer import FriendSerializer


class FriendView(ModelViewSet):
    serializer_class = FriendSerializer
    pagination_class = BlogPagination

    def get_queryset(self):
        return Friend.objects.order_by('-id')

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    @permission_classes([IsAuthenticated, IsAdmin])
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)


class FriendDetailView(ModelViewSet):
    serializer_class = FriendSerializer
    permission_classes = [IsAuthenticated, IsAdmin]

    def get_queryset(self):
        return Friend.objects.order_by('-id')

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
