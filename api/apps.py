from django.apps import AppConfig


class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'

    def ready(self):
        from api.models import AbstractPermissions
        from django.contrib.auth.models import Permission
        from django.contrib.contenttypes.models import ContentType
        content_type = ContentType.objects.get_for_model(
            AbstractPermissions,
            for_concrete_model=False
        )

        permissions = [
            ("can_view_user_info", "查看用户信息"),
            ("can_view_admin_backend", "查看后台管理"),
        ]

        for codename, name in permissions:
            Permission.objects.get_or_create(
                name=name,
                codename=codename,
                content_type=content_type
            )
        from django.contrib.auth.models import Group, Permission
        from api.models import BlogUser

        admin_group = Group.objects.create(name='NormalAdminGroup') if not Group.objects.filter(
            name='NormalAdminGroup') else Group.objects.get(name='NormalAdminGroup')
        user_group = Group.objects.create(name='NormalUserGroup') if not Group.objects.filter(
            name='NormalUserGroup') else Group.objects.get(name='NormalUserGroup')

        admin_group.permissions.add(Permission.objects.get(codename='add_blogpost'))
        admin_group.permissions.add(Permission.objects.get(codename='change_blogpost'))
        admin_group.permissions.add(Permission.objects.get(codename='delete_blogpost'))
        admin_group.permissions.add(Permission.objects.get(codename='view_blogpost'))

        admin_group.permissions.add(Permission.objects.get(codename='add_bloguser'))
        admin_group.permissions.add(Permission.objects.get(codename='change_bloguser'))
        admin_group.permissions.add(Permission.objects.get(codename='delete_bloguser'))
        admin_group.permissions.add(Permission.objects.get(codename='view_bloguser'))

        admin_group.permissions.add(Permission.objects.get(codename='add_comment'))
        admin_group.permissions.add(Permission.objects.get(codename='change_comment'))
        admin_group.permissions.add(Permission.objects.get(codename='delete_comment'))
        admin_group.permissions.add(Permission.objects.get(codename='view_comment'))

        user_group.permissions.add(Permission.objects.get(codename='add_comment'))
        user_group.permissions.add(Permission.objects.get(codename='change_comment'))
        user_group.permissions.add(Permission.objects.get(codename='delete_comment'))
        user_group.permissions.add(Permission.objects.get(codename='view_comment'))

        admin_group.permissions.add(Permission.objects.get(codename='add_friend'))
        admin_group.permissions.add(Permission.objects.get(codename='change_friend'))
        admin_group.permissions.add(Permission.objects.get(codename='delete_friend'))
        admin_group.permissions.add(Permission.objects.get(codename='view_friend'))

        admin_group.permissions.add(Permission.objects.get(codename='add_tag'))
        admin_group.permissions.add(Permission.objects.get(codename='change_tag'))
        admin_group.permissions.add(Permission.objects.get(codename='delete_tag'))
        admin_group.permissions.add(Permission.objects.get(codename='view_tag'))

        # user = BlogUser.objects.create_user(username='u4IZUhWn', password='5C4B3RM4', nickname='博客管理员',
        #                                     description='博客管理员')
        # admin_group.user_set.add(user)
        #
        # user = BlogUser.objects.get(username='u4IZUhWn')
        # user.is_staff = True
        # user.save()
        #
        # user = BlogUser.objects.create_user(username='test', password='test')
        # user_group = Group.objects.get(name='NormalUserGroup')
        # user_group.user_set.add(user)

        admin_group.permissions.add(Permission.objects.get(codename='can_view_user_info'))
        admin_group.permissions.add(Permission.objects.get(codename='can_view_admin_backend'))

        user_group.permissions.add(Permission.objects.get(codename='can_view_user_info'))