const button = document.getElementById('button');
const element = document.getElementById('element');

button.addEventListener('click', onButtonClicked);

function onButtonClicked() {
    if(element.style.display == 'none') {
        button.innerHTML = 'Hide';
        element.style.display = '';
    }
    else {
        button.innerHTML = 'Show';
        element.style.display = 'none';
    }
}
