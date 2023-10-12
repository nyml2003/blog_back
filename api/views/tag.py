from rest_framework.decorators import permission_classes, action
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from api.models import Tag
from api.pagination import ApiDefaultPagination
from api.permission import IsAdmin
from api.serializer import TagSerializer


class TagView(ModelViewSet):
    serializer_class = TagSerializer
    pagination_class = ApiDefaultPagination
    
    
    def get_permissions(self):
        if self.action in ['create']:
            return [IsAuthenticated(), IsAdmin()]
        return []

    def get_queryset(self):
        return Tag.objects.order_by('-updated_at')

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)


class TagDetailView(ModelViewSet):
    serializer_class = TagSerializer
    permission_classes = [IsAuthenticated, IsAdmin]
    lookup_field = 'id'

    def get_queryset(self):
        return Tag.objects.order_by('-updated_at')

