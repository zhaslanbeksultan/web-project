from . import views
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('register/',views.RegisterView.as_view(),name="register"),
    path('login/',views.LoginAPIView.as_view(),name="login"),
    path('logout/', views.LogoutAPIView.as_view(), name="logout"),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('movies/', views.movie_list, name='movies'),
    path('tvchannels/', views.tvchannels_list, name='tvchannels'),
    path('tvseries/', views.tvseries_list, name='tvseries'),
    path('genres/', views.genres_list, name='genres'),
    path('movies/genres/<int:genre_id>/', views.get_movies_by_genre, name='get_movies_by_genre'),
    path('actors/', views.actor_list, name='actors'),
    path('actors/<int:actor_id>/movies/', views.actor_movies, name='actor_movies'),
    path('countries/', views.country_list, name='country_list'),
    path('countries/<int:country_id>/movies/', views.country_movies, name='country_movies'),
    path('years/', views.year_list, name='year_list'),
    path('years/<int:year_id>/movies/', views.year_movies, name='year_movies'),
    path('top250movies/', views.Top250MoviesAPIView.as_view(), name='top250movies'),
    path('top250tvseries/', views.Top250TVSeriesAPIView.as_view(), name='top250tvserials'),
    path('top250tvchannels/', views.Top250TVChannelsAPIView.as_view(), name='top250tvchannels'),
]