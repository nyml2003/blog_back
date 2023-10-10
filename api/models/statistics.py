from django.db import models


class MediaRequest(models.Model):
    user = models.ForeignKey('api.BlogUser', on_delete=models.CASCADE, null=True, blank=True)
    request_time = models.DateTimeField(auto_now_add=True)
    request_url = models.CharField(max_length=255)
    request_method = models.CharField(max_length=255)


class DBRequest(models.Model):
    user = models.ForeignKey('api.BlogUser', on_delete=models.CASCADE, null=True, blank=True)
    request_time = models.DateTimeField(auto_now_add=True)
    request_url = models.CharField(max_length=255)
    request_method = models.CharField(max_length=255)
