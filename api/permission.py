from django.contrib.auth.models import Group
from django.http import JsonResponse
from rest_framework import permissions


class IsAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        user = request.user
        print(user)
        print(user.groups.all())
        admin_group = Group.objects.get(name='NormalAdminGroup')
        print(admin_group)
        if admin_group in user.groups.all():
            return True
        return False


class IsUser(permissions.BasePermission):

    def has_permission(self, request, view):
        user = request.user
        user_group = Group.objects.get(name='NormalUserGroup')
        if user_group in user.groups.all():
            return True
        return False