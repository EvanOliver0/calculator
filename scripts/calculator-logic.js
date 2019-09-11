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
    let nextTimesIndex = termArray.length;
    let nextDivideIndex = termArray.length;
    while (nextTimesIndex != -1 || nextDivideIndex != -1) {
        nextTimesIndex = termArray.findIndex( (term) => term === "*");
        nextDivideIndex = termArray.findIndex( (term) => term === "/");
        let operatorIndex = (nextTimesIndex < nextDivideIndex) ? nextTimesIndex : nextDivideIndex;
        let result = operate(termArray[operatorIndex], termArray[operatorIndex - 1], termArray[operatorIndex + 1]);
        termArray.splice(operatorIndex - 1, 3, result);
    }
    let nextPlusIndex = termArray.length;
    let nextMinusIndex =  termArray.length;
    while (nextPlusIndex != -1 || nextMinusIndex != -1) {
        nextPlusIndex = termArray.findIndex( (term) => term === "*");
        nextMinusIndex = termArray.findIndex( (term) => term === "/");
        let operatorIndex = (nextPlusIndex < nextMinusIndex) ? nextPlusIndex : nextMinusIndex;
        let result = operate(termArray[operatorIndex], termArray[operatorIndex - 1], termArray[operatorIndex + 1]);
        termArray.splice(operatorIndex - 1, 3, result);
    }
    return termArray;
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
