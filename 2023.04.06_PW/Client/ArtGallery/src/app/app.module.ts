import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaintingGalleryComponent } from './painting-gallery/painting-gallery.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }   from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PaintingGalleryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
