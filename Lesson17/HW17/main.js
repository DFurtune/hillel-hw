"use strict";

//Level 1
//1-1

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("click!");
});

btn.addEventListener("contextmenu", () => {
  console.log("right click!");
});

btn.addEventListener("dblclick", () => {
  console.log("double click!");
});

//1-2

document.addEventListener("keyup", (event) => {
  alert(event.key);
});

//1-3
const inputText = document.querySelector("input");
const h1 = document.querySelector("h1");

document.addEventListener("input", () => {
  h1.innerText = inputText.value;
});

// Level 2

// Task 1
const value1Input = document.querySelector(".value1");
const value2Input = document.querySelector(".value2");
const resultInput = document.querySelector(".result");
const buttons = document.querySelectorAll(".buttons-container button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const operation = this.textContent;

    const value1 = +value1Input.value;
    const value2 = +value2Input.value;

    let result;
    switch (operation) {
      case "+":
        result = value1 + value2;
        break;
      case "-":
        result = value1 - value2;
        break;
      case "*":
        result = value1 * value2;
        break;
      case "/":
        result = value1 / value2;
        break;
      case "=":
        break;
    }

    if (operation !== "=") {
      resultInput.value = result;
    }
  });
});

//Level 3

//Task 3

const input = document.querySelector('input[type="text"]');
const createButton = document.querySelector("button");

createButton.addEventListener("click", () => {
  const colorName = input.value;

  let validColors = {
    red: "Red",
    orange: "Orange",
    tan: "Tan",
    rebeccapurple: "Rebecca Purple",
    transparent: "Transparent",
  };

  if (validColors.hasOwnProperty(colorName)) {
    const colorButton = document.createElement("button");
    colorButton.textContent = validColors[colorName];
    colorButton.style.backgroundColor = colorName;
    colorButton.addEventListener("click", () => {
      document.body.style.backgroundColor = colorName;
    });
    document.body.appendChild(colorButton);
  } else {
    alert("Введено недопустимий колір!");
  }

  input.value = "";
});
