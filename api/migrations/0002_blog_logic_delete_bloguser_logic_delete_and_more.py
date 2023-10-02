# Generated by Django 4.2.4 on 2023-09-26 08:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='logic_delete',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='bloguser',
            name='logic_delete',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='bloguser',
            name='telephone',
            field=models.CharField(blank=True, max_length=11, null=True),
        ),
        migrations.AddField(
            model_name='comment',
            name='logic_delete',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='friend',
            name='logic_delete',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='comment',
            name='content',
            field=models.FileField(upload_to='comment'),
        ),
    ]