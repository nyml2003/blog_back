# Generated by Django 4.2.4 on 2023-11-04 11:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_mediarequest_dbrequest'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='status',
            field=models.IntegerField(default=100),
        ),
    ]
