import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFilmComponent } from './search-film/search-film.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: "", component: SearchFilmComponent, title: "Search Film" },
  { path: "search", component: SearchFilmComponent, title: "Search Film" },
  {
    path: "about", component: AboutComponent, title: "About", children: [
      { path: "company", component: AboutCompanyComponent, title: "About Company" },
      { path: "aboutcompany", redirectTo: "company" },
      { path: "contacts", component: ContactsComponent, title: "Contacts" }
    ]
  },
  { path: "**", component: NotFoundComponent, title: "Not found!" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
