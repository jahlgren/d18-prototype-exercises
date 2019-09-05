const calculateButton = document.getElementById('button-calculate');

const pizzaSizeInput = document.getElementsByName('pizza-size');

calculateButton.addEventListener('click', calculatePrice);

function calculatePrice(event) {
    let price = 0;

    if(pizzaSizeInput[0].checked) {
        price += parseFloat(pizzaSizeInput[0].value);
    }
    if(pizzaSizeInput[1].checked) {
        price = price + parseFloat(pizzaSizeInput[1].value);
    }
    if(pizzaSizeInput[2].checked) {
        price = price + parseFloat(pizzaSizeInput[2].value);
    }

    console.log(price);
}
