import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShowBiggestCar: boolean = true;
  isShowBiggestAirplane: boolean = false;
  isShowBiggestShip: boolean = false;

  showBiggestCar() {
    this.isShowBiggestCar = true;
    this.isShowBiggestAirplane = false;
    this.isShowBiggestShip = false;
  }

  showBiggestAirplane() {
    this.isShowBiggestCar = false;
    this.isShowBiggestAirplane = true;
    this.isShowBiggestShip = false;
  }

  showBiggestShip() {
    this.isShowBiggestCar = false;
    this.isShowBiggestAirplane = false;
    this.isShowBiggestShip = true;
  }
}
