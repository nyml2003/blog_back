from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User

from api.serializer import UserSerializer
from rest_framework.viewsets import ModelViewSet


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_permission_list_by_user(request):
    user = request.user
    user_groups = user.groups.all()
    permissions = []
    for group in user_groups:
        permissions.extend(list(group.permissions.values_list('codename', flat=True)))
    print(permissions)
    return JsonResponse(permissions, safe=False)



@permission_classes([IsAuthenticated])
class UserView(ModelViewSet):
    queryset = User.objects.all().order_by('id')
    serializer_class = UserSerializer
    lookup_field = 'id'

    def retrieve(self, request, *args, **kwargs):
        user = request.user
        serializer = UserSerializer(user)
        return JsonResponse(serializer.data)
