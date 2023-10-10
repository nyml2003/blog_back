from django.http import JsonResponse
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet

from api.pagination import ApiDefaultPagination
from api.permission import IsUser, IsAdmin
from api.serializer import CommentBlogSerializer, CommentUserSerializer, CommentSerializer
from api.models import Comment


class CommentListByBlog(ListAPIView):
    serializer_class = CommentBlogSerializer

    def get_queryset(self):
        blog_id = self.kwargs['id']
        return Comment.objects.filter(parent_blog_id=blog_id).order_by('-updated_at')


class CommentListByUser(ListAPIView):
    serializer_class = CommentUserSerializer
    pagination_class = ApiDefaultPagination
    permission_classes = [IsAuthenticated, IsUser]

    def get_queryset(self):
        user_id = self.request.user.id
        return Comment.objects.filter(user_id=user_id).order_by('-updated_at')


class CommentView(ModelViewSet):
    permission_classes = [IsAuthenticated, IsUser]
    pagination_class = ApiDefaultPagination
    serializer_class = CommentSerializer

    def get_queryset(self):
        return Comment.objects.order_by('-id')

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        print(request.data)
        content = request.data.get('content')
        if content is None:
            return JsonResponse({'error': 'content cannot be null'}, safe=False)
        parent_blog_id = request.data.get('blog_id')
        parent_comment_id = request.data.get('comment_id')
        if parent_blog_id is None and parent_comment_id is None:
            return JsonResponse({'error': 'parent_blog_id or parent_comment_id cannot be null'}, safe=False)
        user = request.user
        Comment.objects.create(content=content, user=user, parent_blog_id=parent_blog_id,
                               parent_comment_id=parent_comment_id)
        return JsonResponse({'message': 'create success'}, safe=False)


class CommentDetailView(ModelViewSet):
    permission_classes = [IsAuthenticated, IsAdmin, IsUser]
    pagination_class = ApiDefaultPagination
    serializer_class = CommentSerializer

    def get_queryset(self):
        return Comment.objects.filter(logic_delete=False).order_by('-id')

    def retrieve(self, request, *args, **kwargs):
        comment_id = kwargs['id']
        comment = Comment.objects.get(id=comment_id)
        if comment is None:
            return JsonResponse({'error': 'comment not found'}, safe=False)
        if comment.user_id != request.user.id:
            return JsonResponse({'error': 'permission denied'}, safe=False)
        serializer = CommentUserSerializer(comment)
        return JsonResponse(serializer.data, safe=False)

    def update(self, request, *args, **kwargs):
        comment_id = kwargs['id']
        comment = Comment.objects.get(id=comment_id)
        if comment is None:
            return JsonResponse({'error': 'comment not found'}, safe=False)
        if comment.user_id != request.user.id:
            return JsonResponse({'error': 'permission denied'}, safe=False)
        content = request.data.get('content')
        if content is None:
            return JsonResponse({'error': 'content cannot be null'}, safe=False)
        comment.content = content
        comment.save()
        return JsonResponse({'message': 'update success'}, safe=False)

    def destroy(self, request, *args, **kwargs):
        comment_id = kwargs['id']
        comment = Comment.objects.get(id=comment_id)
        if comment is None:
            return JsonResponse({'error': 'comment not found'}, safe=False)
        if comment.user_id != request.user.id:
            return JsonResponse({'error': 'permission denied'}, safe=False)
        comment.delete()
        return JsonResponse({'message': 'delete success'}, safe=False)
