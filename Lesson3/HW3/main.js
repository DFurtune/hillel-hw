//Task 1
let count = +prompt("Enter count:");

if (count >= 10) {
  console.log("Your number bigger or equal 10");
} else {
  console.log("Your number less then 10");
}

//Task2
let userPassword = prompt("Enter your password");
let truePassword = "qwerty";

if (userPassword === truePassword) {
  alert("Ласкаво просимо!");
} else {
  alert("Пароль не вірний.");
}

//Task3
let userMessage = prompt("Enter your message:");

if (userMessage === null) {
  console.log("Відміна вводу");
} else if (userMessage === "") {
  console.log("Ви нічого не написали");
} else {
  console.log(userMessage);
}

//Task4
let firstNumber = +prompt("Введіть перше число:");
let secondNumber = +prompt("Введіть друге число:");

if (firstNumber > secondNumber) {
  console.log("Перше число більше");
} else if (firstNumber < secondNumber) {
  console.log("Друге число більше");
} else {
  console.log("Числа рівні");
}

//Task5
let number = +prompt("Введіть число:");

if (number % 2 === 0) {
  console.log("Число парне");
} else {
  console.log("Число непарне");
}

//Task6
let userMonth = +prompt("Введіть номер місяця:");

if (1 <= userMonth && userMonth <= 12) {
  if (3 <= userMonth && userMonth <= 5) {
    console.log("Весна");
  } else if (6 <= userMonth && userMonth <= 8) {
    console.log("Літо");
  } else if (9 <= userMonth && userMonth <= 11) {
    console.log("Осінь");
  } else {
    console.log("Зима");
  }
} else {
  console.log("некоректний номер місяця");
}

//Task7
let userCount = +prompt("Введіть число:");

if (20 <= userCount && userCount <= 80) {
  console.log("Число в діапазоні");
} else {
  console.log("Число НЕ в діапазоні");
}

//Task8
let userNumber = +prompt("Введіть число:");

if (!(20 > userNumber || userNumber > 80)) {
  console.log("Число в діапазоні");
} else {
  console.log("Число НЕ в діапазоні");
}

//Task9
let login = prompt("Who's there?");

if (login === "Admin") {
  let password = prompt("Password?");

  if (password === "TheMaster") {
    console.log("Welcome!");
  } else if (password === null) {
    console.log("Cancelled");
  } else {
    console.log("Wrong password");
  }
} else if (login === null) {
  console.log("Cancelled");
} else {
  console.log("I don't know you");
}
