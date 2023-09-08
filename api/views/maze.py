from django.http import JsonResponse
from utils.maze.mazeCreator import mazeCreator, putter


def create_maze(request):
    if request.method == 'GET':
        try:
            row = int(request.GET.get('row'))
            col = int(request.GET.get('col'))
        except TypeError:
            return JsonResponse({
                'message': 'maze',
                'error': 'row and col must be int'
            })
        if row % 2 == 0 or col % 2 == 0:
            return JsonResponse({
                'message': 'maze',
                'error': 'row and col must be odd'
            })
        if row < 5 or col < 5:
            return JsonResponse({
                'message': 'maze',
                'error': 'row and col must be greater than 5'
            })
        try:
            _maze = mazeCreator(row - 2, col - 2)
        except RecursionError:
            return JsonResponse({
                'message': 'maze',
                'error': 'row and col is too large'
            })
        _maze, start_pos, end_pos = putter(_maze, col, row)
        return JsonResponse({
            'message': 'maze',
            'maze': _maze,
            'start_pos': start_pos,
            'end_pos': end_pos,
            'row': row,
            'col': col
        })
    else:
        return JsonResponse({
            'message': 'maze',
            'error': 'method not allowed'
        })
