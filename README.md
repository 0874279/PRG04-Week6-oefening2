# PRG04 Week6 oefening2

## Flappy Crossroads

Links in beeld verschijnen met een setInterval telkens nieuwe auto's die naar rechts rijden. Echter, de auto's blijven eeuwig door rijden, ook nadat ze uit beeld zijn. 

Het karakter is bestuurbaar en logt een console bericht als hij tegen een auto aan loopt.

In game.ts wordt een Level instance gemaakt. Dit is het scherm waarin de weg, auto's en karakter geplaatst worden. De game update het level, en het level update de auto's en de speler.

In level.ts staat al een functie waarmee je een item uit een array kan verwijderen.

### Opdracht

- Verwijder auto's die rechts uit beeld gaan - verwijder zowel het dom element als de car instance in level.ts
- Maak de snelheid van nieuwe auto's steeds iets hoger.
- Als het speler karakter een auto raakt wordt de player instance uit de game verwijderd.
- Ook stop je de interval zodat er geen nieuwe auto's meer verschijnen.
- Op de plek waar je dood ging verschijnt een grafsteentje. Deze maak je aan in level.ts met `let grave = new Grave(x,y)`.

### Voorbeeldcode Timer uitzetten

```
private timerid: number;

// aan zetten
this.timerid = setInterval(()=>this.doSomething()));
   
// uit zetten
clearInterval(this.timerid);
```