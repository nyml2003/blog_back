# Generated by Django 4.2.4 on 2023-10-10 02:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_dbrequest_request_url'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='mediarequest',
            name='user',
        ),
        migrations.DeleteModel(
            name='DBRequest',
        ),
        migrations.DeleteModel(
            name='MediaRequest',
        ),
    ]
