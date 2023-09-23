from rest_framework.permissions import BasePermission
from django.contrib.auth.models import Group
class AdminPermission(BasePermission):
    def has_permission(self, request, view):
        if group := Group.objects.get(name='NormalAdminGroup') in request.user.groups.all() :
            if group.permissions.filter(codename=view.action).exists():
                return True
        return False