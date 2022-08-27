function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch(operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '×': return multiply(a, b);
        case '÷': return divide(a, b);
    }
}

const display = document.querySelector('.display');

const ongoingDisplay = document.querySelector('.ongoingDisplay');

const allClearBtn = document.querySelector('.allClearBtn');

const backspaceBtn = document.querySelector('.backspaceBtn');

const equalsBtn = document.querySelector('.equalsBtn');

const operatorButtons = document.querySelectorAll('.operatorBtn');

const numberButtons = document.querySelectorAll('.numberBtn');

let displayValue = [];
let displayValueToNumber;
let previousValue;
let operatorSelected;

numberButtons.forEach
(number => number.addEventListener('click', () => {
    if (previousValue === undefined) {
        ongoingDisplay.textContent = '';
    }
    if (display.textContent === 'ERROR') {
        ongoingDisplay.textContent = '';
    }
    if (displayValue.length === 0 && number.textContent == '0') { 
        display.textContent = 0;
        displayValueToNumber = 0;
    } else {
        if (number.textContent ===
            displayValue.find(value => value === '.')) return;
        if (displayValue.length === 0
            && number.textContent === '.') {
            displayValue.push('0', '.');
        } else {
            displayValue.push(number.textContent);
        }
        displayValueToNumber =
        Number(displayValue.toString().replace(/,/g, ""));
        display.textContent =
        displayValue.toString().replace(/,/g, "");
    }
}));

operatorButtons.forEach
(operator => operator.addEventListener('click', () => {
    if (displayValueToNumber === undefined) return;
    ongoingDisplay.textContent =
    `${displayValueToNumber} ${operator.textContent}`;
    if (previousValue !== undefined) {
        if (operatorSelected === '÷'
        && displayValueToNumber === 0) {
            display.textContent = 'ERROR';
            ongoingDisplay.textContent =
            `${previousValue} ${operatorSelected}
            ${displayValueToNumber}`;
            previousValue = undefined;
        } else {    
            previousValue = Math.round(operate(operatorSelected,
            previousValue, displayValueToNumber)*1000)/1000;
            ongoingDisplay.textContent =
            `${previousValue} ${operator.textContent}`;
        }
    } else {
        previousValue = displayValueToNumber;
    }
    operatorSelected = operator.textContent;
    displayValue = [];
    displayValueToNumber = undefined;
}));

equalsBtn.addEventListener('click', () => {
    if (previousValue === undefined
        || displayValueToNumber === undefined) return;
    ongoingDisplay.textContent =
    `${previousValue} ${operatorSelected}
    ${displayValueToNumber} =`;
    if (operatorSelected === '÷' && displayValueToNumber === 0) {
        display.textContent = 'ERROR';
    } else {
        display.textContent = Math.round(operate(operatorSelected,
        previousValue, displayValueToNumber)*1000)/1000;
    }
    displayValue = [];
    previousValue = undefined;
    operatorSelected = undefined;
    displayValueToNumber = Number(display.textContent);
});

allClearBtn.addEventListener('click', () => {
    ongoingDisplay.textContent = '';
    displayValue = [];
    displayValueToNumber = undefined;
    previousValue = undefined;
    operatorSelected = undefined;
    display.textContent = 0;
});

backspaceBtn.addEventListener('click', () => {
    displayValue.pop();
    displayValueToNumber =
    Number(displayValue.toString().replace(/,/g, ""));
    display.textContent =
    displayValue.toString().replace(/,/g, "");
    if (displayValue.length === 0) {
        display.textContent = 0;
        displayValueToNumber = undefined;
    }
});