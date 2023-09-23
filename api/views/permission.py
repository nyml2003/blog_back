from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_permission_list_by_user(request):
    user = request.user
    user_groups = user.groups.all()
    # 获取用户组的权限
    permissions = []
    for group in user_groups:
        permissions.extend(list(group.permissions.values_list('codename', flat=True)))
    print(permissions)
    return JsonResponse({
        'permissions': permissions
    })
