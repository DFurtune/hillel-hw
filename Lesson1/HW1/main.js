//Task 1
let age = 33;
let name = "Dmytro";

console.log(age);
console.log(name);

name = "Dmytro Furtune";

console.log(name);

//Task 2
alert("Мене звати " + name + ", мені " + age + " років.");

//Task3
name = prompt("Введіть своє ім'я:");
age = prompt("Скільки Вам років?");
alert(`Мене звати ${name}, мені ${age} років.`);

//Task 4
let number1;
let number2;

number1 = +prompt("Введіть перше число:");
number2 = +prompt("Введіть друге число:");

let sum = number1 + number2;
let sub = number1 - number2;
let mul = number1 * number2;
let div = number1 / number2;

console.log(`Сума введених Вами чисел дорівнює ${sum}`);
console.log(`Різниця введених Вами чисел дорівнює ${sub}`);
console.log(`Результат множення введених Вами чисел дорівнює ${mul}`);
console.log(`Результат поділу введених Вами чисел дорівнює ${div}`);
