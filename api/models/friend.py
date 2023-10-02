from django.db import models


class Friend(models.Model):
    nickname = models.CharField(max_length=50, null=True, blank=True)  # 昵称
    avatar = models.ImageField(upload_to='avatar', null=True, blank=True)  # 头像
    description = models.TextField(null=True, blank=True)  # 个人简介
    url = models.CharField(max_length=100, null=True, blank=True)  # 个人主页
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
