from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from api.models import Tag
from api.pagination import BlogPagination
from api.permission import IsAdmin
from api.serializer import TagSerializer


class TagView(ModelViewSet):
    serializer_class = TagSerializer
    pagination_class = BlogPagination

    def get_queryset(self):
        return Tag.objects.filter(user=self.request.user)

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    @permission_classes([IsAuthenticated, IsAdmin])
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)


class TagDetailView(ModelViewSet):
    serializer_class = TagSerializer
    permission_classes = [IsAuthenticated, IsAdmin]

    def get_queryset(self):
        return Tag.objects.filter(user=self.request.user)

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
