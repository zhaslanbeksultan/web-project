from django.shortcuts import render, redirect
from django.views.generic import View
from api.models import Movie, User, TVSeries
from rest_framework import status, generics, permissions
from rest_framework.views import APIView
from api.serializers import MovieSerializer, TVSeriesSerializer, RegisterSerializer, LoginSerializer, LogoutSerializer

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
