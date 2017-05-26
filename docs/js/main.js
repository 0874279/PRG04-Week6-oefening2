var Car = (function () {
    function Car(parent) {
        this.speed = 0;
        this.div = document.createElement("car");
        parent.appendChild(this.div);
        this.x = -168;
        this.y = (Math.random() * 5) * 120;
        this.width = 168;
        this.height = 108;
        this.speed = Math.random() * 2 + 2;
        this.setColor();
    }
    Car.prototype.update = function () {
        this.x += this.speed;
        if (this.x > window.innerWidth) {
            console.log("Auto uit beeld: " + this.x);
        }
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Car.prototype.setColor = function () {
        var color = Math.random() * 360;
        this.div.style.webkitFilter = "hue-rotate(" + color + "deg)";
        this.div.style.filter = "hue-rotate(" + color + "deg)";
    };
    return Car;
}());
var Player = (function () {
    function Player(parent) {
        var _this = this;
        this.x = 400;
        this.y = parent.clientHeight - 102;
        this.width = 61;
        this.height = 102;
        this.div = document.createElement("player");
        parent.appendChild(this.div);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
    }
    Player.prototype.update = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Player.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
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
    };
    return Player;
}());
var Level = (function () {
    function Level() {
        var _this = this;
        this.cars = new Array();
        this.div = document.createElement("level");
        document.body.appendChild(this.div);
        setInterval(function () { return _this.createCar(); }, 1000);
        this.player = new Player(this.div);
    }
    Level.prototype.createCar = function () {
        this.cars.push(new Car(this.div));
    };
    Level.prototype.update = function () {
        this.player.update();
        for (var _i = 0, _a = this.cars; _i < _a.length; _i++) {
            var c = _a[_i];
            c.update();
            if (Util.checkCollision(c, this.player)) {
                console.log("Een auto raakt de speler!");
            }
        }
    };
    Level.prototype.removeFromArray = function (c) {
        var i = this.cars.indexOf(c);
        if (i != -1) {
            this.cars.splice(i, 1);
        }
    };
    return Level;
}());
var Game = (function () {
    function Game() {
        this.level = new Level();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        this.level.update();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Util = (function () {
    function Util() {
    }
    Util.checkCollision = function (car, player) {
        return (car.x < player.x + player.width &&
            car.x + car.width > player.x &&
            car.y < player.y + player.height &&
            car.height + car.y > player.y);
    };
    return Util;
}());
//# sourceMappingURL=main.js.map