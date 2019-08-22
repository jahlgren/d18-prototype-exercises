class GuessTheNumberGame {
    
    constructor() {
        this.reset();
        this._eventListeners = [];
    }

    reset() {
        this.isPlaying = false;
        this.playerName = 'Unknown';
        this.maxRange = 10;
        this.guessCount = 0;
        this.numberToGuess = Math.round(Math.random() * this.maxRange);
        this.guessMessage = '';
    }

    start(playerName, maxRange) {
        this.reset();
        this.isPlaying = true;

        if(playerName) {
            this.playerName = playerName;
        }
        if(maxRange) {
            this.maxRange = maxRange;
        }

        this.emit('start');
    }

    guess(guessedValue) {
        if(this.isPlaying == false) {
            console.error('You need to start the game before guessing.');
            return;
        }

        this.guessCount++;
        const guessedNumber = parseInt(guessedValue);

        if(guessedNumber === this.numberToGuess) {
            this.isPlaying = false;
            this.guessMessage = 'Good ' + this.playerName + '! It took you ' + this.guessCount + ' tries to guess the correct number.';
            this.emit('correct-guess');
        }
        else if(guessedNumber < 0 || guessedNumber > this.maxRange) {
            this.guessMessage = 'The guessed number must be between 0 and ' + this.maxRange;
            this.emit('incorrect-guess');
        }
        else if(guessedNumber < this.numberToGuess) {
            this.guessMessage = 'Your guess is too low';
            this.emit('incorrect-guess');
        } 
        else if(guessedNumber > this.numberToGuess) {
            this.guessMessage = 'Your guess is too high';
            this.emit('incorrect-guess');
        }
        else {
            this.guessMessage = 'Your guess must be a number!';
            this.emit('incorrect-guess');
        }
    }

    getDescription() {
        return "Guess a number between 0 and " + this.maxRange + ".";
    }

    emit(eventName) {
        if(typeof this._eventListeners[eventName] === undefined) {
            return;
        }
        this._eventListeners[eventName].forEach(callback => {
            callback(this);
        });
    }

    addEventListener(eventName, callback) {
        if(typeof this._eventListeners[eventName] == 'undefined') {
            this._eventListeners[eventName] = [];
        }
        const index = this._eventListeners[eventName].indexOf(callback);
        if(index < 0) {
            this._eventListeners[eventName].push(callback);
        }
    }

    removeEventListener(eventName, callback) {
        if(typeof this._eventListeners[eventName] == 'undefined') {
            return;
        }
        const index = this._eventListeners[eventName].indexOf(callback);
        if(index >= 0) {
            this._eventListeners[eventName].splice(index, 1);
        }
    }
}
