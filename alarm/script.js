const formElement = document.getElementById('form');
const timeInput = document.getElementById('time-input');
const timerTextElement = document.getElementById('timer-text-element');

const blipSfx = new Audio('blip.wav');
const endSfx = new Audio('end.wav');

let timerId;
let timeLeft;

formElement.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    startTimer();
}

function hideUi() {
    formElement.style.display = 'none';
    timerTextElement.style.display = '';
}

function showUi() {
    formElement.style.display = '';
    timerTextElement.style.display = 'none';
}

function startTimer() {
    hideUi();

    timeLeft = parseInt( timeInput.value );
    timerTextElement.innerHTML = timeLeft;

    timerId = setInterval(timerTick, 1000);
    timerTick();
}

function stopTimer() {
    clearInterval(timerId);
    setTimeout(showUi, 1000);
}

function timerTick() {
    timerTextElement.innerHTML = timeLeft;

    timeLeft--;
    if(timeLeft < 0) {
        endSfx.play();
        stopTimer();
    }
    else {
        blipSfx.play();
    }
}
