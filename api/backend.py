from django.contrib.auth.backends import ModelBackend
from django.db.models import Q
from api.models import BlogUser


class BlogBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        if username is None or password is None:
            return
        if username is None:
            user = BlogUser.objects.filter(Q(email=username) | Q(telephone=username))
        else:
            user = BlogUser.objects.filter(Q(username=username))
        if user.count() != 1:
            return
        user = user.first()
        if user.check_password(password) and self.user_can_authenticate(user):
            return user
