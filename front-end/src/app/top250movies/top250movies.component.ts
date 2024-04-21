import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Movie} from "../models";
import {MovieService} from "../services/movie.service";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-top250movies',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './top250movies.component.html',
  styleUrl: './top250movies.component.css'
})
export class Top250moviesComponent implements OnInit{
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {
    console.log('gere')
  }

  ngOnInit() {
    console.log('here')
    this.getTop250Movies();
  }

  getTop250Movies(){
    console.log('here')
    this.movieService.getTop250Movies().subscribe((data)=>{
      console.log(data);
      this.movies = data;
    })
  }
}
