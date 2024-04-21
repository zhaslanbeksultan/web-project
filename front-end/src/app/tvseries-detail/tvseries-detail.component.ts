import {Component, OnInit} from '@angular/core';
import {CommonModule, NgIf} from "@angular/common";
import {Movie, TVSeries} from "../models";
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../services/movie.service";
import {TvseriesService} from "../services/tvseries.service";

@Component({
  selector: 'app-tvseries-detail',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './tvseries-detail.component.html',
  styleUrl: './tvseries-detail.component.css'
})
export class TvseriesDetailComponent implements OnInit{
  tvseries!: TVSeries;

  constructor(
    private route: ActivatedRoute,
    private tvseriesService: TvseriesService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const tvseriesId = +params.get('tvseriesId')!;
      if (tvseriesId) {
        this.getTVSeriesById(tvseriesId);
      } else {
        console.error('tvseriesId is null');
      }
    });
  }

  getTVSeriesById(tvseriesId: number): void {
    this.tvseriesService.getTVSeriesById(tvseriesId).subscribe(tvseries => {
      this.tvseries = tvseries;
    });
  }
}
