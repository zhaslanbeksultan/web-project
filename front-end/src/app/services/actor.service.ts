import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Actor} from "../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(`${this.BASE_URL}/api/actors/`);
  }
}
