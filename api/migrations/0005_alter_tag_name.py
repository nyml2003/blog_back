# Generated by Django 4.2.4 on 2023-09-29 12:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_blogpost_remove_blog_tags_remove_pokemon_base_stats_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tag',
            name='name',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]
