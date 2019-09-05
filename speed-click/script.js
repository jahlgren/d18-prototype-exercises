const startButton = document.getElementById('start-button');
const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');

let timeoutId;

startButton.addEventListener('click', onStartButtonClicked);
noButton.addEventListener('click', onNoButtonClicked);

function onStartButtonClicked(event) {
    startButton.style.display ='none';
    noButton.style.display = '';

    let timeMs = 1000 + Math.round(Math.random() * 9000);
    timeoutId = setTimeout(showYesButton, timeMs);
}

function onNoButtonClicked(event) {
    noButton.style.display = 'none';
    clearTimeout(timeoutId);
}

function showYesButton() {
    noButton.style.display = 'none';
    yesButton.style.display = '';
}
