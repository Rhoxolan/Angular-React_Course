import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FilmSerachService {

  constructor(private http: HttpClient) { }

  getFilm(name: string, year: number) {
    return this.http.get(`http://www.omdbapi.com/?apikey=key&t=${name}&y=${year}`);
  }
}
