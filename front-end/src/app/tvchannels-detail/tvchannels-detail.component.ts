import {Component, OnInit} from '@angular/core';
import {CommonModule, NgIf} from "@angular/common";
import {TVChannel, TVSeries} from "../models";
import {ActivatedRoute} from "@angular/router";
import {TvseriesService} from "../services/tvseries.service";
import {TvchannelService} from "../services/tvchannel.service";

@Component({
  selector: 'app-tvchannels-detail',
  standalone: true,
    imports: [
        CommonModule
    ],
  templateUrl: './tvchannels-detail.component.html',
  styleUrl: './tvchannels-detail.component.css'
})
export class TvchannelsDetailComponent implements OnInit{
  tvchannel!: TVChannel;

  constructor(
    private route: ActivatedRoute,
    private tvchannelService: TvchannelService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const tvchannelId = +params.get('tvchannelId')!;
      if (tvchannelId) {
        this.getTVChannelById(tvchannelId);
      } else {
        console.error('tvchannelId is null');
      }
    });
  }

  getTVChannelById(tvchannelId: number): void {
    this.tvchannelService.getTVChannelById(tvchannelId).subscribe(tvchannel => {
      this.tvchannel = tvchannel;
    });
  }
}
