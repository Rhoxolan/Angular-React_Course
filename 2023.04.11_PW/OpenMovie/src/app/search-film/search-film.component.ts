import { Component } from '@angular/core';
import { FilmSerachData } from "../film-serach-data";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css']
})
export class SearchFilmComponent {
  searchFilmData: FilmSerachData = new FilmSerachData();
  year = new Date().getFullYear();
  submit(form: NgForm){
    console.log(form);
}
}
