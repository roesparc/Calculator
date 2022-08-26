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
    displayValue.push(number.textContent);
    displayValueToNumber =
    Number(displayValue.toString().replace(/,/g, ""));
    display.textContent = displayValueToNumber;    
}));

operatorButtons.forEach(operator => operator.addEventListener('click', () => {
    ongoingDisplay.textContent =
    `${displayValueToNumber} ${operator.textContent}`;
    if (previousValue !== undefined) {
        previousValue = operate(operatorSelected,
            previousValue, displayValueToNumber);
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
    display.textContent = operate(operatorSelected,
        previousValue, displayValueToNumber);
    displayValue = [];
    previousValue = undefined;
    operatorSelected = undefined;
});

clearBtn.addEventListener('click', () => {
    ongoingDisplay.textContent = '';
    displayValue = [];
    previousValue = undefined;
    operatorSelected = undefined;
    display.textContent = 0;
});