from django.contrib.auth.models import Group
from rest_framework import permissions


class IsAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        user = request.user
        admin_group = Group.objects.get(name='NormalAdminGroup')
        if user.is_authenticated:
            if user.is_superuser or user.is_staff:
                return True
            elif admin_group in user.groups.all():
                return True
            else:
                return False
        else:
            return False


class IsUser(permissions.BasePermission):
    def has_permission(self, request, view):
        user = request.user
        user_group = Group.objects.get(name='NormalUserGroup')
        if user.is_authenticated:
            if user.is_superuser or user.is_staff:
                return True
            elif user_group in user.groups.all():
                return True
            else:
                return False
        else:
            return False
