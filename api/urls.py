from django.urls import path

from .views import blog, maze, user,comment
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)
app_name = 'api'

urlpatterns = [
    path('blog/rest/', blog.BlogView.as_view(), name='blog'),
    path('blog/rest/<int:id>/', blog.BlogDetailView.as_view({
        'put': 'update',
        'get': 'retrieve'
    }), name='blog_detail'),
    path('blog/upload/', blog.upload, name='upload'),
    path('maze/create', maze.create_maze, name='maze'),
    path('user/permission/', user.get_permission_list_by_user, name='permission'),
    path('user/rest/', user.UserView.as_view({
        'get': 'retrieve',
        'put': 'update'
    }), name='user'),
    path('comment/user/', comment.get_comment_list_by_user, name='comment_user'),
    path('comment/blog/<int:blog_id>/', comment.get_comment_list_by_blog, name='comment_blog'),
    path('comment/create/', comment.create_comment, name='comment_create'),
    path('comment/update/<int:comment_id>/', comment.update_comment, name='comment_update'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
