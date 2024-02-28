"use strict";

//LEVEL1
///////////////////////////////Task1-1
let firstNumber = +prompt("Введіть перше число:");
let secondNumber = +prompt("Введіть друге число:");

let message =
  firstNumber === secondNumber
    ? console.log("Числа рівні")
    : firstNumber > secondNumber
    ? console.log("Перше число більше")
    : console.log("Друге число більше");

///////////////////////////////Task1-2
let userMessage = prompt("Enter your message:");

switch (userMessage) {
  case null:
    console.log("Відміна вводу");
    break;
  case "":
    console.log("Ви нічого не написали");

  default:
    console.log(userMessage);
    break;
}

///////////////////////////////Task1-3
let userMonth = +prompt("Введіть номер місяця:");

switch (userMonth) {
  case 1:
  case 2:
  case 12:
    console.log("Зима");
    break;

  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;

  case 6:
  case 7:
  case 8:
    console.log("Літо");
    break;

  case 9:
  case 10:
  case 11:
    console.log("Осінь");
    break;

  default:
    console.log("некоректний номер місяця");
    break;
}

//Альтернативний варіант рішення Task1-3
let userMonthAlt = +prompt("Введіть номер місяця:");

switch (userMonthAlt) {
  case 1:
  case 2:
  case 12:
    console.log("Зима");
    break;
  case userMonthAlt >= 3 && userMonthAlt <= 5 ? userMonthAlt : null:
    console.log("Весна");
    break;
  case userMonthAlt >= 6 && userMonthAlt <= 8 ? userMonthAlt : null:
    console.log("Літо");
    break;
  case userMonthAlt >= 9 && userMonthAlt <= 11 ? userMonthAlt : null:
    console.log("Осінь");
    break;

  default:
    console.log("некоректний номер місяця");
    break;
}

///////////////////////////////Task1-4
//with (while)
let x = 0;

while (x <= 10) {
  console.log(x);
  x++;
}

//with (for)
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

///////////////////////////////Task1-5
let count = +prompt("Введіть початок проміжку");
let endCount = +prompt("Введіть кінець проміжку");

//with (while)
while (count <= endCount) {
  if (count % 5 === 0) {
    console.log(count);
  }
  count++;
}

//with (for)
let count = +prompt("Введіть початок проміжку");
let endCount = +prompt("Введіть кінець проміжку");

for (let i = count; i <= endCount; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

///////////////////////////////Task1-6
//with (while)
let a = 0;
let b = a;

while (a < 10) {
  a++;
  b = 3 * a;
  console.log(`3 помножити на ${a} дорівнює ${b}`);
}

//with (for)
for (let i = 1; i <= 10; i++) {
  let n;
  n = 3 * i;
  console.log(`3 помножити на ${i} дорівнює ${n}`);
}

//LEVEL2
///////////////////////////////Task2
//with (while)
let userAttempt = 0;
let sum = 0;

while (userAttempt < 5) {
  userAttempt++;
  let userNumber = +prompt("Enter number");
  sum = userNumber + sum;
}
console.log(sum);

//with (for)
let sum = 0;

for (let i = 0; i < 5; i++) {
  let userNumber = +prompt("Enter number");
  sum = userNumber + sum;
}
console.log(sum);

///////////////////////////////Task3
//with (while)
let userNumber = +prompt("Enter number");
let factorial = 1;
let counter = 1;

while (counter <= userNumber) {
  factorial = factorial * counter;
  counter++;
}
console.log(`Факторіал числа ${userNumber} дорівнює ${factorial}`);

//with (for)
let userNumber = +prompt("Enter number");
let factorial = 1;

for (let i = 1; i <= userNumber; i++) {
  factorial = factorial * i;
}
console.log(`Факторіал числа ${userNumber} дорівнює ${factorial}`);

//LEVEL3
///////////////////////////////Task4
//with (for)
let attempt = +prompt("Введіть кількість рядків для трикутника ");

for (let i = 0; i <= attempt; i++) {
  let lineStars = "";

  for (let j = 0; j < i; j++) {
    lineStars += "*";
  }

  console.log(lineStars);
}

//with (while)
let attempt = +prompt("Введіть кількість рядків для трикутника");
let rowsCounter = 1;

while (rowsCounter <= attempt) {
  let lineStars = "";
  let starCounter = 1;

  while (starCounter <= rowsCounter) {
    lineStars += "*";
    starCounter++;
  }

  console.log(lineStars);
  rowsCounter++;
}
