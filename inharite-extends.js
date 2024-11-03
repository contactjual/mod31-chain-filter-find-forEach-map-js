class Vehicle{
    constructor(name, price){
        this.name= name;
        this.price=price;
    }
    move(){
        console.log('kicho ekta')
    }
}

class Buss extends Vehicle{
    constructor(name, price,seat,ticketPrice){
        super(name,price);
        this.seat= seat;
        this.ticketPrice = ticketPrice;
    }
}