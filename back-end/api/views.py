from django.contrib import messages
# from django.contrib.auth.decorators import login_required
from django.http import Http404
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import View
from rest_framework.decorators import api_view
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated

from api.models import Movie, User, TVSeries, TVChannel, Genre, Actor, Country, Year
from rest_framework import status, generics, permissions, viewsets
from rest_framework.views import APIView
from api.serializers import (MovieSerializer, TVSeriesSerializer, RegisterSerializer, LoginSerializer, LogoutSerializer,
                             TVChannelsSerializer, GenresSerializer, ActorSerializer, CountrySerializer, YearSerializer)

from rest_framework.request import Request
from rest_framework.response import Response


class Top250MoviesAPIView(APIView):
    def get(self, request):
        movies = Movie.objects.order_by('-rating')[:250]
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)

class Top250TVSeriesAPIView(APIView):
    def get(self, request):
        tv_series = TVSeries.objects.order_by('-rating')[:250]
        serializer = TVSeriesSerializer(tv_series, many=True)
        return Response(serializer.data)

class Top250TVChannelsAPIView(APIView):
    def get(self, request):
        tv_channels = TVChannel.objects.order_by('-rating')[:250]
        serializer = TVChannelsSerializer(tv_channels, many=True)
        return Response(serializer.data)



class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    def post(self,request):
        user=request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_data = serializer.data
        return Response(user_data, status=status.HTTP_201_CREATED)

class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    def post(self,request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

class LogoutAPIView(generics.GenericAPIView):
    serializer_class = LogoutSerializer
    permission_classes = (permissions.IsAuthenticated,)
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(["GET", "POST"])
def movie_list(request):
    if request.method == 'GET':
        companies = Movie.objects.all()
        serializer = MovieSerializer(companies, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = MovieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET", "POST"])
def tvchannels_list(request):
    if request.method == 'GET':
        tvchannels = TVChannel.objects.all()
        serializer = TVChannelsSerializer(tvchannels, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = TVChannelsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(["GET", "POST"])
def tvseries_list(request):
    if request.method == 'GET':
        tvseries = TVSeries.objects.all()
        serializer = TVSeriesSerializer(tvseries, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = TVSeriesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET", "POST"])
def genres_list(request):
    if request.method == 'GET':
        genres = Genre.objects.all()
        serializer = GenresSerializer(genres, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = GenresSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_movies_by_genre(request, genre_id):
    try:
        movies = Movie.objects.filter(genres__id=genre_id)
        tv_series = TVSeries.objects.filter(genres__id=genre_id)
        movie_serializer = MovieSerializer(movies, many=True)
        tv_series_serializer = TVSeriesSerializer(tv_series, many=True)
        data = {
            'movies': movie_serializer.data,
            'tv_series': tv_series_serializer.data
        }
        return Response(data)
    except (Movie.DoesNotExist, TVSeries.DoesNotExist):
        raise NotFound("No movies or TV series found for the specified genre ID.")

@api_view(['GET'])
def actor_list(request):
    actors = Actor.objects.all()
    serializer = ActorSerializer(actors, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def actor_movies(request, actor_id):
    actor = get_object_or_404(Actor, pk=actor_id)
    movies = Movie.objects.filter(actors=actor)
    tv_series = TVSeries.objects.filter(actors=actor)
    movie_serializer = MovieSerializer(movies, many=True)
    tv_series_serializer = TVSeriesSerializer(tv_series, many=True)
    data = {
        'movies': movie_serializer.data,
        'tv_series': tv_series_serializer.data
    }
    return Response(data)

@api_view(['GET'])
def country_list(request):
    if request.method == 'GET':
        countries = Country.objects.all()
        serializer = CountrySerializer(countries, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def country_movies(request, country_id):
    country = get_object_or_404(Country, pk=country_id)
    movies = Movie.objects.filter(country=country)
    tv_series = TVSeries.objects.filter(country=country)
    movie_serializer = MovieSerializer(movies, many=True)
    tv_series_serializer = TVSeriesSerializer(tv_series, many=True)
    data = {
        'movies': movie_serializer.data,
        'tv_series': tv_series_serializer.data
    }
    return Response(data)

@api_view(['GET'])
def year_list(request):
    years = Year.objects.all()
    data = [{'id': year.id, 'year': year.year} for year in years]
    return Response(data)


@api_view(['GET'])
def year_movies(request, year_id):
    try:
        year = Year.objects.get(id=year_id)
        movies = Movie.objects.filter(year=year.year)
        tv_series = TVSeries.objects.filter(year=year.year)
        movie_serializer = MovieSerializer(movies, many=True)
        tv_series_serializer = TVSeriesSerializer(tv_series, many=True)
        response_data = {
            'movies': movie_serializer.data,
            'tv_series': tv_series_serializer.data
        }
        return Response(response_data)
    except Year.DoesNotExist:
        return Response({'message': 'Year not found'}, status=404)



@api_view(['GET'])
def year_single(request, year_id):
    year = get_object_or_404(Year, pk=year_id)
    serializer = YearSerializer(year)
    return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
def movie_detail(request, movie_id):
    movie = get_object_or_404(Movie, pk=movie_id)

    if request.method == 'GET':
        serializer = MovieSerializer(movie)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = MovieSerializer(movie, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        movie.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def tvchannel_detail(request, tvchannel_id):
    tvchannel = get_object_or_404(TVChannel, pk=tvchannel_id)
    serializer = TVChannelsSerializer(tvchannel)
    return Response(serializer.data)

@api_view(['GET'])
def tvseries_detail(request, tvseries_id):
    tvseries = get_object_or_404(TVSeries, pk=tvseries_id)
    serializer =TVSeriesSerializer(tvseries)
    return Response(serializer.data)

# class FavoriteListCreateAPIView(generics.ListCreateAPIView):
#     queryset = Favorite.objects.all()
#     serializer_class = FavoriteSerializer
#     permission_classes = [IsAuthenticated]
#
#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)

# class FavoriteRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Favorite.objects.all()
#     serializer_class = FavoriteSerializer
#     permission_classes = [IsAuthenticated]
#
#     def get_queryset(self):
#         return Favorite.objects.filter(user=self.request.user)
