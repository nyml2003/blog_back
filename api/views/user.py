from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.utils import json
from rest_framework.viewsets import ModelViewSet

from api.filter import UserFilter
from api.models import BlogUser
from rest_framework_simplejwt.tokens import RefreshToken

from api.pagination import BlogPagination
from api.permission import IsUser
from api.serializer import BlogUserListSerializer, BlogUserSelfSerializer
from utils.blog.username import generate_unique_username


@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)
        # 随机生成用户名
        username = generate_unique_username()
        password = json_data.get('password')
        nickname = json_data.get('nickname')
        if nickname is None:
            nickname = username
        if password is None:
            return JsonResponse({'error': 'username and password cannot be null'}, safe=False)
        user = BlogUser.objects.create_user(username=username, password=password, nickname=nickname)
        token = RefreshToken.for_user(user)
        # 不知道怎么获取access_token，所以先用123代替
        return JsonResponse({
            'message': 'register success',
            'access_token': '123',
            'refresh_token': str(token)
        }, safe=False)


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
    queryset = BlogUser.objects.all().order_by('-id')
    serializer_class = BlogUserListSerializer
    pagination_class = BlogPagination
    filterset_class = UserFilter
    permission_classes = [IsAuthenticated, IsAdminUser]
    lookup_field = 'id'


class UserDetailView(ModelViewSet):
    queryset = BlogUser.objects.all().order_by('-id')
    serializer_class = BlogUserSelfSerializer
    permission_classes = [IsAuthenticated, IsAdminUser, IsUser]
    lookup_field = 'id'

    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.logic_delete = True
        instance.save()
        return JsonResponse({
            'message': 'success'
        })
