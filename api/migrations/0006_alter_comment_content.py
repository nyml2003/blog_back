# Generated by Django 4.2.4 on 2023-10-09 01:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_tag_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='content',
            field=models.TextField(),
        ),
    ]
