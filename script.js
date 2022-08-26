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

const ongoingDisplay = document.querySelector('.ongoingDisplay')

const clearBtn = document.querySelector('.clearBtn');

const equalsBtn = document.querySelector('.equalsBtn');

const operatorButtons = document.querySelectorAll('.operatorBtn');

const numberButtons = document.querySelectorAll('.numberBtn');

let displayValue = [];
let displayValueToNumber;
let previousValue;
let operatorSelected;

numberButtons.forEach(number => number.addEventListener('click', () => {
    if (number.textContent === displayValue.find(value => value === '.')) return;
    if (displayValue.length === 0 && number.textContent === '.') {
        displayValue.push('0', '.');
    } else {
        displayValue.push(number.textContent);
    }
    displayValueToNumber =
    Number(displayValue.toString().replace(/,/g, ""));
    display.textContent =
    displayValue.toString().replace(/,/g, "");
}));

operatorButtons.forEach(operator => operator.addEventListener('click', () => {
    ongoingDisplay.textContent =
    `${displayValueToNumber} ${operator.textContent}`;
    if (previousValue !== undefined) {
        previousValue = Math.round(operate(operatorSelected,
            previousValue, displayValueToNumber)*1000)/1000;
        ongoingDisplay.textContent =
        `${previousValue} ${operator.textContent}`;
        operatorSelected = operator.textContent;
        displayValue = [];
    } else {
    operatorSelected = operator.textContent;
    previousValue = displayValueToNumber;
    displayValue = [];
    }
}));

equalsBtn.addEventListener('click', () => {
    ongoingDisplay.textContent =
    `${previousValue} ${operatorSelected}
    ${displayValueToNumber}`;
    display.textContent = Math.round(operate(operatorSelected,
        previousValue, displayValueToNumber)*1000)/1000;
    displayValue = [];
    previousValue = undefined;
    operatorSelected = undefined;
    displayValueToNumber = Number(display.textContent);
});

clearBtn.addEventListener('click', () => {
    ongoingDisplay.textContent = '';
    displayValue = [];
    displayValueToNumber = undefined;
    previousValue = undefined;
    operatorSelected = undefined;
    display.textContent = 0;
});