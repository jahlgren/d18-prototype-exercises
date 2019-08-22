// Global variables

const preGameContainer = document.getElementById('pre-game-container');
const gameContainer = document.getElementById('game-container');
const postGameContainer = document.getElementById('post-game-container');

const playerInfoForm = document.getElementById('player-info-form');
const playerInfoNameInput = document.getElementById('player-info-name');
const playerInfoDifficultyInput = document.getElementById('player-info-difficulty');

const gameForm = document.getElementById('game-form');
const gameGuessInput = document.getElementById('game-guess');
const gameGuessButton = document.getElementById('game-guess-button');
const gameDescriptionElement = document.getElementById('game-description');
const gameResultElement = document.getElementById('game-result');

const playAgainButton = document.getElementById('play-again-button');

const game = new GuessTheNumberGame();


// Event listeners

playerInfoForm.addEventListener('submit', onPlayerInfoFormSubmitted);
gameForm.addEventListener('submit', onGameFormSubmitted);
playAgainButton.addEventListener('click', onPlayAgainClicked);

game.addEventListener('start', onGameStarted);
game.addEventListener('incorrect-guess', onGameIncorrectGuess);
game.addEventListener('correct-guess', onGameCorrectGuess);


// Init

playerInfoNameInput.focus();


// Functions

function onPlayerInfoFormSubmitted(event) {
    event.preventDefault();
    game.start(playerInfoNameInput.value, playerInfoDifficultyInput.value);
    gameGuessInput.focus();
}

function onGameFormSubmitted(event) {
    event.preventDefault();
    game.guess(gameGuessInput.value);
}

function onPlayAgainClicked(event) {
    event.preventDefault();
    game.reset();

    preGameContainer.style.display = '';
    gameContainer.style.display = 'none';
    postGameContainer.style.display = 'none';

    playerInfoNameInput.select();
}

function onGameStarted(game) {
    gameDescriptionElement.innerHTML = game.getDescription();
    preGameContainer.style.display = 'none';
    gameContainer.style.display = '';
    postGameContainer.style.display = 'none';

    gameGuessInput.value = '';
    gameGuessInput.disabled = false;
    gameGuessButton.disabled = false;
}

function onGameIncorrectGuess(game) {
    gameResultElement.innerHTML = game.guessMessage;
    gameGuessInput.select();
}

function onGameCorrectGuess(game) {
    gameResultElement.innerHTML = game.guessMessage;
    gameGuessInput.disabled = true;
    gameGuessButton.disabled = true;

    postGameContainer.style.display = '';
    playAgainButton.focus();
}
