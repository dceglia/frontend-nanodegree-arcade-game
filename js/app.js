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
            ctx.drawImage(Resources.get(this.sprite), this.x * 100, this.y * 73);
        }

            // Update the enemy's position, required method for game
        Enemy.prototype.update = function(dt) {
            if(this.x < this.edgeX) {
                this.x += dt * random(1,5) * 2;
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
            ctx.drawImage(Resources.get(this.player), this.x * 101, this.y * 81);
        }

        // check 4 win

        // if contacted - go back to first grass row
    }

    handleInput(input) {
        switch(input) {
            case 'left':
                if (this.x > 0) {
                    this.x = this.x -1;
                } else {
                    this.x = this.x;
                }
                break;
            case 'up':
                if (this.y > 0) {
                    this.y = this.y + -1.12;
                } else {
                    this.y = this.y;
                }
                break;
            case 'right':
                if (this.x < 4) {
                    this.x = this.x + 1;
                } else {
                    this.x = this.x;
                }
                break;
            case 'down':
                if (this.y < 5) {
                    this.y = this.y + 1.12;
                } else {
                    this.y = this.y;
                }
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

// win condition

// crash/collision logic

// win modal

// reset


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
