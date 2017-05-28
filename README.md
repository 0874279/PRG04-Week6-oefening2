# PRG04 Week6 oefening2

## Flappy Crossroads

![Crossroads](docs/images/screenshot.png?raw=true "Crossroads")

Links in beeld verschijnen met een setInterval telkens nieuwe auto's die naar rechts rijden. Echter, de auto's blijven eeuwig door rijden, ook nadat ze uit beeld zijn. 

Het karakter is bestuurbaar en logt een console bericht als hij tegen een auto aan loopt.

In game.ts wordt een Level instance gemaakt. Dit is het scherm waarin de weg, auto's en karakter geplaatst worden. De game update het level, en het level update de auto's en de speler.

### Opdracht 1

- Verwijder auto's die rechts uit beeld gaan - verwijder zowel het dom element als de car instance in level.ts
- Als het speler karakter een auto raakt wordt de player instance uit de game verwijderd.
- Ook stop je de interval zodat er geen nieuwe auto's meer verschijnen.
- Op de plek waar je dood ging verschijnt een grafsteentje. Deze maak je aan in level.ts met `let grave = new Grave(x,y)`.

### Opdracht 2

- Maak de snelheid van nieuwe auto's steeds iets hoger.
- Als je boven in beeld komt, zet je de speler weer beneden. 
- Je krijgt 1 punt, je score wordt getoond.

### Voorbeeldcode Timer uitzetten

```
private timerid: number;

// aan zetten
this.timerid = setInterval(()=>this.doSomething()));
   
// uit zetten
clearInterval(this.timerid);
```

### Voorbeeldcode item uit array verwijderen

```
private removeFromArray(c:Car){
    let i:number = this.cars.indexOf(c);
    if(i != -1) {
        this.cars.splice(i, 1);
    }
}
```