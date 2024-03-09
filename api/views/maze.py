import os
from django.http import JsonResponse
from blog_back import settings
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
import pandas    
def query_wordle(request):
    if request.method == 'GET':
        frq = str(request.GET.get('frq'))
        length = int(request.GET.get('len'))
        src_csv = os.path.join(settings.STATIC_URL,"ecdict.csv")
        df = pandas.read_csv(src_csv, dtype=str).fillna('')
        ans = ""
        for index, row in df.iterrows():
            if row["frq"] == frq and len(row["word"]) == length:
                ans = row["word"]
                break
        return JsonResponse({
            'message': 'wordle',
            'word': ans
        })
