# Generated by Django 4.2.4 on 2023-09-27 07:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_blog_logic_delete_bloguser_logic_delete_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='content',
            field=models.FileField(blank=True, null=True, upload_to='blog'),
        ),
        migrations.AlterField(
            model_name='comment',
            name='content',
            field=models.FileField(blank=True, null=True, upload_to='comment'),
        ),
        migrations.AlterField(
            model_name='comment',
            name='logic_delete',
            field=models.BooleanField(default=True),
        ),
    ]
