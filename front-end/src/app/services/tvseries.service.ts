import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TVChannel, TVSeries} from "../models";

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
}
