import {RouterModule, Routes} from '@angular/router';
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
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";
import {TvseriesDetailComponent} from "./tvseries-detail/tvseries-detail.component";
import {TvchannelsDetailComponent} from "./tvchannels-detail/tvchannels-detail.component";
import {FavoritesComponent} from "./favorites/favorites.component";
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, title: 'Home'},
  { path: 'moviecollections', component: MovieCollectionsComponent , title: 'Movie Collections'},
  { path: 'movies', component: MovieListComponent , title: 'Movies'},
  { path: 'movies/:movieId', component: MovieDetailComponent },
  { path: 'top250movies', component: Top250moviesComponent , title: 'top250movies'},
  { path: 'tvseriescollections', component: TvseriesCollectionsComponent , title: 'TV Series Collections'},
  { path: 'tvseries', component: TvseriesListComponent, title: 'TVSeries'},
  { path: 'tvseries/:tvseriesId', component: TvseriesDetailComponent },
  { path: 'top250tvseries', component: Top250tvseriesComponent , title: 'top250tvseries'},
  { path: 'tvchannelcollections', component: TvchannelCollectionsComponent , title: 'TV Channel Collections'},
  { path: 'tvchannels', component: TvchannelsListComponent , title: 'TVChannels'},
  { path: 'tvchannels/:tvchannelId', component: TvchannelsDetailComponent },
  { path: 'top250tvchannels', component: Top250tvchannelsComponent , title: 'top250tvchannels'},
  { path: 'genres', component: GenreListComponent , title: 'Movie Genres'},
  { path: 'genres/:genreId', component: GenreMoviesComponent , title: 'Genre Movies'},
  { path: 'actors', component: ActorListComponent , title: 'Actors'},
  { path: 'actors/:actorId/films', component: ActorFilmsComponent, title: 'Actor Films'},
  { path: 'auth', component: AuthenticationComponent , title: 'Authentication'},
  { path: 'countries', component: CountriesComponent , title: 'Countries'},
  { path: 'countries/:countryId/films', component: CountryFilmsComponent, title: 'Country Films'},
  { path: 'years', component: YearsComponent , title: 'Years'},
  { path: 'years/:yearId/films', component: YearFilmsComponent, title: 'Year Films'},
  { path: 'favorites', component: FavoritesComponent, title: 'Favorites'},

];
export const routing = RouterModule.forRoot(routes);
