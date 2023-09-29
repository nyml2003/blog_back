from django.urls import path

from .views import blog, maze, comment, user, friend, tag
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

app_name = 'api'

urlpatterns = [
    path('blog/rest/', blog.BlogView.as_view({
        'get': 'list',
        'post': 'create'
    })),
    path('blog/rest/<int:blog_id>/', blog.BlogDetailView.as_view({
        'get': 'retrieve',
        'put': 'update',
        'delete': 'destroy'
    })),
    path('blog/destroy/<int:blog_id>/', blog.destroy_blog),
    path('blog/recycle/', blog.Recycle.as_view()),
    path('comment/blog/<int:blog_id>/', comment.CommentListByBlog.as_view()),
    path('comment/user/', comment.CommentListByUser.as_view()),
    path('comment/recycle/', comment.Recycle.as_view()),
    path('comment/rest/', comment.CommentView.as_view({
        'get': 'list',
        'post': 'create'
    })),
    path('comment/rest/<int:comment_id>/', comment.CommentDetailView.as_view({
        'get': 'retrieve',
        'put': 'update',
        'delete': 'destroy'
    })),
    path('user/register/', user.register),
    path('user/login/', TokenObtainPairView.as_view()),
    path('user/refresh/', TokenRefreshView.as_view()),
    path('user/verify/', TokenVerifyView.as_view()),
    path('user/permission/', user.permission),
    path('user/rest/', user.UserView.as_view()),
    path('user/rest/<int:user_id>/', user.UserDetailView.as_view({
        'get': 'retrieve',
        'put': 'update',
        'delete': 'destroy'
    })),
    path('friend/rest/', friend.FriendView.as_view({
        'get': 'list',
        'post': 'create'
    })),
    path('friend/rest/<int:friend_id>/', friend.FriendDetailView.as_view({
        'put': 'update',
        'delete': 'destroy'
    })),
    path('tag/rest/', tag.TagView.as_view({
        'get': 'list',
        'post': 'create'
    })),
    path('tag/rest/<int:tag_id>/', tag.TagDetailView.as_view({
        'put': 'update',
        'delete': 'destroy'
    })),
    path('maze/create', maze.create_maze),
]
