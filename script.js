let firstOperand = 0;
let secondOperand = 0;
let operator = null;
let result = 0;
let display = document.querySelector("#display");
let entries = document.querySelectorAll("button");

entries.forEach((entry) => {
    entry.addEventListener('click', (e) => {
        if(e.target.classList.contains('green') && operator == null) {
            firstOperand += e.target.textContent;
            console.log(e.target.textContent)
            console.log(Number(firstOperand))
            if(display.textContent === '0') display.textContent = '';
            display.textContent += e.target.textContent;
        }
        
        if(e.target.classList.contains('orange') && !e.target.classList.contains('equal')) {
            operator = e.target.textContent;
            console.log(operator);
            if(result != 0) firstOperand = result;
            secondOperand = 0;
            display.textContent = '0';
        }
        if(e.target.classList.contains('green') && operator != null) {
            secondOperand += e.target.textContent;
            console.log(e.target.textContent)
            console.log(Number(secondOperand))
            if(display.textContent === '0') display.textContent = '';
            display.textContent += e.target.textContent;
        }
        if(e.target.classList.contains('equal')) {
            firstOperand = Number(firstOperand)
            secondOperand = Number(secondOperand)
            if(operator == '+') {
                console.log('+')
                result = (firstOperand) + (secondOperand);
            }
            else if(operator === '-') result = (firstOperand) - (secondOperand);
            else if(operator === '*') result = (firstOperand) * (secondOperand);
            else if(operator === '/') result = (firstOperand) / (secondOperand);
            console.log(Number(firstOperand))
            console.log(Number(secondOperand))
            console.log(Number(firstOperand) + Number(secondOperand));
            console.log(result)
            display.textContent = result;
        }
        if(e.target.textContent === "AC") {
            firstOperand = 0;
            secondOperand = 0;
            operator = null;
            result = 0;
            display.textContent = '0';
        }

        if(e.target.textContent === '+/-') {
            if(operator === null) {
                firstOperand = Number(firstOperand) * (-1);
                display.textContent = firstOperand;
            }
            else if (result == 0) {
                secondOperand = Number(secondOperand) * (-1);
                display.textContent = secondOperand;
            }
            else {
                result = result * (-1);
                display.textContent = result;
            }
        }
        if(e.target.textContent === '%') {
            if(operator === null) {
                firstOperand = Number(firstOperand) * (.01);
                display.textContent = firstOperand;
            }
            else if (result == 0) {
                secondOperand = Number(secondOperand) * (.01);
                display.textContent = secondOperand;
            }
            else {
                result = result * (.01);
                display.textContent = result;
            }
        }
    });
});