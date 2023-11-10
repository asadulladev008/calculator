"use strict";

// Calculator
// Buttons
const buttons = document.querySelectorAll(".button");
// display
const inputDisplay = document.querySelector(".display");

let str = "";

function calcNums(string) {
  let firstNum = 0;
  let secondNum = 0;
  let result = 0;
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "+":
        firstNum = string.slice(0, i);
        secondNum = string.slice(i + 1);
        result = firstNum + secondNum;
        break;
      case "-":
        firstNum = string.slice(0, i);
        secondNum = string.slice(i + 1);
        result = firstNum - secondNum;
        break;
      case "/":
        firstNum = string.slice(0, i);
        secondNum = string.slice(i + 1);
        result = firstNum / secondNum;
        break;
      case "*":
        firstNum = string.slice(0, i);
        secondNum = string.slice(i + 1);
        result = firstNum * secondNum;
        break;
      case "%":
        firstNum = string.slice(0, i);
        secondNum = string.slice(i + 1);
        result = firstNum % secondNum;
        break;
      default:
    }
  }

  return result;
}

buttons?.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.textContent === "=") {
      str = calcNums(str);
      // str = eval(str);
      inputDisplay.value = str;
    } else if (e.target.textContent === "C") {
      str = "";
      inputDisplay.value = str;
    } else if (e.target.textContent === "De") {
      str = str.slice(0, str.length - 1);
      inputDisplay.value = str;
    } else {
      str += e.target.textContent;
      inputDisplay.value = str;
    }
  });
});
