import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {Movie, TVSeries} from "../models";
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../services/movie.service";
import {CountryService} from "../services/country.service";

@Component({
  selector: 'app-country-films',
  standalone: true,
    imports: [
        CommonModule
    ],
  templateUrl: './country-films.component.html',
  styleUrl: './country-films.component.css'
})
export class CountryFilmsComponent implements OnInit{
  countryId!: number;
  movies: Movie[] = [];
  tvSeries: TVSeries[] = [];

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.countryId = +params.get('countryId')!;
      this.getMoviesByCountry(this.countryId);
    });
  }

  getMoviesByCountry(countryId: number): void {
    this.movieService.getMoviesByCountry(countryId)
      .subscribe(data => {
        this.movies = data.movies;
        this.tvSeries = data.tv_series;
      });
  }
}
