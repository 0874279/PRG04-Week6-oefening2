/// <reference path="car.ts"/>
/// <reference path="player.ts"/>

class Level {
    
    public div: HTMLElement;
    public x:number;
    public y:number;
    public width:number;
    public height:number;
    
    private cars:Array<Car> = new Array<Car>();
    private player:Player;
    
    constructor() {    
        this.div = document.createElement("level");
        document.body.appendChild(this.div);
        
        setInterval(()=> this.createCar(), 1400);
        this.player = new Player(this.div);
    }

    private createCar():void {
        this.cars.push(new Car(this.div));
        console.log("aantal autos: " + this.cars.length);
    }

    public update() : void {
        this.player.update();
        for(let c of this.cars){
            c.update();

            // kijk of deze auto de speler raakt
            if(Util.checkCollision(c, this.player)){
                console.log("Een auto raakt de speler!");
                // hier moet je het volgende doen:
                // 1 - verwijder het speler element uit de DOM
                // 2 - zet this.player op undefined en roep de update niet meer aan
                // 3 - maak in level.ts een grafsteentje op de plek waar je dood ging met 'let g = new Grave(x,y,this.div)'
            }
        }
        
    }

    /**
     * Deze functie verwijdert een auto uit de cars array
     */
    private removeFromArray(c:Car){
        let i:number = this.cars.indexOf(c);
        if(i != -1) {
            this.cars.splice(i, 1);
        }
    }

}