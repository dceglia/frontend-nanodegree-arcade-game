// ======================

class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/enemy-bug.png';
        this.edgeX = this.x > 5;
        this.edgeY = this.y < 1;

        // Draw the enemy on the screen, required method for game
        Enemy.prototype.render = function() {
            ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
        }

        // Update the enemy's position, required method for game
        Enemy.prototype.update = function(dt) {

            if(this.edgeX) {
                this.x = -1;
            } else {
                this.x += dt;
            }

        }

        // changeSpeed() {

        // }
    }
}

class Player {
        constructor() {
        this.x = 2;
        this.y = 5;
        this.player = 'images/char-boy.png'

        // update() {
        //     did collision happen - x,y coords contact
        // }

        Player.prototype.render = function() {
            ctx.drawImage(Resources.get(this.player), this.x * 101, this.y * 83);
        }

        // handleInput() {

        // }

        // check 4 win

        // if contacted - go back to first grass row
    }
}

let player = new Player();
let bug1 = new Enemy();
let bug2 = new Enemy();
let bug3 = new Enemy();
const allEnemies = [];
allEnemies.push(bug1, bug2, bug3);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});