function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function devide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch(operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return devide(a, b);
    }
}

const display = document.querySelector('.display');

const clearbtn = document.querySelector('.clearbtn');

const equalsbtn = document.querySelector('.equalsbtn');

const addbtn = document.querySelector('.addbtn');

const subtractbtn = document.querySelector('.subtractbtn');

const multiplybtn = document.querySelector('.multiplybtn');

const devidebtn = document.querySelector('.devidebtn');

const numberButtons = document.querySelectorAll('.numberbtn');

let displayValue = [];

numberButtons.forEach(button => button.addEventListener('click', () => {
    displayValue.push(button.textContent);
    display.textContent = displayValue.toString().replace(/,/g, "");
}));