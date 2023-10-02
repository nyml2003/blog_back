from django.contrib.auth import get_user_model
from django.http import JsonResponse
from rest_framework import status, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.utils import json
from rest_framework.viewsets import ModelViewSet

from api.filter import BlogUserFilter
from api.models import BlogUser
from rest_framework_simplejwt.tokens import RefreshToken

from api.pagination import ApiDefaultPagination
from api.permission import IsUser, IsAdmin
from api.serializer import BlogUserListSerializer, BlogUserSelfSerializer
from api.serializer.blogUser import RegisterSerializer


class RegisterView(ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        data = {
            'message': 'register success',
            'access_token': '123',  # 这里应该是你的实际access_token
            'refresh_token': str(RefreshToken.for_user(user))
        }
        return Response(data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        return serializer.save()


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def permission(request):
    """
    检查用户有无某页面的访问权限
    :param request:
    body:
    {
        "method": "get",
        "permission": "can_view_admin_backend"
    }
    :return:
    """
    if request.method == 'POST':
        json_data = json.loads(request.body)
        user = request.user
        _permission = json_data.get('permission')
        if _permission is None:
            return JsonResponse({'error': 'permission cannot be null'}, safe=False)
        if user.has_perm(_permission):
            return JsonResponse({'message': 'permission granted'}, safe=False)
        else:
            return JsonResponse({'error': 'permission denied'}, safe=False)


class UserView(ListAPIView):
    queryset = BlogUser.objects.all().order_by('id')
    serializer_class = BlogUserListSerializer
    pagination_class = ApiDefaultPagination
    filterset_class = BlogUserFilter
    permission_classes = [IsAuthenticated, IsAdmin]
    lookup_field = 'id'


class UserSelfView(ModelViewSet):
    serializer_class = BlogUserSelfSerializer
    permission_classes = [IsAuthenticated, IsUser]

    def get_object(self):
        return self.request.user
    def get_queryset(self):
        return BlogUser.objects.filter(id=self.request.user.id)

    def retrieve(self, request, *args, **kwargs):
        user = request.user
        serializer = self.get_serializer(user)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)


class UserDetailView(ModelViewSet):
    queryset = BlogUser.objects.all().order_by('id')
    serializer_class = BlogUserListSerializer
    permission_classes = [IsAuthenticated, IsAdmin]
    lookup_field = 'id'

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance.avatar:
            instance.avatar.delete()
        instance.delete()
        return JsonResponse({
            'message': 'success'
        })
