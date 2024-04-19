from django.contrib import auth
from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import RefreshToken, TokenError

from api.models import Movie, TVSeries, TVChannel, User, Genre


class TVChannelsSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    year = serializers.IntegerField()
    country = serializers.CharField()
    poster = serializers.URLField()
    rating = serializers.FloatField()

    def create(self, validated_data):
        instance = TVChannel.objects.create(name=validated_data.get("name"),
                                            description=validated_data.get("description"),
                                            year=validated_data.get("city"),
                                            country=validated_data.get("address"),
                                            poster=validated_data.get("description"),
                                            rating=validated_data.get("city"))
        return instance

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.description = validated_data.get('description')
        instance.year = validated_data.get('year')
        instance.country = validated_data.get('country')
        instance.poster = validated_data.get('poster')
        instance.rating = validated_data.get('rating')
        instance.save()
        return instance

class GenresSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        instance = Genre.objects.create(name=validated_data.get("name"))
        return instance

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.save()
        return instance

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ("name", "description", "year", "genres", "actors", "country", "poster", "rating")

class TVSeriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TVSeries
        fields = ("name", "description", "season", "episodes",
                  "year", "genres", "actors", "country", "poster", "rating")


# Authentication Serializers
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=68, min_length=6, write_only=True)
    class Meta:
        model = User
        fields = ['email', 'username', 'password']
    def validate(self, attrs):
        email = attrs.get('email', '')
        username = attrs.get('username', '')
        if not username.isalnum():
            raise serializers.ValidationError(
                self.default_error_messages)
        return attrs
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

class LoginSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=68, min_length=6,write_only=True)
    username = serializers.CharField(max_length=255, min_length=3)
    tokens = serializers.SerializerMethodField()
    def get_tokens(self, obj):
        user = User.objects.get(username=obj['username'])
        return {
            'refresh': user.tokens()['refresh'],
            'access': user.tokens()['access']
        }
    class Meta:
        model = User
        fields = ['password','username','tokens']
    def validate(self, attrs):
        username = attrs.get('username','')
        password = attrs.get('password','')
        user = auth.authenticate(username=username,password=password)
        if not user:
            raise AuthenticationFailed('Invalid credentials, try again')
        if not user.is_active:
            raise AuthenticationFailed('Account disabled, contact admin')
        return {
            'email': user.email,
            'username': user.username,
            'tokens': user.tokens
        }

class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()
    def validate(self, attrs):
        self.token = attrs['refresh']
        return attrs
    def save(self, **kwargs):
        try:
            RefreshToken(self.token).blacklist()
        except TokenError:
            self.fail('bad_token')