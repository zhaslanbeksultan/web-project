import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Movie, TVChannel} from "../models";
import {MovieService} from "../services/movie.service";
import {TvchannelService} from "../services/tvchannel.service";

@Component({
  selector: 'app-top250tvchannels',
  standalone: true,
    imports: [
        CommonModule
    ],
  templateUrl: './top250tvchannels.component.html',
  styleUrl: './top250tvchannels.component.css'
})
export class Top250tvchannelsComponent implements OnInit{
  tvchannels: TVChannel[] = [];

  constructor(private tvchannelService: TvchannelService) {
  }

  ngOnInit() {
    this.getTop250TVChannels();
  }

  getTop250TVChannels(){
    this.tvchannelService.getTop250TVChannels().subscribe((data)=>{
      console.log(data);
      this.tvchannels = data;
    })
  }
}
