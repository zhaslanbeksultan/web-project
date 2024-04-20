import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MovieListComponent} from "./movie-list/movie-list.component";
import {TvseriesListComponent} from "./tvseries-list/tvseries-list.component";
import {TvchannelsListComponent} from "./tvchannels-list/tvchannels-list.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {GenreListComponent} from "./genre-list/genre-list.component";
import {GenreMoviesComponent} from "./genre-movies/genre-movies.component";
import {ActorListComponent} from "./actor-list/actor-list.component";
import {ActorFilmsComponent} from "./actor-films/actor-films.component";
import {CountriesComponent} from "./countries/countries.component";
import {CountryFilmsComponent} from "./country-films/country-films.component";
import {YearsComponent} from "./years/years.component";
import {YearFilmsComponent} from "./year-films/year-films.component";
import {Top250moviesComponent} from "./top250movies/top250movies.component";
import {Top250tvseriesComponent} from "./top250tvseries/top250tvseries.component";
import {Top250tvchannelsComponent} from "./top250tvchannels/top250tvchannels.component";
import {MovieCollectionsComponent} from "./movie-collections/movie-collections.component";
import {TvseriesCollectionsComponent} from "./tvseries-collections/tvseries-collections.component";
import {TvchannelCollectionsComponent} from "./tvchannel-collections/tvchannel-collections.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, title: 'Home'},
  { path: 'moviecollections', component: MovieCollectionsComponent , title: 'Movie Collections'},
  { path: 'movies', component: MovieListComponent , title: 'Movies'},
  { path: 'movies/top250movies', component: Top250moviesComponent , title: 'top250movies'},
  { path: 'tvseriescollections', component: TvseriesCollectionsComponent , title: 'TV Series Collections'},
  { path: 'tvseries', component: TvseriesListComponent, title: 'TVSeries'},
  { path: 'tvseries/top250tvseries', component: Top250tvseriesComponent , title: 'top250tvseries'},
  { path: 'tvchannelcollections', component: TvchannelCollectionsComponent , title: 'TV Channel Collections'},
  { path: 'tvchannels', component: TvchannelsListComponent , title: 'TVChannels'},
  { path: 'tvchannels/top250tvchannels', component: Top250tvchannelsComponent , title: 'top250tvchannels'},
  { path: 'movies/genres', component: GenreListComponent , title: 'Movie Genres'},
  { path: 'movies/genres/:genreId', component: GenreMoviesComponent , title: 'Genre Movies'},
  { path: 'movies/years', component: MovieListComponent , title: 'Movie Years'},
  { path: 'movies/years/:yearId', component: MovieListComponent , title: 'Movie Year'},
  { path: 'movies/countries/', component: MovieListComponent , title: 'Movie Countries'},
  { path: 'movies/countries/:countryId', component: MovieListComponent , title: 'Movie Country'},
  { path: 'actors', component: ActorListComponent , title: 'Actors'},
  { path: 'actors/:actorId/films', component: ActorFilmsComponent, title: 'Actor Films'},
  { path: 'auth', component: AuthenticationComponent , title: 'Authentication'},
  { path: 'countries', component: CountriesComponent , title: 'Countries'},
  { path: 'countries/:countryId/films', component: CountryFilmsComponent, title: 'Country Films'},
  { path: 'years', component: YearsComponent , title: 'Years'},
  { path: 'years/:yearId/films', component: YearFilmsComponent, title: 'Year Films'},

];
