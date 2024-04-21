import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie, TVChannel, TVSeries} from "../models";

@Injectable({
  providedIn: 'root'
})
export class TvchannelService {

  BASE_URL = "http://localhost:8000"

  constructor(private http: HttpClient) { }

  getTVChannels():Observable<TVChannel[]>{
    return this.http.get<TVChannel[]>(
      `${this.BASE_URL}/api/tvchannels/`
    )
  }
  getTop250TVChannels():Observable<TVChannel[]>{
    return this.http.get<TVChannel[]>(
      `${this.BASE_URL}/api/top250tvchannels/`
    )
  }

  getTVChannelById(tvchannelId: number): Observable<TVChannel> {
    const url = `${this.BASE_URL}/api/tvchannel/${tvchannelId}/`;
    return this.http.get<TVChannel>(url);
  }
}
