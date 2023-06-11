import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LoremIpsumComponent } from './lorem-ipsum/lorem-ipsum.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    LoremIpsumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
