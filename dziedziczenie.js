

class Auto{
    constructor(){
        this.kola = 4;
    }
}

class Ford extends Auto {
    constructor(rocznik, kolor) {
        super();
        this.Rocznik = rocznik;
        this.Kolor = kolor;
        

    }
}

var ford1=new Ford(144,"red");
console.log(ford1.kola);