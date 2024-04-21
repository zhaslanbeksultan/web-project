from . import views
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from .views import FavoriteListCreateAPIView, FavoriteRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('register/',views.RegisterView.as_view(),name="register"),
    path('login/',views.LoginAPIView.as_view(),name="login"),
    path('logout/', views.LogoutAPIView.as_view(), name="logout"),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('movies/', views.movie_list, name='movies'),
    path('movies/<int:movie_id>/', views.movie_detail, name='movie_detail'),
    path('tvchannels/', views.tvchannels_list, name='tvchannels'),
    path('tvchannels/<int:tvchannel_id>/', views.tvchannel_detail, name='tvchannel_detail'),
    path('tvseries/', views.tvseries_list, name='tvseries'),
    path('tvseries/<int:tvseries_id>/', views.tvseries_detail, name='tvseries_detail'),
    path('genres/', views.genres_list, name='genres'),
    path('genres/<int:genre_id>/movies/', views.get_movies_by_genre, name='get_movies_by_genre'),
    path('actors/', views.actor_list, name='actors'),
    path('actors/<int:actor_id>/movies/', views.actor_movies, name='actor_movies'),
    path('countries/', views.country_list, name='country_list'),
    path('countries/<int:country_id>/movies/', views.country_movies, name='country_movies'),
    path('years/', views.year_list, name='year_list'),
    path('years/<int:year_id>/', views.year_single, name='year'),
    path('years/<int:year_id>/movies/', views.year_movies, name='year_movies'),
    path('movies/top250movies/', views.Top250MoviesAPIView.as_view(), name='top250movies'),
    path('top250tvseries/', views.Top250TVSeriesAPIView.as_view(), name='top250tvserials'),
    path('top250tvchannels/', views.Top250TVChannelsAPIView.as_view(), name='top250tvchannels'),
    path('favorites/', FavoriteListCreateAPIView.as_view(), name='favorite-list-create'),
    path('favorites/<int:pk>/', FavoriteRetrieveUpdateDestroyAPIView.as_view(),
         name='favorite-retrieve-update-destroy'),
]