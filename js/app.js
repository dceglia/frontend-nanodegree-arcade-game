// ======================

function Enemy(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';

    // Draw the enemy on the screen, required method for game
    Enemy.prototype.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    };

    // update() {
    //     this.edgeX = this.x > __;
    //     this.edgeY = this.y < __;
    // }

    // changeSpeed() {

    // }
};

function Player() {
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

let player = new Player();
const allEnemies = [...Array(3)].map((_,i)=> new Enemy(0,i+1));


// ======================================================================


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};


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

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    // Now write your own player class
    // This class requires an update(), render() and
    // a handleInput() method.

    // Now instantiate your objects.
    // Place all enemy objects in an array called allEnemies
    // Place the player object in a variable called player