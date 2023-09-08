from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField()
    description = models.TextField()
    views = models.IntegerField(default=0)


class test(models.Model):
    name = models.CharField(max_length=50)


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
