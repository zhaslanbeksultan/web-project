import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Movie, TVSeries} from "../models";
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../services/movie.service";

@Component({
  selector: 'app-year-films',
  standalone: true,
    imports: [
        CommonModule
    ],
  templateUrl: './year-films.component.html',
  styleUrl: './year-films.component.css'
})
export class YearFilmsComponent implements OnInit{
  yearId!: number;
  movies: Movie[] = [];
  tvSeries: TVSeries[] = [];

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.yearId = +params.get('yearId')!;
      this.getMoviesByYear(this.yearId);
    });
  }

  getMoviesByYear(yearId: number): void {
    this.movieService.getMoviesByYear(yearId)
      .subscribe(data => {
        this.movies = data.movies;
        this.tvSeries = data.tv_series;
      });
  }
}
