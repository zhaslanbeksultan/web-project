from django.contrib import admin
from .models import Movie, Actor, Genre, TVChannel, TVSeries, Country, Year


# Register your models here.

@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'year', 'get_genres', 'get_actors', 'country', 'poster', 'rating')

    def get_genres(self, obj):
        return ", ".join([genre.name for genre in obj.genres.all()])
    get_genres.short_description = 'Genres'

    def get_actors(self, obj):
        return ", ".join([f"{actor.first_name} {actor.second_name}" for actor in obj.actors.all()])
    get_actors.short_description = 'Actors'

@admin.register(Genre)
class GenreAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)

@admin.register(TVChannel)
class TVChannelAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'year', 'country', 'poster', 'rating')
    search_fields = ('name',)

@admin.register(TVSeries)
class TVSeriesAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'season', 'episodes', 'year', 'country', 'poster', 'rating')
    search_fields = ('name',)

@admin.register(Actor)
class ActorAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'second_name')
    search_fields = ('first_name',)

@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)

@admin.register(Year)
class YearAdmin(admin.ModelAdmin):
    list_display = ('id', 'year')
    search_fields = ('year',)

