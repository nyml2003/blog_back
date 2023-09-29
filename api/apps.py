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
