import { Component } from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {TVChannel, TVSeries} from "../models";
import {TvchannelService} from "../services/tvchannel.service";
import {TvseriesService} from "../services/tvseries.service";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-tvseries-list',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './tvseries-list.component.html',
  styleUrl: './tvseries-list.component.css'
})
export class TvseriesListComponent {
  tvseries: TVSeries[] = [];

  constructor(private tvseriesService: TvseriesService) {
  }

  ngOnInit() {
    this.getTVSeries();
  }

  getTVSeries(){
    this.tvseriesService.getTVSeries().subscribe((data)=>{
      console.log(data);
      this.tvseries = data;
    })
  }

}
