import os

from api.models import BlogPost
from rest_framework import serializers

from api.serializer.tag import TagOutlineSerializer


class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'description', 'created_at', 'updated_at', 'tags', 'views', 'content']
        extra_kwargs = {
            'id': {'read_only': True},
            'created_at': {'read_only': True},
            'updated_at': {'read_only': True},
            'views': {'read_only': True},
            'content': {'write_only': True, 'required': True},
        }

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret['tags'] = [TagOutlineSerializer(tag).data for tag in instance.tags.all()]
        return ret

    def to_internal_value(self, data):
        tags_data = data.getlist('tags[]')
        data = data.copy()
        data.setlist('tags', tags_data)
        return super().to_internal_value(data)

    def create(self, validated_data):
        if 'content' in validated_data:
            validated_data['content'].name = os.urandom(16).hex() + '.md'
        ret = super().create(validated_data)
        if 'tags' in validated_data:
            tags = validated_data.pop('tags')
            for tag in tags:
                ret.tags.add(tag)
        return ret


class BlogPostDetailSerializer(serializers.ModelSerializer):
    prev_id = serializers.SerializerMethodField()
    next_id = serializers.SerializerMethodField()

    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'description', 'created_at', 'updated_at', 'tags', 'views', 'prev_id', 'next_id',
                  'content']
        extra_kwargs = {
            'id': {'read_only': True},
            'created_at': {'read_only': True},
            'updated_at': {'read_only': True},
            'views': {'read_only': True},
            'tags': {'required': False, 'allow_null': True},
        }

    def get_prev_id(self, obj):
        prev = BlogPost.objects.filter(id__lt=obj.id).order_by('-id').first()
        if prev is None:
            return 0
        return prev.id

    def get_next_id(self, obj):
        nxt = BlogPost.objects.filter(id__gt=obj.id).order_by('id').first()
        if nxt is None:
            return 0
        return nxt.id

    def to_internal_value(self, data):
        tags_data = data.getlist('tags[]')
        data = data.copy()
        data.setlist('tags', tags_data)
        return super().to_internal_value(data)

    def update(self, instance, validated_data):
        if 'content' in validated_data:
            instance.content.delete(save=True)
            instance.content = validated_data['content']
            instance.content.name = os.urandom(16).hex() + '.md'
        if 'tags' in validated_data:
            instance.tags.clear()
            for tag in validated_data['tags']:
                instance.tags.add(tag)
        if 'title' in validated_data:
            instance.title = validated_data['title']
        if 'description' in validated_data:
            instance.description = validated_data['description']
        instance.save()
        return instance

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret['tags'] = [TagOutlineSerializer(tag).data for tag in instance.tags.all()]
        return ret
