class Calculator {
    constructor(previousOperandTxt, currentOperandTxt) {
        this.previousOperandTxt = previousOperandTxt;
        this.currentOperandTxt = currentOperandTxt;
        this.clear();
    }  

    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
       
    }

    delete() {

    }

    appendNumber(number) {
        this.currentOperand = this.currentOperandTxt.innerText + number;
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        // this.previousOperandTxt.innerText = this.previousOperand;
        this.currentOperandTxt.innerText = this.currentOperand;
    }
}

const numberBtns = document.querySelectorAll('[data-number]');
const operation = document.querySelectorAll('[data-operation]');
const equals = document.querySelector('[data-equals]');
const del = document.querySelector('[data-del]');
const ac = document.querySelector('[data-ac]');
const currentOperandTxt = document.querySelector('[data-current-operand]');
const previousOperandTxt = document.querySelector('[data-previous-operand]');

const calc = new Calculator(previousOperandTxt, currentOperandTxt);

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        calc.appendNumber(button.innerText);
        calc.updateDisplay();
    })
})

ac.addEventListener('click', () => {
    calc.clear();
    calc.updateDisplay();
})