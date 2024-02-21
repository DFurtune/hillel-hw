//Task 1
let number1;
let number2;

number1 = +prompt("Enter number 1:");
number2 = +prompt("Enter number 2:");

let rem = number1 % number2;
let pow = number1 ** number2;

console.log(`Залишок від ділення ${number1}, на ${number2} дорівнює ${rem}.`);
console.log(
  `Результат зведеня ${number1}, у ступінь ${number2} дорівнює ${pow}`
);

//Task 2
let num = 8;

num += 5;
num -= 2;
num *= 2;

++num;
++num;
++num;

console.log(num);

//Task 3
console.log(2 % 2, 3 % 2, 5 % 3);

//Task 4
let age = +prompt("How old are you?");

if (age >= 18) {
  console.log(true);
} else {
  console.log(false);
}

//Task 5
let x = +prompt("Enter value X:");
let y = +prompt("Enter value Y:");

x = x + y;

y = x - y;
x = x - y;

console.log(x);
console.log(y);
