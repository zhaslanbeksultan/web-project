import { Component } from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {Movie, TVChannel} from "../models";
import {MovieService} from "../services/movie.service";
import {TvchannelService} from "../services/tvchannel.service";

@Component({
  selector: 'app-tvchannels-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './tvchannels-list.component.html',
  styleUrl: './tvchannels-list.component.css'
})
export class TvchannelsListComponent {
  tvchannels: TVChannel[] = [];

  constructor(private tvchannelsService: TvchannelService) {
  }

  ngOnInit() {
    this.getTVChannels();
  }

  getTVChannels(){
    this.tvchannelsService.getTVChannels().subscribe((data)=>{
      console.log(data);
      this.tvchannels = data;
    })
  }

}
