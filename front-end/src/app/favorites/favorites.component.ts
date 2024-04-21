import {Component, OnInit} from '@angular/core';
import {Favorite} from "../models";
import {FavoritesService} from "../services/favorites.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit{
  favorites!: Favorite[];
  newMovieId!: number;
  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites(): void {
    this.favoritesService.getFavorites()
      .subscribe(favorites => this.favorites = favorites);
  }

  updateFavorite(favoriteId: number, movieId: number): void {
    this.favoritesService.updateFavorite(favoriteId, movieId)
      .subscribe(() => this.getFavorites());
  }

  removeFavorite(favoriteId: number): void {
    this.favoritesService.removeFavorite(favoriteId)
      .subscribe(() => this.getFavorites());
  }
}
