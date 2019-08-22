const buttonOne = document.getElementById('button-1');
const buttonTwo = document.getElementById('button-2');
const resultElement = document.getElementById('result');

buttonOne.addEventListener('click', onButtonOneClicked);
buttonTwo.addEventListener('click', onButtonTwoClicked);

function onButtonOneClicked() {
    resultElement.innerHTML = 'Button 1 was clicked!';
}

function onButtonTwoClicked() {
    resultElement.innerHTML = 'You clicked on button 2!';
}
