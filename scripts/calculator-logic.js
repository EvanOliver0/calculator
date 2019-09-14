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
function backspace() {
    let value = getDisplayValue();
    setDisplayValue(value.slice(0, -1));
}
function buttonPress(e) {
    switch (e.target.name) {
        case "button-clear":
            clearAll();
            break;
        case "button-backspace":
            backspace();
            break;
        case "button-equals":
            computeResult();
            break;
        case "button-decimal":
            decimalPress();
            break;
        case "button-plus":
        case "button-minus":
        case "button-times":
        case "button-divide":
            operatorPress(e.target);
            break;
        case "button1":
        case "button2":
        case "button3":
        case "button4":
        case "button5":
        case "button6":
        case "button7":
        case "button8":
        case "button9":
        case "button0":
            numberPress(e.target);
            break;
        default:
            console.log(`Unhandled button pressed: ${e.target.name}`);
    }
}
function clearAll() {
    setDisplayValue("0");
}
function computeResult() {
    let input = getDisplayValue();
    let result = evaluateTerms(parseStringToTermArray(input));
    setDisplayValue(result)
}
function decimalPress() {
    let value = getDisplayValue();
    if ( !(/\./.test(value)) ) {
        setDisplayValue(value + ".");
    }
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
function getDisplayValue() {
    let display = document.querySelector("#output");
    return display.textContent;
}
function isOperator(character) {
    if (typeof character !== "string") {
        console.log(`isOperator() expected string; ${character} is ${typeof character}`);
        return false;
    }
    if (character.length > 1) {
        console.log(`Multi-character string passed to isOperator(): ${character}`);
        return false;
    }
    switch (character) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
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
function numberPress(button) {
    let currentValue = getDisplayValue();
    if (currentValue === "0") {
        setDisplayValue(button.getAttribute("value"));
    }
    else {
        setDisplayValue(currentValue + button.getAttribute("value"));
    }
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
function operatorPress(button) {
    let currentValue = getDisplayValue();
    let lastEntry = currentValue.charAt(currentValue.length - 1)
    if (lastEntry === "+" || lastEntry === "-" || lastEntry === "*" || lastEntry === "/") {
        setDisplayValue(currentValue.slice(0, currentValue.length-1) + button.getAttribute("value"));
    }
    else {
        setDisplayValue(currentValue + button.getAttribute("value"));
    }
}
function parseStringToTermArray(string) {
    let termArray = [];
    let digitSequence = "0";
    for (let i=0; i < string.length; i++) {
        let chr = string.charAt(i);
        if (isOperator(chr)) {
            termArray.push(+digitSequence);
            termArray.push(chr);
            digitSequence = "0";
        }
        else if (digitSequence === "0") {
            digitSequence = chr;
        }
        else {
        digitSequence += chr;
        }
    }
    termArray.push(+digitSequence);
    return termArray;
}
function setDisplayValue(value) {
    let display = document.querySelector("#output");
    display.textContent = value;
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
let buttons = document.querySelectorAll("button");
buttons.forEach( (button) => button.addEventListener("click", buttonPress) );
