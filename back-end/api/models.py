from django.db import models
from django.contrib.auth.models import AbstractUser
from rest_framework_simplejwt.tokens import RefreshToken

class User(AbstractUser):
    email = models.EmailField(max_length=255, unique=True, db_index=True, default='')

    def __str__(self):
        return self.username

    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return{
            'refresh':str(refresh),
            'access':str(refresh.access_token)
        }

class Actor(models.Model):
    MALE = 'M'
    FEMALE = 'F'
    GENDERS = [
        (MALE, 'Male'),
        (FEMALE, 'Female'),
    ]
    first_name = models.CharField(max_length=100)
    second_name = models.CharField(max_length=100)
    gender = models.CharField(max_length=1, choices=GENDERS, default=MALE)

    def str(self):
        return f'{self.first_name} {self.second_name}'

class Genre(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def str(self):
        return self.name

class Movie(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    year = models.IntegerField(null=True, blank=True)
    genres = models.ManyToManyField(Genre)
    actors = models.ManyToManyField(Actor)
    country = models.TextField()
    poster = models.URLField()
    rating = models.FloatField(max_length=10)

    def str(self):
        return self.name

class TVSeries(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    season = models.IntegerField()
    episodes = models.IntegerField()
    year = models.IntegerField(null=True, blank=True)
    genres = models.ManyToManyField(Genre)
    actors = models.ManyToManyField(Actor)
    country = models.TextField()
    poster = models.URLField()
    rating = models.FloatField(max_length=10)

    def str(self):
        return self.name

class TVChannel(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    year = models.IntegerField(null=True, blank=True)
    country = models.TextField()
    poster = models.URLField()
    rating = models.FloatField(max_length=10)
    def str(self):
        return self.name

