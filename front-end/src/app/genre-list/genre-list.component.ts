import {Component, OnInit} from '@angular/core';
import {MovieService} from "../services/movie.service";
import {GenreService} from "../services/genre.service";
import {Genre, Movie} from "../models";
import {CommonModule, NgForOf} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-genre-list',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './genre-list.component.html',
  styleUrl: './genre-list.component.css'
})
export class GenreListComponent implements OnInit{
  genres: Genre[] = [];
  constructor(private genreService: GenreService) {
  }

  ngOnInit() {
    this.getGenres();
  }


  getGenres(){
    this.genreService.getGenres().subscribe((data)=>{
      console.log(data);
      this.genres = data;
    })
  }
}
