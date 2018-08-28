//   =================
//    ||           ||
//    ||    BUG    ||
//   \  /   OUT   \  /
//    \/           \/
//   =================

class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/enemy-bug.png';
        this.edgeX = 5;

            // courtesy Mozilla Developer Network
        var random = function getRandom(min, max) {
            return Math.random() * (max - min) + min;
        }

            // Draw the enemy on the screen, required method for game
        Enemy.prototype.render = function() {
            ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
        }

            // Update the enemy's position, required method for game
        Enemy.prototype.update = function(dt) {
            if(this.x < this.edgeX) {
                this.x += dt * random(1,5);
            }
            else {
                this.x = -1;
            }
        }
    }
}

class Player {
    constructor() {
        this.x = 2;
        this.y = 5;
        this.player = 'images/char-boy.png';

        Player.prototype.update = function() {
        //     did collision happen - x,y coords contact
        }

        Player.prototype.render = function() {
            ctx.drawImage(Resources.get(this.player), this.x * 101, this.y * 83);
        }

        // check 4 win

        // if contacted - go back to first grass row
    }

    handleInput(input) {
        switch(input) {
            case 'left':
                this.x = this.x + -1;
                break;
            case 'up':
                this.y = this.y + -1;
                break;
            case 'right':
                this.x = this.x + 1;
                break;
            case 'down':
                this.y = this.y + 1;
                break;
        }
    }

}

let player = new Player();
let bug1 = new Enemy(-1, 1);
let bug2 = new Enemy(-1, 2);
let bug3 = new Enemy(-1, 3);
const allEnemies = [];
allEnemies.push(bug1,bug2,bug3);


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
