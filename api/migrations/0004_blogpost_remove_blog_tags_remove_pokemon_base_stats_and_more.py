# Generated by Django 4.2.4 on 2023-09-29 11:08

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_blog_content_alter_comment_content_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('content', models.FileField(blank=True, null=True, upload_to='blog')),
                ('description', models.TextField()),
                ('views', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='blog',
            name='tags',
        ),
        migrations.RemoveField(
            model_name='pokemon',
            name='base_stats',
        ),
        migrations.RemoveField(
            model_name='pokemon',
            name='moves',
        ),
        migrations.RemoveField(
            model_name='pokemon',
            name='type1',
        ),
        migrations.RemoveField(
            model_name='pokemon',
            name='type2',
        ),
        migrations.RemoveField(
            model_name='restriction',
            name='type_defense',
        ),
        migrations.RemoveField(
            model_name='restriction',
            name='type_offense',
        ),
        migrations.RemoveField(
            model_name='bloguser',
            name='logic_delete',
        ),
        migrations.RemoveField(
            model_name='comment',
            name='logic_delete',
        ),
        migrations.RemoveField(
            model_name='friend',
            name='logic_delete',
        ),
        migrations.AddField(
            model_name='comment',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='friend',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='friend',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='friend',
            name='url',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='tag',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='tag',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.DeleteModel(
            name='BaseStat',
        ),
        migrations.DeleteModel(
            name='Move',
        ),
        migrations.DeleteModel(
            name='Pokemon',
        ),
        migrations.DeleteModel(
            name='Restriction',
        ),
        migrations.DeleteModel(
            name='Type',
        ),
        migrations.AddField(
            model_name='blogpost',
            name='tags',
            field=models.ManyToManyField(to='api.tag'),
        ),
        migrations.AlterField(
            model_name='comment',
            name='parent_blog',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.blogpost'),
        ),
        migrations.DeleteModel(
            name='Blog',
        ),
    ]