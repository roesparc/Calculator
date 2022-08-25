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
    if (operator == add) {
        return a + b
    }
}
console.log(operate(add, 1, 2))