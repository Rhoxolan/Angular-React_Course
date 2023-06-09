"use strict";
class Car {
    constructor(brand, price, className) {
        this.brand = brand;
        this.price = price;
        this.className = className;
    }
    getPriceInfo() {
        return `The ${this.className} ${this.brand} has price ${this.price}`;
    }
}
class PassengerCar extends Car {
    constructor(brand, price) {
        super(brand, price, PassengerCar.className);
    }
}
PassengerCar.className = "Passenger Car";
class Truck extends Car {
    constructor(brand, price) {
        super(brand, price, Truck.className);
    }
}
Truck.className = "Truck";
class Bus extends Car {
    constructor(brand, price) {
        super(brand, price, Bus.className);
    }
}
Bus.className = "Bus";
let carList = [
    new PassengerCar("Honda", 150000),
    new Truck("Volvo", 250000),
    new Bus("Mercedes", 30000)
];
carList.forEach(c => console.log(c.getPriceInfo() + '\n'));
