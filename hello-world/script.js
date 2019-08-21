let myText = 'Hello World!';
let myButton = document.getElementById('button');

myButton.addEventListener('click', onButtonClicked);

function onButtonClicked() {
    alert(myText);
}