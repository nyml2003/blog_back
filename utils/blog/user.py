import re
import string
import random
from api.models import BlogUser


def generate_unique_username():
    while True:
        # 生成一个随机的用户名
        username = ''.join(random.choices(string.ascii_lowercase + string.digits, k=10))
        # 检查用户名是否已经存在
        if not BlogUser.objects.filter(username=username).exists():
            return username


def check_email(email) -> bool:
    return True if re.match(r'^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$', email) else False


def check_telephone(telephone) -> bool:
    return True if re.match(r'^1[3456789]\d{9}$', telephone) else False
