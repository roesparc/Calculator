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
        case '×': return multiply(a, b);
        case '÷': return devide(a, b);
    }
}

const display = document.querySelector('.display');

const clearbtn = document.querySelector('.clearbtn');

const equalsbtn = document.querySelector('.equalsbtn');

const operatorButtons = document.querySelectorAll('.operatorbtn');

const numberButtons = document.querySelectorAll('.numberbtn');

let displayValue = [];
let firstValue = [];
let operatorSelected;

numberButtons.forEach(number => number.addEventListener('click', () => {
    displayValue.push(number.textContent);
    display.textContent = displayValue.toString().replace(/,/g, "");    
}));

operatorButtons.forEach(operator => operator.addEventListener('click', () => {
    operatorSelected = operator.textContent;
    firstValue = displayValue;
    displayValue = [];
}));

equalsbtn.addEventListener('click', () => {
    display.textContent = operate(operatorSelected,
        firstValue.toString().replace(/,/g, ""),
        displayValue.toString().replace(/,/g, ""));
});

clearbtn.addEventListener('click', () => {
    displayValue = [];
    firstValue = [];
    operatorSelected = null;
    display.textContent = 0;
});