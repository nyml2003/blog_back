from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group
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
            'message': 'success',
            'access': '123',  # 这里应该是你的实际access_token
            'refresh': str(RefreshToken.for_user(user))
        }
        return Response(data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        return serializer.save()


@api_view(['POST'])
@permission_classes([IsAuthenticated, IsUser])
def group(request):
    """
    检查用户有无某页面的访问权限
    :param request:
    body:
    {
        "group": "NormalAdminGroup"
    }
    :return:
    """
    if request.method == 'POST':
        json_data = json.loads(request.body)
        user = request.user
        _group = json_data.get('group')
        if _group is None:
            return JsonResponse({'error': 'group cannot be null'}, safe=False)
        if user.groups.filter(name=_group).exists():
            return JsonResponse({'message': 'permission granted'}, safe=False)
        else:
            return JsonResponse({'error': 'permission denied'}, safe=False)


@api_view(['GET'])
@permission_classes([IsAuthenticated, IsUser])
def routes_desktop(request):
    if request.method == 'GET':
        user = request.user
        routes = []
        for group in user.groups.all():
            if group == Group.objects.get(name='NormalAdminGroup'):
                routes.append({
                    'path': '/admin',
                    'name': '后台管理',
                    'icon': 'admin_panel_settings',
                })
            if group == Group.objects.get(name='NormalUserGroup'):
                routes.append({
                    'path': '/user/profile/desktop',
                    'name': '个人中心',
                    'icon': 'person',
                })
        return JsonResponse(routes, safe=False)


@api_view(['GET'])
@permission_classes([IsAuthenticated, IsUser])
def routes_mobile(request):
    if request.method == 'GET':
        user = request.user
        routes = []
        for group in user.groups.all():
            if group == Group.objects.get(name='NormalAdminGroup'):
                # routes.append({
                #     'path': '/admin',
                #     'name': '后台管理',
                #     'icon': 'admin_panel_settings',
                # })
                pass
            if group == Group.objects.get(name='NormalUserGroup'):
                routes.append({
                    'path': '/user/profile/mobile/info',
                    'name': '个人中心',
                    'icon': 'person',
                })
                routes.append({
                    'path': '/user/profile/mobile/comment',
                    'name': '我的评论',
                    'icon': 'article',
                })
                routes.append({
                    'path': '/user/profile/mobile/statistics',
                    'name': '统计信息',
                    'icon': 'analytics',
                })
        return JsonResponse(routes, safe=False)


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


@api_view(['POST'])
@permission_classes([IsAuthenticated, IsUser])
def change_password(request):
    if request.method == 'POST':
        user = request.user
        print(user)
        json_data = json.loads(request.body)
        old_password = json_data.get('old_password')
        new_password = json_data.get('new_password')
        confirm_password = json_data.get('confirm_password')
        if new_password != confirm_password:
            return JsonResponse({
                'error': '确认密码不一致'
            })
        if user.check_password(old_password):
            user.set_password(new_password)
            user.save()
            return JsonResponse({
                'message': '修改成功'
            })
        else:
            return JsonResponse({
                'error': '原密码错误'
            })
