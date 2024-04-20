import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Movie, MovieResponse,} from "../models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  BASE_URL = "http://localhost:8000"

  constructor(private http: HttpClient) { }

  getMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>(
      `${this.BASE_URL}/api/movies/`
    )
  }
  getTop250Movies():Observable<Movie[]>{
    return this.http.get<Movie[]>(
      `${this.BASE_URL}/api/top250movies/`
    )
  }
  getTop250TVChannels():Observable<Movie[]>{
    return this.http.get<Movie[]>(
      `${this.BASE_URL}/api/top250tvchannels/`
    )
  }
  getTop250TVSeries():Observable<Movie[]>{
    return this.http.get<Movie[]>(
      `${this.BASE_URL}/api/top250tvseries/`
    )
  }

  getMoviesByGenre(genreId: string): Observable<MovieResponse> {
    const url = `${this.BASE_URL}/api/movies/genres/${genreId}/`;
    return this.http.get<MovieResponse>(url);
  }

  getMoviesByActor(actorId: number): Observable<MovieResponse> {
    const url = `${this.BASE_URL}/api/actors/${actorId}/movies`;
    return this.http.get<MovieResponse>(url);
  }
  getMoviesByCountry(countryId: number): Observable<MovieResponse> {
    const url = `${this.BASE_URL}/api/countries/${countryId}/movies`;
    return this.http.get<MovieResponse>(url);
  }
  getMoviesByYear(yearId: number): Observable<MovieResponse> {
    const url = `${this.BASE_URL}/api/years/${yearId}/movies`;
    return this.http.get<MovieResponse>(url);
  }
}
