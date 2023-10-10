from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from api.models import Comment, MediaRequest, DBRequest
from api.permission import IsUser, IsAdmin


@api_view(['GET'])
@permission_classes([IsAuthenticated, IsUser])
def get_comment_info(request):
    # 统计该用户的评论数
    user_id = request.user.id
    comment_count = Comment.objects.filter(user_id=user_id).count()
    return JsonResponse({'count': comment_count}, safe=False)


@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdmin])
def get_comment_all_info(request):
    # 统计所有用户的评论数
    comment_count = Comment.objects.all().count()
    return JsonResponse({'count': comment_count}, safe=False)


@api_view(['GET'])
@permission_classes([IsAuthenticated, IsUser])
def get_media_request_count(request):
    media_request_count = MediaRequest.objects.filter(user=request.user).count()
    return JsonResponse({'count': media_request_count}, safe=False)


@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdmin])
def get_media_request_all_count(request):
    media_request_count = MediaRequest.objects.all().count()
    return JsonResponse({'count': media_request_count}, safe=False)


@api_view(['GET'])
@permission_classes([IsAuthenticated, IsUser])
def get_database_request_count(request):
    database_request_count = DBRequest.objects.filter(user=request.user).count()
    return JsonResponse({'count': database_request_count}, safe=False)


@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdmin])
def get_database_request_all_count(request):
    database_request_count = DBRequest.objects.all().count()
    return JsonResponse({'count': database_request_count}, safe=False)
