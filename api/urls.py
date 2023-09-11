from django.urls import path

from .views import blog, maze

app_name = 'api'

urlpatterns = [
    path('hello/', blog.hello, name='hello'),
    path('blog/', blog.BlogView.as_view(), name='blog'),
    path('blog/<int:id>/', blog.BlogDetailView.as_view({
        'put': 'update',
        'get': 'retrieve'
    }), name='blog_detail'),
    path('upload/', blog.upload, name='upload'),
    path('maze/create/', maze.create_maze, name='maze'),
    path('blog/deleteAll', blog.deleteAll, name='deleteAll'),
    path('blog/getBlogList', blog.getBlogList, name='getBlogList'),
]
