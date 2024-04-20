import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Movie} from "../models";
import {MovieService} from "../services/movie.service";

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

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.getTop250TVSeries();
  }

  getTop250TVSeries(){
    this.movieService.getTop250TVSeries().subscribe((data)=>{
      console.log(data);
      this.movies = data;
    })
  }
}
