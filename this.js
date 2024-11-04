class persone {
    constructor(name, age){
        this.name=name;
        this.age = age;
    }
    sleep(){
        console.log(`sleep now ${this.name}`)
    }
}

const jual = new persone('Jual Rana', 21);
console.log(jual);
jual.sleep();

const badam = new persone('kacha badam', 21);
badam.sleep();