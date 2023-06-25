import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Painting } from './Painting';

@Injectable()
export class PaintingsService {
  private apiUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPaintings(): Observable<Painting[]> {
    return this.http.get<Painting[]>(`${this.apiUrl}/paintings`);
  }

  getPainting(id: number) {
    return this.http.get(`${this.apiUrl}/paintings/${id}`, {responseType: 'blob'});
  }

  getPaintingThumbnail(id: number) {
    return this.http.get(`${this.apiUrl}/paintings/${id}/size/100`, {responseType: 'blob'});
  }

}
