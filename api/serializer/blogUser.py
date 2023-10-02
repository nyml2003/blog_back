import re
from django.contrib.auth import get_user_model
from api.models import BlogUser
from rest_framework import serializers
from utils.blog.user import generate_unique_username, check_email
from django.contrib.auth.models import Group


class BlogUserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogUser
        fields = ['id', 'nickname', 'avatar', 'created_at', 'updated_at', 'description', 'email',
                  'telephone']


class BlogUserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogUser
        fields = ['id', 'nickname', 'avatar', 'created_at', 'updated_at', 'description', 'email',
                  'telephone']


class BlogUserSelfSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogUser
        fields = ['nickname', 'avatar', 'created_at', 'updated_at', 'description', 'email',
                  'telephone', 'username']
        extra_kwargs = {
            'username': {'read_only': True},
            'created_at': {'read_only': True},
            'updated_at': {'read_only': True},
            'avatar': {'required': False},
        }

    def validate(self, attrs):
        if 'email' in attrs:
            email = attrs['email']
            if check_email(email):
                pass
            else:
                raise serializers.ValidationError("电子邮件格式不正确")
        # 检查telephone
        if 'telephone' in attrs:
            telephone = attrs['telephone']
            if re.match(r'^1[3456789]\d{9}$', telephone):
                pass
            else:
                raise serializers.ValidationError("电话格式不正确")
        # 检查avatar
        if 'avatar' in attrs:
            avatar = attrs['avatar']
            if avatar.size > 1024 * 1024 * 2:
                raise serializers.ValidationError("头像大小不能超过2M")
            attrs['avatar'].name = self.instance.username + '.' + attrs['avatar'].name.split('.')[-1]
        return attrs

    def update(self, instance, validated_data):
        if 'avatar' in validated_data:
            instance.avatar = validated_data['avatar']
        if 'nickname' in validated_data:
            instance.nickname = validated_data['nickname']
        if 'description' in validated_data:
            instance.description = validated_data['description']
        if 'email' in validated_data:
            instance.email = validated_data['email']
        if 'telephone' in validated_data:
            instance.telephone = validated_data['telephone']
        instance.save()
        return instance


class RegisterSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = get_user_model()
        fields = ['password', 'password2', 'nickname', 'avatar', 'email', 'telephone']
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def validate(self, attrs):
        if attrs['password'] != attrs.pop('password2'):
            raise serializers.ValidationError("密码不匹配")
        if not attrs.has('email') and not attrs.has('telephone'):
            raise serializers.ValidationError("电子邮件和电话不能同时为空")
        if 'email' in attrs:
            email = attrs['email']
            if check_email(email):
                pass
            else:
                raise serializers.ValidationError("电子邮件格式不正确")
        # 检查telephone
        if 'telephone' in attrs:
            telephone = attrs['telephone']
            if re.match(r'^1[3456789]\d{9}$', telephone):
                pass
            else:
                raise serializers.ValidationError("电话格式不正确")
        return attrs

    def create(self, validated_data):
        validated_data['username'] = generate_unique_username()
        user_group = Group.objects.get(name='NormalUserGroup')
        user = get_user_model().objects.create_user(**validated_data)
        user.groups.add(user_group)
        return user
