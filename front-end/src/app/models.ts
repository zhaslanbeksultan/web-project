export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface Actor {
  id: number;
  first_name: string;
  second_name: string;
  gender: 'M' | 'F';
}

export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  name: string;
  description: string;
  year: number;
  genres: Genre[];
  actors: Actor[];
  country: string;
  poster: string;
  rating: number;
}

export interface TVSeries {
  id: number;
  name: string;
  description: string;
  season: number;
  episodes: number;
  year?: number | null;
  genres: Genre[];
  actors: Actor[];
  country: string;
  poster: string;
  rating: number;
}

// tv-channel.interface.ts

export interface TVChannel {
  id: number;
  name: string;
  description: string;
  year: number;
  country: string;
  poster: string;
  rating: number;
}

export interface Token {
  access: string;
  refresh: string;
}
export interface Country {
  id: number;
  name: string;
}

export interface Year {
  id: number;
  year: number;
}

export interface MovieResponse {
  movies: Movie[];
  tv_series: TVSeries[];
}

export interface Favorite {
  id: number;
  user: string; // Assuming user is identified by username
  movie: number; // Movie ID
}
