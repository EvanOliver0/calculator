function add(a, b) {
    if (typeof a != "number") {
        console.log(`Error in add(): ${a} is not a number`);
        return "ERR";
    }
    if (typeof b != "number") {
        console.log(`Error in add(): ${b} is not a number`);
        return "ERR";
    }
    return a + b;
}
function divide(a, b) {
    if (typeof a != "number") {
        console.log(`Error in divide(): ${a} is not a number`);
        return "ERR";
    }
    if (typeof b != "number") {
        console.log(`Error in divide(): ${b} is not a number`);
        return "ERR";
    }
    if (b === 0) {
        return "KABOOM! Just kidding. Don't try to divide by zero, kids."
    }
    return a / b;
}
function multiply(a, b) {
    if (typeof a != "number") {
        console.log(`Error in multiply(): ${a} is not a number`);
        return "ERR";
    }
    if (typeof b != "number") {
        console.log(`Error in multiply(): ${b} is not a number`);
        return "ERR";
    }
    return a * b;
}
function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            console.log(`Error in operate(): ${operator} is not a valid operator`)
    }
}
function subtract(a, b) {
    if (typeof a != "number") {
        console.log(`Error in subtract(): ${a} is not a number`);
        return "ERR";
    }
    if (typeof b != "number") {
        console.log(`Error in subtract(): ${b} is not a number`);
        return "ERR";
    }
    return a - b;
}
