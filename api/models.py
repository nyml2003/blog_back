from django.contrib.contenttypes.models import ContentType
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import AbstractUser, Permission


# Create your models here.
class BlogUser(AbstractUser):
    # username,password,email
    nickname = models.CharField(max_length=50, null=True, blank=True)
    avatar = models.ImageField(upload_to='avatar', null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    logic_delete = models.BooleanField(default=False)
    telephone = models.CharField(max_length=11, null=True, blank=True)


class Friend(models.Model):
    nickname = models.CharField(max_length=50, null=True, blank=True)
    avatar = models.ImageField(upload_to='avatar', null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    logic_delete = models.BooleanField(default=False)
    url = models.CharField(max_length=100, null=True, blank=True)


class Tag(models.Model):
    name = models.CharField(max_length=50)


class Blog(models.Model):
    title = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.FileField(upload_to='blog', null=True, blank=True)
    description = models.TextField()
    tags = models.ManyToManyField(Tag)
    views = models.IntegerField(default=0)
    logic_delete = models.BooleanField(default=False)


class Comment(models.Model):
    user = models.ForeignKey(BlogUser, on_delete=models.CASCADE)
    parent_comment = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True)
    parent_blog = models.ForeignKey(Blog, on_delete=models.CASCADE, null=True, blank=True)
    content = models.FileField(upload_to='comment', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    logic_delete = models.BooleanField(default=True)


class AbstractPermissions(models.Model):
    class Meta:
        abstract = True


class Move(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    power = models.IntegerField()
    accuracy = models.IntegerField()
    damage_class = models.CharField(max_length=100)
    pp = models.IntegerField()
    type = models.CharField(max_length=100)


class Type(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()


class Restriction(models.Model):
    damage_modifier = models.FloatField(choices=[(0, '0'), (0.5, '0.5'), (1, '1'), (2, '2')])
    type_offense = models.ForeignKey(Type, on_delete=models.CASCADE, related_name='type_offense')
    type_defense = models.ForeignKey(Type, on_delete=models.CASCADE, related_name='type_defense')


class BaseStat(models.Model):
    hp = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(255)])
    attack = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(255)])
    defense = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(255)])
    special_attack = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(255)])
    special_defense = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(255)])
    speed = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(255)])


class Pokemon(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    type1 = models.ForeignKey(Type, on_delete=models.CASCADE, related_name='type1')
    type2 = models.ForeignKey(Type, on_delete=models.CASCADE, related_name='type2', null=True)
    base_stats = models.OneToOneField(BaseStat, on_delete=models.CASCADE)
    moves = models.ManyToManyField(Move)
