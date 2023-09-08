"""
to create a maze
"""
from random import random, randint


def mazeCreator(row: int, col: int):
    """生成一个row行col列的迷宫,row和col必须是奇数
    :param row: 迷宫的行数
    :param col: 迷宫的列数
    :return: 一个二维数组,用于表示一个row行col列的迷宫
    """
    down_direction = 1
    right_direction = 2
    left_direction = 4
    up_direction = 8
    wall = 1
    nothing = 0

    class Cell:
        """用于表示一个迷宫的单元格"""

        def __init__(self, row_num, column, direction):
            self.row = row_num
            self.column = column
            self.direction = direction

    cell_list = []
    x_num = (int((row - 1) / 2 * random()) + 1) * 2 + 1
    y_num = (int((col - 1) / 2 * random()) + 1) * 2 + 1
    graph = [[wall for _ in range(col + 2)] for _ in range(row + 2)]
    graph[x_num][y_num] = nothing

    def find_cell():
        if x_num + 1 <= row and graph[x_num + 1][y_num] == wall:
            cell_list.append(Cell(x_num + 1, y_num, down_direction))
        if y_num + 1 <= col and graph[x_num][y_num + 1] == wall:
            cell_list.append(Cell(x_num, y_num + 1, right_direction))
        if x_num - 1 >= 1 and graph[x_num - 1][y_num] == wall:
            cell_list.append(Cell(x_num - 1, y_num, up_direction))
        if y_num - 1 >= 1 and graph[x_num][y_num - 1] == wall:
            cell_list.append(Cell(x_num, y_num - 1, left_direction))

    find_cell()
    while len(cell_list) != 0:
        cell_size = len(cell_list)
        randnum = int(random() * cell_size)
        select_cell = cell_list[randnum]
        x_num = select_cell.row
        y_num = select_cell.column
        if select_cell.direction == down_direction:
            x_num += 1
        elif select_cell.direction == right_direction:
            y_num += 1
        elif select_cell.direction == left_direction:
            y_num -= 1
        elif select_cell.direction == up_direction:
            x_num -= 1

        if graph[x_num][y_num] == wall:
            graph[select_cell.row][select_cell.column] = graph[x_num][y_num] = nothing
            find_cell()
        del cell_list[randnum]
    return graph


def print_maze(_maze):
    for _, num_rows in enumerate(_maze):
        for _, cell in enumerate(num_rows):
            if cell == 1:
                print("#", end="")
            elif cell == 2:
                print("S", end="")
            elif cell == 3:
                print("*", end="")
            else:
                print(" ", end="")
        print()


def putter(maze, col, row):
    nothing = 0
    pos_list = []
    for i in range(1, row):
        for j in range(1, col):
            if maze[i][j] == nothing:
                degree = 0
                if maze[i - 1][j] == nothing:
                    degree += 1
                if maze[i][j - 1] == nothing:
                    degree += 1
                if maze[i + 1][j] == nothing:
                    degree += 1
                if maze[i][j + 1] == nothing:
                    degree += 1
                if degree == 1:
                    pos_list.append([i, j])
    start_pos = pos_list.pop(randint(0, len(pos_list) - 1))
    end_pos = pos_list.pop(randint(0, len(pos_list) - 1))
    maze[end_pos[0]][end_pos[1]] = 2
    for pos in pos_list:
        maze[pos[0]][pos[1]] = 3
    return maze, start_pos, end_pos


def maze_after_putter(row, col):
    print_maze(putter(mazeCreator(row - 2, col - 2), col, row))
# maze = mazeCreator(7 - 2, 5 - 2)
# print_maze(maze)
