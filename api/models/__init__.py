from django.db import models
from .blogPost import BlogPost
from .friend import Friend
from .tag import Tag
from .comment import Comment
from .blogUser import BlogUser


class AbstractPermissions(models.Model):
    class Meta:
        abstract = True
