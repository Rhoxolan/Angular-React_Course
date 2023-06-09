"use strict";
class IceCream {
    constructor(isChocolate, isCaramel, isBerry, isMarshmallow, conePrice) {
        this.isChocolate = isChocolate;
        this.isCaramel = isCaramel;
        this.isBerry = isBerry;
        this.isMarshmallow = isMarshmallow;
        this.conePrice = conePrice;
    }
    getPrice() {
        let price = this.conePrice;
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
    constructor(isChocolate, isCaramel, isBerry, isMarshmallow) {
        super(isChocolate, isCaramel, isBerry, isMarshmallow, BigIceCream.conePrice);
    }
}
BigIceCream.conePrice = 25;
class SmallIceCream extends IceCream {
    constructor(isChocolate, isCaramel, isBerry, isMarshmallow) {
        super(isChocolate, isCaramel, isBerry, isMarshmallow, SmallIceCream.conePrice);
    }
}
SmallIceCream.conePrice = 10;
let iceCreamType = +prompt("1 if Big or 2 is Small");
let isChocolate = false;
let isCaramel = false;
let isBerry = false;
let isMarshmallow = false;
if (+prompt("Add Chocolate = 0 or 1") == 1) {
    isChocolate = true;
}
if (+prompt("Add Caramel = 0 or 1") == 1) {
    isCaramel = true;
}
if (+prompt("Add Berry = 0 or 1") == 1) {
    isBerry = true;
}
if (+prompt("Add Marshmallow = 0 or 1") == 1) {
    isMarshmallow = true;
}
let iceCream;
if (iceCreamType == 1) {
    iceCream = new BigIceCream(isChocolate, isCaramel, isBerry, isMarshmallow);
}
else if (iceCreamType == 2) {
    iceCream = new SmallIceCream(isChocolate, isCaramel, isBerry, isMarshmallow);
}
alert(`Price of the IceCream: ${iceCream.getPrice()}`);
