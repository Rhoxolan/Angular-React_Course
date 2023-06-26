import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable()
export class FilmSerachService {

  constructor(private http: HttpClient) { }

  getFilm(key: string, name: string, year: number) {
    return this.http.get<Movie>(`http://www.omdbapi.com/?apikey=${key}&t=${name}&y=${year}`);
  }
}
