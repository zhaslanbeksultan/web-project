import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "../models";
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

  getMoviesByGenre(genreId: string): Observable<Movie[]> {
    const url = `${this.BASE_URL}/api/movies/genres/${genreId}/`;
    return this.http.get<Movie[]>(url);
  }
}
