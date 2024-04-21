import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Movie, Token} from "../models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL = "http://localhost:8000"

  constructor(private http: HttpClient) { }

  getToken(): string | null {
    return localStorage.getItem('access');
  }

  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>(
      `${this.BASE_URL}/api/login/`,
      {username, password}
    )
  }

  signup(email: string, username: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.BASE_URL}/api/register/`,
      { email, username, password }
    );
  }

}
