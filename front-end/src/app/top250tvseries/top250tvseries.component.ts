import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Movie} from "../models";
import {MovieService} from "../services/movie.service";
import {TvseriesService} from "../services/tvseries.service";

@Component({
  selector: 'app-top250tvseries',
  standalone: true,
    imports: [
        CommonModule
    ],
  templateUrl: './top250tvseries.component.html',
  styleUrl: './top250tvseries.component.css'
})
export class Top250tvseriesComponent implements OnInit{
  movies: Movie[] = [];

  constructor(private tvseriesService: TvseriesService) {
  }

  ngOnInit() {
    this.getTop250TVSeries();
  }

  getTop250TVSeries(){
    this.tvseriesService.getTop250TVSeries().subscribe((data)=>{
      console.log(data);
      this.movies = data;
    })
  }
}
