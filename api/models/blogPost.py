import os

from django.db import models
from .tag import Tag


class BlogPost(models.Model):
    title = models.CharField(max_length=50)
    content = models.FileField(upload_to='blog', null=True, blank=True)
    description = models.TextField()
    tags = models.ManyToManyField(Tag)
    views = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
