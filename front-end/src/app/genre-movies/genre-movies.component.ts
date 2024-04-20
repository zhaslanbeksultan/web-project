import {Component, OnInit} from '@angular/core';
import {Movie, TVSeries} from "../models";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {MovieService} from "../services/movie.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-genre-movies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './genre-movies.component.html',
  styleUrl: './genre-movies.component.css'
})
export class GenreMoviesComponent implements OnInit {
  genreId: string | null = null;
  movies: Movie[] = [];
  tvSeries: TVSeries[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.genreId = params.get('genreId');
      if (this.genreId) {
        this.getMoviesByGenre(this.genreId);
      }
    });
  }

  getMoviesByGenre(genreId: string): void {
    this.movieService.getMoviesByGenre(genreId)
      .subscribe(data  => {
        this.movies = data.movies;
        this.tvSeries = data.tv_series;
      });
  }
}
