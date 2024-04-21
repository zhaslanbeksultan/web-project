import {Component, OnInit} from '@angular/core';
import {Movie} from "../models";
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../services/movie.service";
import {CommonModule} from "@angular/common";
import {FavoritesService} from "../services/favorites.service";

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit{
  movie!: Movie;
  movieId!: number;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private favoritesService: FavoritesService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieId = +params.get('movieId')!;
      if (this.movieId) {
        this.getMovieDetails(this.movieId);
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

  addFavorite(): void {
    this.favoritesService.addFavorite(this.movieId)
      .subscribe(() => console.log('Movie added to favorites'));
  }
}
