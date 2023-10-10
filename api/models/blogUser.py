from django.contrib.auth.models import AbstractUser
from django.db import models


class BlogUser(AbstractUser):
    # username,password,email
    telephone = models.CharField(max_length=11, null=True, blank=True)  # 手机号(可用作登录)
    nickname = models.CharField(max_length=50, null=True, blank=True)  # 昵称
    avatar = models.ImageField(upload_to='avatar', null=True, blank=True)  # 头像
    description = models.TextField(null=True, blank=True)  # 个人简介
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
