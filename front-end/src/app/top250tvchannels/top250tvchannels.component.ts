import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Movie} from "../models";
import {MovieService} from "../services/movie.service";

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
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.getTop250TVChannels();
  }

  getTop250TVChannels(){
    this.movieService.getTop250TVChannels().subscribe((data)=>{
      console.log(data);
      this.movies = data;
    })
  }
}
