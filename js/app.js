//   =================
//    ||           ||
//    ||    BUG    ||
//   \  /   OUT   \  /
//    \/           \/
//   =================


var modal = document.querySelector('#modal');
var timer = document.querySelector('.game-timer');

// courtesy Mozilla Developer Network
var random = function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

/* StopWatch function from Udacity scholar Ryan Waite's "Script Store" -
   https://github.com/ryanwaite28/script-store/blob/master/js/stop-watch.js */
const StopWatch = function StopWatch() {
    const self = this;
  
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
  
    let timer;
    let on = false;
  
    self.startTimer = function(callback) {
      if(on === true) { return; }
      on = true;
      timer = setInterval(function(){
        seconds++;
        if(seconds === 60) {
          seconds = 0;
          minutes++;
          if(minutes === 60) {
            minutes = 0;
            hours++;
          }
        }
        if(callback && callback.constructor === Function) {
          callback();
        }
      }, 1000);
      console.log('timer started');
    }
  
    self.stopTimer = function() {
      clearInterval(timer);
      on = false;
      console.log('timer ended: ', self.getTimeString());
    }
  
    self.resetTimer = function() {
      self.stopTimer();
      hours = 0;
      minutes = 0;
      seconds = 0;
    }
  
    self.getTimeString = function() {
      let hour = hours > 9 ? String(hours) : '0' + String(hours);
      let minute = minutes > 9 ? String(minutes) : '0' + String(minutes);
      let second = seconds > 9 ? String(seconds) : '0' + String(seconds);
      let timeString = hour + ':' + minute + ':' + second;
      return timeString;
    }
  
    self.getHours = function() {
      return hours;
    }
  
    self.getMinutes = function() {
      return minutes;
    }
  
    self.getSeconds = function() {
      return seconds;
    }
}

// function to begin the timer and output the time in the HTML
function startGameTimer() {
    watch.startTimer(function() {
        timer.innerText = watch.getTimeString();
    });
}

// function to stop the timer and output the time in HTML
function stopGameTimer() {
    watch.stopTimer(function() {
        timer.innerText = watch.getTimeString();
    });
}

// function implementing the modal
function showModal() {
    modal.showModal();
    stopGameTimer();

    var modalTime = document.querySelector('#modal-time');
    modalTime.innerHTML = 'Time Taken: ' + watch.getTimeString();
}

// function to close the modal
function closeModal() {
    modal.close();
}

// function holding the methods to restart the game
// referenced Jen Hanson's modal function
function resetGame() {
    location.reload();
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
            if (this.x < player.x + .7 && this.x + .5 > player.x && 
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
        this.safeCross = false;

        // referenced Matt Cranford's walkthrough - Thanks!!
        // https://matthewcranford.com/arcade-game-walkthrough-part-6-collisions-win-conditions-and-game-resets/
        Player.prototype.update = function() {
            if (this.y < 0) {
                this.safeCross = true;
                showModal();
            }
        }

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
let watch = new StopWatch();
const allEnemies = [];
allEnemies.push(bug1,bug2,bug3);
startGameTimer();

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