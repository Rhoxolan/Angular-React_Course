import { Component } from '@angular/core';
import { FilmSerachData } from "../film-serach-data";
import { NgForm } from '@angular/forms';
import { FilmSerachService } from '../film-serach.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css'],
  providers: [FilmSerachService]
})
export class SearchFilmComponent {
  searchFilmData: FilmSerachData = new FilmSerachData();
  year = new Date().getFullYear();
  movie?: Movie;

  constructor(private filmSerachService: FilmSerachService) { }

  submit(form: NgForm) {
    this.filmSerachService.getFilm(form.value.key, form.value.name, form.value.year).subscribe({
      next: data => this.movie = data,
      error: err => console.error(err)
    });
  }
}
