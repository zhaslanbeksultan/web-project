import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Favorite} from "../models";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  BASE_URL = "http://localhost:8000/api/favorites/"

  constructor(private http: HttpClient, private authService: AuthService) {}


getFavorites(): Observable<Favorite[]> {
  const token = this.authService.getToken();
  if (token) {
    const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
    return this.http.get<Favorite[]>(this.BASE_URL, { headers });
  } else {
    return throwError('JWT token is not available');
  }
}


  addFavorite(movieId: number): Observable<Favorite> {
    return this.http.post<Favorite>(this.BASE_URL, { movie: movieId });
  }

  updateFavorite(favoriteId: number, movieId: number): Observable<Favorite> {
    const url = `${this.BASE_URL}${favoriteId}/`;
    return this.http.put<Favorite>(url, { movie: movieId });
  }

  removeFavorite(favoriteId: number): Observable<void> {
    const url = `${this.BASE_URL}${favoriteId}/`;
    return this.http.delete<void>(url);
  }
}
