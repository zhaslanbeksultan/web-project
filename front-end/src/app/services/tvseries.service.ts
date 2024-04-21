import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie, TVChannel, TVSeries} from "../models";

@Injectable({
  providedIn: 'root'
})
export class TvseriesService {

  BASE_URL = "http://localhost:8000"

  constructor(private http: HttpClient) { }

  getTVSeries():Observable<TVSeries[]>{
    return this.http.get<TVSeries[]>(
      `${this.BASE_URL}/api/tvseries/`
    )
  }

  getTop250TVSeries():Observable<Movie[]>{
    return this.http.get<Movie[]>(
      `${this.BASE_URL}/api/top250tvseries/`
    )
  }

  getTVSeriesById(tvseriesId: number): Observable<TVSeries> {
    const url = `${this.BASE_URL}/api/tvseries/${tvseriesId}/`;
    return this.http.get<TVSeries>(url);
  }
}
