import {Component, OnInit} from '@angular/core';
import {Movie} from "../models";
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../services/movie.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit{
  movie!: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const movieId = +params.get('movieId')!;
      if (movieId) {
        this.getMovieDetails(movieId);
      } else {
        console.error('movieId is null');
      }
    });
  }

  getMovieDetails(movieId: number): void {
    this.movieService.getMovieById(movieId).subscribe(movie => {
      this.movie = movie;
    });
  }
}
