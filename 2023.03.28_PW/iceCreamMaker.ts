interface IIceCream {
    getPrice(): number;
}

abstract class IceCream implements IIceCream {
    protected isChocolate: boolean;
    protected isCaramel: boolean;
    protected isBerry: boolean;
    protected isMarshmallow: boolean;
    protected conePrice: number;

    constructor(isChocolate: boolean, isCaramel: boolean, isBerry: boolean,
        isMarshmallow: boolean, conePrice: number) {
        this.isChocolate = isChocolate;
        this.isCaramel = isCaramel;
        this.isBerry = isBerry;
        this.isMarshmallow = isMarshmallow;
        this.conePrice = conePrice;
    }

    getPrice(): number {
        let price: number = this.conePrice;
        if (this.isChocolate) {
            price += 5;
        }
        if (this.isCaramel) {
            price += 6;
        }
        if (this.isBerry) {
            price += 10;
        }
        if (this.isMarshmallow) {
            price += 5;
        }
        return price;
    }
}

class BigIceCream extends IceCream {
    private static conePrice = 25;

    constructor(isChocolate: boolean, isCaramel: boolean, isBerry: boolean,
        isMarshmallow: boolean) {
        super(isChocolate, isCaramel, isBerry, isMarshmallow, BigIceCream.conePrice);
    }
}

class SmallIceCream extends IceCream {
    private static conePrice = 10;

    constructor(isChocolate: boolean, isCaramel: boolean, isBerry: boolean,
        isMarshmallow: boolean) {
        super(isChocolate, isCaramel, isBerry, isMarshmallow, SmallIceCream.conePrice);
    }
}

let iceCreamType = +prompt("1 if Big or 2 is Small")!;
let isChocolate : boolean = false;
let isCaramel : boolean = false;
let isBerry : boolean = false;
let isMarshmallow : boolean = false;

if(+prompt("Add Chocolate = 0 or 1")! == 1) {
    isChocolate = true;
}
if(+prompt("Add Caramel = 0 or 1")! == 1) {
    isCaramel = true;
}
if(+prompt("Add Berry = 0 or 1")! == 1) {
    isBerry = true;
}
if(+prompt("Add Marshmallow = 0 or 1")! == 1) {
    isMarshmallow = true;
}

let iceCream : IceCream;

if (iceCreamType == 1) {
    iceCream = new BigIceCream(isChocolate, isCaramel, isBerry, isMarshmallow);
}
else if (iceCreamType == 2) {
    iceCream = new SmallIceCream(isChocolate, isCaramel, isBerry, isMarshmallow);
}

alert(`Price of the IceCream: ${iceCream!.getPrice()}`);