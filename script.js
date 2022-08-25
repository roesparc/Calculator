function add(a, b) {
    return a + b;
}
console.log(add(5,7));

function subtract(a, b) {
    return a - b;
}
console.log(subtract(9,3));

function multiply(a, b) {
    return a * b;
}
console.log(multiply(3,6));

function devide(a, b) {
    return a / b;
}
console.log(devide(6,2));

function operate(operator, a, b) {
    switch(operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return devide(a, b);
    }
}
console.log(operate('/', 1, 2));