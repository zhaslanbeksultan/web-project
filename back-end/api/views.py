from django.http import Http404
from django.shortcuts import render, redirect
from django.views.generic import View
from rest_framework.decorators import api_view

from api.models import Movie, User, TVSeries, TVChannel, Genre
from rest_framework import status, generics, permissions
from rest_framework.views import APIView
from api.serializers import MovieSerializer, TVSeriesSerializer, RegisterSerializer, LoginSerializer, LogoutSerializer, \
    TVChannelsSerializer, GenresSerializer

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
        tv_channels = TVSeries.objects.order_by('-rating')[:250]
        serializer = TVSeriesSerializer(tv_channels, many=True)
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
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)
    except Movie.DoesNotExist:
        raise Http404("No movies found for the specified genre ID.")