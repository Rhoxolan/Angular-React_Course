abstract class Car {
    public brand : string;
    public abstract getTonnage() : number;

    constructor(brand: string){
        this.brand = brand;
    }
}

class PassengerCar extends Car {

    public getTonnage(): number {
        throw new Error("Method not implemented.");
    }

}