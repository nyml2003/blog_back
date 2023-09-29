from django.contrib.auth.models import Group, Permission
from api.models import BlogUser

# admin_group = Group.objects.create(name='NormalAdminGroup')
admin_group = Group.objects.get(name='NormalAdminGroup')
user_group = Group.objects.get(name='NormalUserGroup')

admin_group.permissions.add(Permission.objects.get(codename='add_blog'))
admin_group.permissions.add(Permission.objects.get(codename='change_blog'))
admin_group.permissions.add(Permission.objects.get(codename='delete_blog'))
admin_group.permissions.add(Permission.objects.get(codename='view_blog'))
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

# user = BlogUser.objects.get(username='u4IZUhWn')
# user.is_staff = True
# user.save()

# user = BlogUser.objects.create_user(username='test', password='test')
# user_group = Group.objects.get(name='NormalUserGroup')
# user_group.user_set.add(user)

admin_group.permissions.add(Permission.objects.get(codename='can_view_user_info'))
admin_group.permissions.add(Permission.objects.get(codename='can_view_admin_backend'))

user_group.permissions.add(Permission.objects.get(codename='can_view_user_info'))
