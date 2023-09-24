from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from api.models import Comment,Blog
import json
from api.serializer import CommentBlogSerializer,CommentUserSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_comment_list_by_user(request):
    if request.method == 'GET':
        user_id = request.user.id
        comments = Comment.objects.filter(user=user_id)
        serializer = CommentUserSerializer(comments, many=True)
        return JsonResponse(serializer.data, safe=False)


@api_view(['GET'])
def get_comment_list_by_blog(request, blog_id):
    if request.method == 'GET':
        comments = Comment.objects.filter(parent_blog_id=blog_id)
        serializer=CommentBlogSerializer(comments, many=True)
        return JsonResponse(serializer.data, safe=False)



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_comment(request):
    if request.method == 'POST':
        if request.user.is_anonymous:
            return JsonResponse({'error': 'you must login first'}, safe=False)
        # 根据request.user获取user_id
        user = request.user
        json_data = json.loads(request.body)
        content = json_data.get('content')
        blog_id = json_data.get('blog_id')
        parent_comment_id = json_data.get('parent_comment_id')
        if blog_id is None and parent_comment_id is None:
            return JsonResponse({'error': 'blog_id and parent_comment_id cannot be both null'}, safe=False)
        if blog_id is not None and parent_comment_id is not None:
            return JsonResponse({'error': 'blog_id and parent_comment_id cannot be both not null'}, safe=False)
        if blog_id is not None:
            parent_blog = Blog.objects.get(id=blog_id)
            comment = Comment.objects.create(user=user, content=content,parent_blog=parent_blog)
        else:
            parent_comment = Comment.objects.get(id=parent_comment_id)
            comment = Comment.objects.create(user=user, content=content,
                                             parent_comment=parent_comment)
        return JsonResponse(json.loads(json.dumps(comment, default=str)), safe=False)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_comment(request, comment_id):
    if request.method == 'PUT':
        user_id = request.user.id
        if Comment.objects.get(id=comment_id).user_id != user_id:
            return JsonResponse({'error': 'you are not the author of this comment'}, safe=False)
        content = request.POST.get('content')
        comment = Comment.objects.get(id=comment_id)
        comment.content = content
        comment.save()
        return JsonResponse(comment, safe=False)
