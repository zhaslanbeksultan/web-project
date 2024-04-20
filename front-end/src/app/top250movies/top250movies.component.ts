import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Movie} from "../models";
import {MovieService} from "../services/movie.service";

@Component({
  selector: 'app-top250movies',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './top250movies.component.html',
  styleUrl: './top250movies.component.css'
})
export class Top250moviesComponent implements OnInit{
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.getTop250Movies();
  }

  getTop250Movies(){
    this.movieService.getTop250Movies().subscribe((data)=>{
      console.log(data);
      this.movies = data;
    })
  }
}
