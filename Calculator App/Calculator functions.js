let expression = "";

function updateDisplay() {
  if (expression === "") {
    document.getElementById("display").textContent = "0";
  } else {
    document.getElementById("display").textContent = expression;
  }
}

function appendNum(num) {
  
  const lastNumber = expression.split(/[\+\-\*\/]/).pop();
  if (num === "." && lastNumber.includes(".")) return;

  expression += num;
  updateDisplay();
}

function operation(op) {
  if (expression === "") return; 

  const lastChar = expression.slice(-1);
  
  if (["+", "-", "*", "/"].includes(lastChar)) {
    expression = expression.slice(0, -1) + op;
  } else {
    expression += op;
  }
  updateDisplay();
}

function calculate() {
  try {
    if (/[^0-9+\-*/.]/.test(expression)) throw "Invalid input";
    let result = Function('"use strict";return (' + expression + ')')();
    expression = String(result);
    updateDisplay();
  } catch {
    expression = "";
    document.getElementById("display").textContent = "Error";
  }
}

function clearDisplay() {
  expression = "";
  updateDisplay();
}

function negate() {
  // Negate last number in the expression
  let tokens = expression.split(/([+\-*/])/);
  let last = tokens.pop();
  if (last) {
    if (last.charAt(0) === "-") {
      last = last.slice(1);
    } else {
      last = "-" + last;
    }
  }
  tokens.push(last);
  expression = tokens.join("");
  updateDisplay();
}

function percent() {
  // Convert last number to percentage
  let tokens = expression.split(/([+\-*/])/);
  let last = tokens.pop();
  if (last) {
    let num = Number(last) / 100;
    tokens.push(String(num));
    expression = tokens.join("");
    updateDisplay();
  }
}

updateDisplay();
