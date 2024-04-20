import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MovieListComponent} from "./movie-list/movie-list.component";
import {TvseriesListComponent} from "./tvseries-list/tvseries-list.component";
import {TvchannelsListComponent} from "./tvchannels-list/tvchannels-list.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {GenreListComponent} from "./genre-list/genre-list.component";
import {GenreMoviesComponent} from "./genre-movies/genre-movies.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, title: 'Home'},
  { path: 'movies', component: MovieListComponent , title: 'Movies'},
  { path: 'tvseries', component: TvseriesListComponent, title: 'TVSeries'},
  { path: 'tvchannels', component: TvchannelsListComponent , title: 'TVChannels'},
  { path: 'movies/genres', component: GenreListComponent , title: 'Movie Genres'},
  { path: 'movies/genres/:genreId', component: GenreMoviesComponent , title: 'Genre Movies'},
  { path: 'movies/years', component: MovieListComponent , title: 'Movie Years'},
  { path: 'movies/years/:yearId', component: MovieListComponent , title: 'Movie Year'},
  { path: 'movies/countries/', component: MovieListComponent , title: 'Movie Countries'},
  { path: 'movies/countries/:countryId', component: MovieListComponent , title: 'Movie Country'},
  { path: 'movies/actors', component: MovieListComponent , title: 'Movie Actors'},
  { path: 'movies/actors/:actorId', component: MovieListComponent , title: 'Movie Actor'},
  { path: 'auth', component: AuthenticationComponent , title: 'Authentication'},
];
