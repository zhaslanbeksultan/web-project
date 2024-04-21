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
    console.log('here')
    return this.http.get<Movie[]>(
      `${this.BASE_URL}/api/movies/top250movies/`
    )
  }

  getMovieById(movieId: number): Observable<Movie> {
    const url = `${this.BASE_URL}/api/movies/${movieId}/`;
    return this.http.get<Movie>(url);
  }

  getMoviesByGenre(genreId: number): Observable<MovieResponse> {
    const url = `${this.BASE_URL}/api/genres/${genreId}/movies`;
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
