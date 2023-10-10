from rest_framework.exceptions import ValidationError
from django.utils.deprecation import MiddlewareMixin
from rest_framework_simplejwt.backends import TokenBackend
from api.models import MediaRequest, DBRequest


class RequestLoggingMiddleware(MiddlewareMixin):
    def process_request(self, request):
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')
        if token != ['', '']:
            token = token[1]
            try:
                valid_data = TokenBackend(algorithm='HS256').decode(token, verify=False)
                user_id = valid_data['user_id']
            except ValidationError as v:
                print("validation error", v)
        else:
            user_id = None
        if user_id is not None:
            request_url = str(request.path)
            request_method = request.method

            if 'media' in request_url:
                MediaRequest.objects.create(
                    user_id=user_id,
                    request_url=request_url,
                    request_method=request_method
                )
            else:
                DBRequest.objects.create(
                    user_id=user_id,
                    request_url=request_url,
                    request_method=request_method
                )
