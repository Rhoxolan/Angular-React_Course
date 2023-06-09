abstract class Car {
    public brand: string;
    public price: number;
    private className: string;

    constructor(brand: string, price: number, className: string) {
        this.brand = brand;
        this.price = price;
        this.className = className;
    }

    public getPriceInfo(): string {
        return `The ${this.className} ${this.brand} has price ${this.price}`;
    }
}

class PassengerCar extends Car {

    private static className : string = "Passenger Car";

    constructor(brand: string, price: number) {
        super(brand, price, PassengerCar.className);
    }
}

class Truck extends Car {

    private static className : string = "Truck";

    constructor(brand: string, price: number) {
        super(brand, price, Truck.className);
    }
}

class Bus extends Car {

    private static className : string = "Bus";

    constructor(brand: string, price: number) {
        super(brand, price, Bus.className);
    }
}

let carList: Car[] = [
    new PassengerCar("Honda", 150000),
    new Truck("Volvo", 250000),
    new Bus("Mercedes", 30000)
];

carList.forEach(c => console.log(c.getPriceInfo() + '\n'));