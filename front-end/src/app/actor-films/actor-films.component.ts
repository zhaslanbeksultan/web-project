import {Component, OnInit} from '@angular/core';
import {Movie, TVSeries} from "../models";
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../services/movie.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-actor-films',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actor-films.component.html',
  styleUrl: './actor-films.component.css'
})
export class ActorFilmsComponent implements OnInit {
  actorId!: number;
  movies: Movie[] = [];
  tvSeries: TVSeries[] = [];

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.actorId = +params.get('actorId')!;
      this.getMoviesByActor(this.actorId);
    });
  }

  getMoviesByActor(actorId: number): void {
    this.movieService.getMoviesByActor(actorId)
      .subscribe(data => {
        this.movies = data.movies;
        this.tvSeries = data.tv_series;
      });
  }
}
