import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AirplaneComponent } from './airplane/airplane.component';
import { CarComponent } from './car/car.component';
import { ShipComponent } from './ship/ship.component';

@NgModule({
  declarations: [
    AppComponent,
    AirplaneComponent,
    CarComponent,
    ShipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
