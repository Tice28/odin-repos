const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const decButton = document.getElementById("decimal");

const opRegex = /^[+\-*\/]/;
const digRegex = /[0-9.]/;

let operand1;
let operand2;
let operator;
let opComplete = false;

buttons.forEach((button) => {
  if (digRegex.test(button.textContent)) {
    button.addEventListener("click", () => {
      if (!opComplete) {
        display.textContent += button.textContent;
      } else {
        if (opComplete && operator == null) {
          clearData();
        }
        clearDisplay();
        display.textContent = button.textContent;
      }
      hasDecimal();
    });
  }
  if (opRegex.test(button.textContent)) {
    button.addEventListener("click", () => {
      if (!operand1) {
        operand1 = getInput(display.textContent);
      } else {
        operand2 = getInput(display.textContent);
      }
      if (!operator) {
        operator = button.textContent;
        clearDisplay();
      } else {
        operand1 = operate(operand1, operand2, operator);
        operator2 = null;
        operator = button.textContent;
        display.textContent = operand1;
      }
      opComplete = false;
      hasDecimal();
    });
  }
  if (button.textContent === "Clear") {
    button.addEventListener("click", () => {
      clearData();
    });
  }
  if (button.textContent === "=") {
    button.addEventListener("click", () => {
      operand2 = getInput(display.textContent);
      operand1 = operate(operand1, operand2, operator);

      if (operand1 || (operand1 === 0 && operand2 && operator)) {
        display.textContent = operand1;
        operand2 = null;
        operator = null;
      } else {
        alert("Syntax error.");
        clearData();
      }
      if (!operator) {
        opComplete = true;
      }

      hasDecimal();
    });
  }
  if (button.textContent === "(-)") {
    button.addEventListener("click", () => {
      if (display.textContent !== "") {
        if (!operand1 || opComplete) {
          operand1 = negateValue(getInput(display.textContent));
          display.textContent = operand1;
        } else {
          operand2 = negateValue(getInput(display.textContent));
          display.textContent = operand2;
        }
      }
    });
  }
});

function clearData() {
  operand1 = null;
  operand2 = null;
  operator = null;
  opComplete = false;
  clearDisplay();
  decButton.disabled = false;
}

function clearDisplay() {
  display.textContent = "";
}

function getInput(string) {
  if (validateInput(string)) {
    if (string.indexOf(".") === -1) {
      return Number.parseInt(string);
    } else {
      return Number.parseFloat(string);
    }
  } else {
    alert("Syntax error on input.");
  }
}

function negateValue(num) {
  return (num *= -1);
}

function operate(op1, op2, operator) {
  switch (operator) {
    case "+":
      return round(op1 + op2, 12);
      break;
    case "-":
      return round(op1 - op2, 12);
      break;
    case "*":
      return round(op1 * op2, 12);
      break;
    case "/":
      if (op2 !== 0) {
        return round(op1 / op2, 12);
      } else {
        alert("Error, cannot divide by 0");
        return op1;
      }
  }
}

function validateInput(string) {
  if (string[string.length - 1] !== ".") {
    if (decimalCount(string) <= 1) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function decimalCount(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ".") {
      count++;
    }
  }
  return count;
}

function hasDecimal() {
  if (display.textContent.indexOf(".") !== -1 && opComplete == false) {
    decButton.disabled = true;
  } else {
    decButton.disabled = false;
  }
}

function round(num, decPoints) {
  return parseFloat(Math.round(num + "e" + decPoints) + "e-" + decPoints);
}
