// "use strict";

// // //LEVEL1
//Task1-1
function sum(num1, num2) {
  return num1 + num2;
}

// // //Task1-2
function multBy5(num) {
  let result = num * 5;
  console.log(`5 * ${num} = ${result}`);
}

// //Task1-3
function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// //LEVEL2
// //Task2
function pow(x = 3, n = 2) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

// //Task3
function sumOrConcatination(value1 = 30, value2 = 0) {
  if (typeof value1 === "string" || typeof value2 === "string") {
    console.log("Результат конкатенації:" + value1 + value2);
  } else if (typeof value1 === "number" && typeof value2 === "number") {
    console.log("Результат суми:" + (value1 + value2));
  } else {
    console.log(`Некоректні аргументи`);
  }
}

// //LEVEL3
// //Task4
function fib(n) {
  let x = 1;
  let y = 1;
  for (let i = 3; i <= n; i++) {
    let z = x + y;
    x = y;
    y = z;
  }
  return y;
}