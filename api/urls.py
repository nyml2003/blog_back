from django.urls import path

from .views import blog, maze, permission
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
    path('permission/', permission.get_permission_list_by_user, name='permission'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
