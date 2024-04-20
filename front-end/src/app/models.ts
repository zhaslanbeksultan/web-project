export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface Actor {
  id: number;
  firstName: string;
  secondName: string;
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
