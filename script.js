let displayValue = '0';
let operator = '';
let firstOperand = null;

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

function appendNumber(number) {
    if (displayValue === '0' || displayValue === 'Error') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operator !== '' && firstOperand !== null) {
        calculate();
    }
    operator = op;
    firstOperand = parseFloat(displayValue);
    displayValue = '0';
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1) || '0';
    updateDisplay();
}

function calculate() {
    const secondOperand = parseFloat(displayValue);
    if (isNaN(firstOperand) || isNaN(secondOperand)) {
        displayValue = 'Error';
    } else {
        switch (operator) {
            case '+':
                displayValue = (firstOperand + secondOperand).toString();
                break;
            case '-':
                displayValue = (firstOperand - secondOperand).toString();
                break;
            case '*':
                displayValue = (firstOperand * secondOperand).toString();
                break;
            case '/':
                if (secondOperand !== 0) {
                    displayValue = (firstOperand / secondOperand).toString();
                } else {
                    displayValue = 'Error';
                }
                break;
            case '%':
                displayValue = (firstOperand % secondOperand).toString();
                break;
            default:
                break;
        }
    }
    operator = '';
    firstOperand = null;
    updateDisplay();
}

document.addEventListener('DOMContentLoaded', function() {
    updateDisplay();
});
