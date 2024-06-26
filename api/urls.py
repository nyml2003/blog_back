from django.urls import path

from .views import blog, maze, comment, user, friend, tag, img, statistics
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
    path('blog/rest/<int:id>/', blog.BlogDetailView.as_view({
        'get': 'retrieve',
        'patch': 'update',
        'delete': 'destroy'
    })),
    path('comment/blog/<int:id>/', comment.CommentListByBlog.as_view()),
    path('comment/user/', comment.CommentListByUser.as_view()),
    path('comment/rest/', comment.CommentView.as_view({
        'get': 'list',
        'post': 'create'
    })),
    path('comment/rest/<int:id>/', comment.CommentDetailView.as_view({
        'get': 'retrieve',
        'patch': 'update',
        'delete': 'destroy'
    })),
    path('user/register/', user.RegisterView.as_view({
        'post': 'create'
    })),
    path('user/login/', TokenObtainPairView.as_view()),
    path('user/refresh/', TokenRefreshView.as_view()),
    path('user/verify/', TokenVerifyView.as_view()),
    path('user/group/', user.group),
    path('user/self/', user.UserSelfView.as_view({
        'get': 'retrieve',
        'patch': 'update',
    })),
    path('user/statistics/comment/', statistics.get_comment_info),
    path('user/statistics/database_request/', statistics.get_database_request_count),
    path('user/rest/', user.UserView.as_view()),
    path('user/rest/<int:id>/', user.UserDetailView.as_view({
        'delete': 'destroy'
    })),
    path('user/route/desktop/', user.routes_desktop),
    path('user/route/mobile/', user.routes_mobile),
    path('user/change_password/', user.change_password),
    path('friend/rest/', friend.FriendView.as_view({
        'get': 'list',
        'post': 'create'
    })),
    path('friend/rest/<int:id>/', friend.FriendDetailView.as_view({
        'patch': 'update',
        'delete': 'destroy'
    })),
    path('tag/rest/', tag.TagView.as_view({
        'get': 'list',
        'post': 'create'
    })),
    path('tag/rest/<int:id>/', tag.TagDetailView.as_view({
        'patch': 'update',
        'delete': 'destroy'
    })),
    path('maze/create', maze.create_maze),
    path('wordle/query', maze.query_wordle),
    path('img/upload/', img.upload)
]
