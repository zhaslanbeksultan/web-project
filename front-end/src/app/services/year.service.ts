import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country, Year} from "../models";

@Injectable({
  providedIn: 'root'
})
export class YearService {
  private BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getYears(): Observable<Year[]> {
    return this.http.get<Year[]>(`${this.BASE_URL}/api/years/`);
  }
}
