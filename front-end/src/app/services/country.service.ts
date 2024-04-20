import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../models";

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.BASE_URL}/api/countries/`);
  }
}
