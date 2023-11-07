from django.db import models
from .blogPost import BlogPost
from .blogUser import BlogUser
from django.core.exceptions import ValidationError


class Comment(models.Model):
    user = models.ForeignKey(BlogUser, on_delete=models.CASCADE)
    parent_comment = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True)
    parent_blog = models.ForeignKey(BlogPost, on_delete=models.CASCADE, null=True, blank=True)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # 审核中或者审核通过
    # 1xx 审核中
    # 2xx 审核通过
    # 3xx 审核未通过
    # 4xx 已逻辑删除
    # 5xx 重新审核中
    status = models.IntegerField(default=100)

    def save(self, *args, **kwargs):
        if self.parent_comment and self.parent_blog:
            raise ValidationError('Comment cannot have both parent_comment and parent_blog')
        super().save(*args, **kwargs)
