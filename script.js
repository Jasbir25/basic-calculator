let operand1 = '';
let operand2 = '';
let operator = '';
let result = '';

function display(value) {
    let display = document.getElementById('result');
    if (operator == '' && value != '.' || operator != '') {
        display.value += value;
    }
    if (value == '.' && display.value.indexOf('.') == -1) {
        display.value += '.';
    }
}

function calculate(inputOperator) {
    let display = document.getElementById('result');
    if (['+', '-', '*', '/'].includes(inputOperator)) {
        operand1 = parseFloat(display.value);
        display.value = '';
        operator = inputOperator;
    }
    if (inputOperator === '=') {
        operand2 = parseFloat(display.value);
        
        switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                if (operand2 === 0) {
                    alert("Cannot divide by zero!");
                    return;
                }
                result = operand1 / operand2;
                break;
            default:
                result = 'Error';
        }
        
        display.value = result;
        operator = '';
    }
}

// function calculate(operator) {
//     let display = document.getElementById('result');
//     if (operator == '+' || operator == '-' || operator == '*' || operator == '/') {
//         if (operator == '+' || operator == '-') {
//             operand1 = parseFloat(display.value);
//             display.value = '';
//             this.operator = operator;
//         } else if (operator == '*' || operator == '/') {
//             operand1 = parseFloat(display.value);
//             display.value = '';
//             this.operator = operator;
//         }
//     }
//     if (operator == '+' || operator == '-' || operator == '*' || operator == '/') {
//         if (operator == '+') {
//             operand2 = parseFloat(display.value);
//             result = operand1 + operand2;
//             display.value = result;
//             operator = '';
//         } else if (operator == '-') {
//             operand2 = parseFloat(display.value);
//             result = operand1 - operand2;
//             display.value = result;
//             operator = '';
//         } else if (operator == '*') {
//             operand2 = parseFloat(display.value);
//             result = operand1 * operand2;
//             display.value = result;
//             operator = '';
//         } else if (operator == '/') {
//             operand2 = parseFloat(display.value);
//             if (operand2 == 0) {
//                 alert("Cannot divide by zero!");
//                 display.value = '';
//                 operand1 = '';
//                 operand2 = '';
//                 operator = '';
//                 return;
//             }
//             result = operand1 / operand2;
//             display.value = result;
//             operator = '';
//         }
//     }
//     if (operator == '=') {
//         if (operator == '+') {
//             result = operand1 + parseFloat(display.value);
//             display.value = result;
//         } else if (operator == '-') {
//             result = operand1 - parseFloat(display.value);
//             display.value = result;
//         } else if (operator == '*') {
//             result = operand1 * parseFloat(display.value);
//             display.value = result;
//         } else if (operator == '/') {
//             if (parseFloat(display.value) == 0) {
//                 alert("Cannot divide by zero!");
//                 display.value = '';
//                 operand1 = '';
//                 operand2 = '';
//                 operator = '';
//                 return;
//             }
//             result = operand1 / parseFloat(display.value);
//             display.value = result;
//         }
//     }
// }

function clearScreen() {
    let display = document.getElementById('result');
    display.value = '';
    operand1 = '';
    operand2 = '';
    operator = '';
    result = '';
}

function backspace() {
    let display = document.getElementById('result');
    display.value = display.value.substr(0, display.value.length - 1);
}