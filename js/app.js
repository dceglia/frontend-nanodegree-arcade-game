//   =================
//    ||           ||
//    ||    BUG    ||
//   \  /   OUT   \  /
//    \/           \/
//   =================

// courtesy Mozilla Developer Network
var random = function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// referenced Rodrick Bloomfield's introduction webinar
// https://zoom.us/recording/play/aulotDlzKFegQFIJTaTzKgWvNkVsYtlwO454vL1UPE1Cm6lOUBQCtfVurPOIAGAS?startTime=1529542978000
class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/enemy-bug.png';
        this.edgeX = 5;

            // Draw the enemy on the screen, required method for game
        Enemy.prototype.render = function() {
            ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
        }

            // Update the enemy's position, required method for game
        Enemy.prototype.update = function(dt) {
            if(this.x < this.edgeX) {
                this.x += dt * random(1,6);
            }
            else {
                this.x = -1;
            }
            this.collisionLogic();
        }

        Enemy.prototype.collisionLogic = function() {
            if (this.x < player.x + .9 && this.x + .6 > player.x && 
                this.y < player.y + .5 && this.y + .1 > player.y
            ) {
                player.reset();
            }
        }
    }
}

class Player {
    constructor() {
        this.x = 2;
        this.y = 5;
        this.player = 'images/char-boy.png';

        // Player.prototype.update = function() {

        // }

        Player.prototype.render = function() {
            ctx.drawImage(Resources.get(this.player), this.x * 101, this.y * 83);
        }

        Player.prototype.reset = function() {
            this.x = 2;
            this.y = 5;
        }
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
let bug1 = new Enemy(random(-1,10), 1);
let bug2 = new Enemy(-5, 2);
let bug3 = new Enemy(-9, 3);
const allEnemies = [];
allEnemies.push(bug1,bug2,bug3);

// win condition

// win modal


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
