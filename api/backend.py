from django.contrib.auth.backends import ModelBackend
from django.db.models import Q
from api.models import BlogUser


class BlogBackend(ModelBackend):
    def authenticate(self, request, username, password, **kwargs):
        if username is None or password is None:
            return
        user = BlogUser.objects.filter(Q(email=username) | Q(telephone=username) | Q(username=username))
        if user.count() != 1:
            return
        user = user.first()
        if user.check_password(password) and self.user_can_authenticate(user):
            return user
