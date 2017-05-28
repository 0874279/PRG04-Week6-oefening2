class Player {

    public div: HTMLElement;    
    public x:number;
    public y:number;
    public width:number;
    public height:number;

    constructor(parent:HTMLElement) {
        this.x = 400;
        this.y = parent.clientHeight - 102;
        this.width = 61;
        this.height = 102;

        document.getElementsByTagName("ui")[0].innerHTML = "Score: 0";

        this.div = document.createElement("player");
        parent.appendChild(this.div);

        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e));

        // toon de score - tel hier 1 punt bij op, elke keer dat je boven in beeld komt
        document.getElementsByTagName("ui")[0].innerHTML = "SCORE 0";
    }
    
    public update() : void {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }

    // W A S D
    private onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case 65:
            this.x -= this.width;
            break;
        case 68:
            this.x += this.width;
            break;
        case 87:
            this.y -= 50;
            break;
        case 83:
            this.y += 50;
            break;
        }
    }

}