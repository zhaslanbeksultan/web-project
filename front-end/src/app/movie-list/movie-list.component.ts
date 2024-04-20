import {Component, OnInit} from '@angular/core';
import {Movie} from "../models";
import {MovieService} from "../services/movie.service";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(){
    this.movieService.getMovies().subscribe((data)=>{
      console.log(data);
      this.movies = data;
    })
  }
}
