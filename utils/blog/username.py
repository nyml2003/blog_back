import string
import random
from api.models import BlogUser as User


def generate_unique_username():
    while True:
        # 生成一个随机的用户名
        username = ''.join(random.choices(string.ascii_lowercase + string.digits, k=10))
        # 检查用户名是否已经存在
        if not User.objects.filter(username=username).exists():
            return username
