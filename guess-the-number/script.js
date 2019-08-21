let numberInput = document.getElementById('number');
let submitButton = document.getElementById('button');
let resultElement = document.getElementById('result');

submitButton.addEventListener('click', onButtonClicked);

let numberToGuess = Math.round(Math.random() * 20);

function onButtonClicked(event) {
    guess(numberInput.value, numberToGuess);
    event.preventDefault();
}

function guess(guessedValue, numberToGuess) {
    let guessedNumber = parseInt(guessedValue);
    if(isNaN(guessedNumber)) {
        resultElement.innerHTML = 'Your guess must be a number!';
        return;
    }
    else if(guessedNumber < 0 || guessedNumber > 20) {
        resultElement.innerHTML = 'The guessed number must be between 0 and 20';
        return;
    }
    
    if(guessedNumber < numberToGuess) {
        resultElement.innerHTML = 'You guess is too low';
        return;
    } else if(guessedNumber > numberToGuess) {
        resultElement.innerHTML = 'You guess is too high';
        return;
    }

    resultElement.innerHTML = 'You guessed the correct number!';
}
