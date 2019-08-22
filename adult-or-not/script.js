const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const resultElement = document.getElementById('result');

form.addEventListener('submit', onFormSubmitted);

function onFormSubmitted(event) {
    event.preventDefault();

    let age = parseInt(ageInput.value);
    
    if(age < 18) {
        resultElement.innerHTML = 'Hello ' + nameInput.value + '! You are not an adult.';
    } else {
        resultElement.innerHTML = 'Hello ' + nameInput.value + '! You are an adult!';
    }
}
