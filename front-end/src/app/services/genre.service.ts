import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Genre, Movie} from "../models";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  BASE_URL = "http://localhost:8000"

  constructor(private http: HttpClient) { }

  getGenres():Observable<Genre[]>{
    return this.http.get<Genre[]>(
      `${this.BASE_URL}/api/genres/`
    )
  }
}
