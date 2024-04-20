import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../models";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private http: HttpClient) {}

  // Observable type is a question

  addToFavorites(movieId: number): Observable<Movie[]> {
    return this.http.post<any>(`/api/add-to-favorites/${movieId}/`, {});
  }

  removeFromFavorites(movieId: number): Observable<Movie[]> {
    return this.http.post<any>(`/api/remove-from-favorites/${movieId}/`, {});
  }
}
