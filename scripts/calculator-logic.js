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
function evaluateTerms(termArray) {
    let multiplicationAndDivisionComplete = false;
    let additionAndSubtractionComplete = false;
    while (!(multiplicationAndDivisionComplete && additionAndSubtractionComplete)) {
        let operatorIndex = (multiplicationAndDivisionComplete) ? 
            termArray.findIndex( (term) => (term === "+" || term === "-") ) :
            termArray.findIndex( (term) => (term === "*" || term === "/") );
        if (operatorIndex === -1) {
            if (multiplicationAndDivisionComplete) {
                additionAndSubtractionComplete = true;
            }
            else {
                multiplicationAndDivisionComplete = true;
            }
            continue;
        }
        let result = operate( termArray[operatorIndex], termArray[operatorIndex-1], termArray[operatorIndex+1] );
        termArray.splice(operatorIndex - 1, 3, result);
    }
    if (termArray.length > 1) {
        console.log(`Error in evaluateTerms(): final termArray has multiple arguments`);
        console.log(termArray);
        return "ERR";
    }
    return termArray[0];
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
            return "ERR";
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
