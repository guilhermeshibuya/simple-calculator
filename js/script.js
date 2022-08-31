class Calculator {
    constructor(previousOperandTxt, currentOperandTxt) {
        this.previousOperandTxt = previousOperandTxt;
        this.currentOperandTxt = currentOperandTxt;
    }  

    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
    }

    delete() {
        
    }
}

const numberBtns = document.querySelectorAll('[data-number]');
const operation = document.querySelectorAll('[data-operation');
const equals = document.querySelector('[data-equals');
const del = document.querySelector('[data-del]');
const ac = document.querySelector('[data-ac]');
const currentOperandTxt = document.querySelector('[data-currrent-operand]');
const previousOperandTxt = document.querySelector('[data-previous-operand]');

const calc = new Calculator(previousOperandTxt, currentOperandTxt);

ac.addEventListener('click', calc.clear());