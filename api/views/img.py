import os

from django.core.files.storage import FileSystemStorage
from rest_framework.decorators import  api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.permission import IsAdmin
from blog_back import settings


@permission_classes([IsAuthenticated, IsAdmin])
@api_view(['POST'])
def upload(request):
    file_obj = request.FILES.get('file')
    # 大小限制
    if file_obj.size > 1024 * 1024 * 10:
        return Response(status=413)
    file_obj.name = os.urandom(16).hex() + '.' + file_obj.name.split('.')[-1]
    fs = FileSystemStorage(location=settings.MEDIA_ROOT)
    filename = fs.save(file_obj.name, file_obj)
    uploaded_file_url = fs.url(filename)
    print(uploaded_file_url)
    return Response({'url': uploaded_file_url}, status=201)
