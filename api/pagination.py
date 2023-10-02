from rest_framework.pagination import PageNumberPagination


class ApiDefaultPagination(PageNumberPagination):
    page_query_param = 'page'
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 50

    def paginate_queryset(self, queryset, request, view=None):
        if 'page' not in request.query_params:
            return None
        return super().paginate_queryset(queryset, request, view)