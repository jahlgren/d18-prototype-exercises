let input = document.getElementById('name');
let button = document.getElementById('button');

button.addEventListener('click', onButtonClick);

function onButtonClick() {
    alert('Hello ' + input.value);
}
