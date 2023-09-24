from django.contrib.auth.models import Group, Permission, User

# Register your models here.
# 创建普通用户组
# user_group = Group.objects.create(name='NormalUserGroup')
#
# # 创建管理员组
# admin_group = Group.objects.create(name='NormalAdminGroup')

# user_group = Group.objects.get(name='NormalUserGroup')
# admin_group = Group.objects.get(name='NormalAdminGroup')
#
#
#
# admin_group.permissions.add(Permission.objects.get(codename='add_blog'))
# admin_group.permissions.add(Permission.objects.get(codename='change_blog'))
# admin_group.permissions.add(Permission.objects.get(codename='delete_blog'))

# user=User.objects.create_user(username='admin',password='admin')
# group=Group.objects.get(name='NormalAdminGroup')
# group.user_set.add(user)

# user=User.objects.get(username='admin')
# user.is_staff=True
# user.save()

# user=User.objects.create_user(username='user',password='user')
# group=Group.objects.get(name='NormalUserGroup')
# group.user_set.add(user)


