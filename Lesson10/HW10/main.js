"use strict";

//Level1
//Task1
let employee1 = {};
let employee2 = {};

employee1.fullName = "John Deer";
employee2.fullName = "August Claas";
employee1.position = "QA Engineer";
employee2.position = "QA Lead";
employee1.salary = 15000;
employee2.salary = 3000;

function showInfo(currency = "") {
  console.log(
    `${this.fullName} на позиції ${this.position} заробляє ${this.salary}${currency}`
  );
}
showInfo.apply(employee1, ["UAH"]);
showInfo.apply(employee2, ["$"]);

let showInfoOfEmployee1 = showInfo.bind(employee1);
let showInfoOfEmployee2 = showInfo.bind(employee2);

showInfoOfEmployee1("UAH");
showInfoOfEmployee2("$");

//Level2
//Task2
let calculator = {};

calculator.read = function (num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
};

calculator.sum = function () {
  return this.num1 + this.num2;
};

calculator.mul = function () {
  return this.num1 * this.num2;
};

calculator.read(2, 3);
calculator.sum();
calculator.mul();

//Level3
//Task3
let shoppingCart = {
  items: [],
  addItem(title, price) {
    this.items.push({ title, price });
    return this;
  },

  removeItem(title) {
    let index = this.items.findIndex((item) => item.title === title);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
    return this;
  },

  calculateTotalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  },
};

let totalPrice = shoppingCart
  .addItem("Футболка1", 25)
  .addItem("Футболка2", 30)
  .addItem("Футболка3", 35)
  .removeItem("Футболка1")
  .calculateTotalPrice();

console.log("Загальна сума покупки:", totalPrice);
