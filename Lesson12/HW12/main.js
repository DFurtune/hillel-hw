"use strict";

//Level1
//N1
class Animal {
  constructor(word) {
    this.word = word;
  }

  say() {
    return this.word;
  }
}

const dog = new Animal("Гав!");
const cat = new Animal("Мяу!");
const cow = new Animal("Му!");

console.log(dog.say());
console.log(cat.say());
console.log(cow.say());

//N2
class Car {
  constructor(model, speed) {
    this.model = model;
    this.speed = speed;
  }

  ride() {
    console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.model} зупинилась. Швидкість ${this.speed} км/год`);
  }
  gas() {
    this.speed += 10;
    console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`);
  }
  brake() {
    //Додав умову,щоб швидкість не була мінусова
    if (this.speed > 0) {
      this.speed -= 10;
      console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`);
    } else {
      console.log(`${this.model} зупинилась. Швидкість ${this.speed} км/год`);
    }
  }
}

const bmw = new Car("BMW", 50);

bmw.ride(); //"BMW їде зі швидкістю 50 км/год"
bmw.gas(); //"BMW їде зі швидкістю 60 км/год"
bmw.gas(); //"BMW їде зі швидкістю 70 км/год"
bmw.brake(); //"BMW їде зі швидкістю 60 км/год"
bmw.stop(); //"BMW зупинилась. Швидкість 0 км/год"

//N3

class TodoList {
  constructor() {
    this.todos = [];
  }

  show() {
    let counter = 0;
    this.todos.forEach((item) => console.log(`${++counter}. ${item}`));
  }
  addTask(task) {
    this.todos.push(task);
    this.show();
  }
  removeTask(task) {
    this.todos = this.todos.filter((item) => item !== task);
    this.show();
  }
}

const todoList = new TodoList();
todoList.addTask("Погуляти з собакою");
// 1. Погуляти з собакою

todoList.addTask("Зробити ДЗ по JavaScript");
// 1. Погуляти з собакою
// 2. Зробити ДЗ по JavaScript

todoList.addTask("Подивитись серіал");
// 1. Погуляти з собакою
// 2. Зробити ДЗ по JavaScript
// 3. Подивитись серіал

todoList.removeTask("Погуляти з собакою");
// 1. Зробити ДЗ по JavaScript
// 2. Подивитись серіал

//Level2
//Task2
class Viacle {
  constructor(speed) {
    this.speed = speed;
  }
  ride() {
    console.log(`Їде зі швидкістю ${this.speed}`);
  }
  stop() {
    this.speed = 0;
    console.log(`Стоїть. Швидкість ${this.speed}`);
  }
}

class Bicycle extends Viacle {
  constructor(type, speed) {
    super(speed);
    this.type = type;
  }
  ride() {
    super.ride();
    console.log(`Крутить педалі`);
  }
}

const bicycle = new Bicycle("Ровер", 20);

bicycle.ride();
bicycle.stop();
console.log(bicycle.type, bicycle.speed);

const bicycle2 = new Bicycle("Ровер2", 30);

bicycle2.ride();
bicycle2.stop();
console.log(bicycle2.type, bicycle2.speed);

class FireEngine extends Viacle {
  constructor(type, speed) {
    super(speed);
    this.type = type;
  }
  stew() {
    super.stop();
    console.log("Гасить пожар");
  }
}

const fireEngine = new FireEngine("Пожарна машина", 90);

fireEngine.ride();
fireEngine.stop();
fireEngine.stew();
console.log(fireEngine.type, fireEngine.speed);

const fireEngine2 = new FireEngine("Пожарна машина", 120);

fireEngine2.ride();
fireEngine2.stop();
fireEngine2.stew();
console.log(fireEngine2.type, fireEngine2.speed);

//Task3
class Customer {
  constructor(name) {
    this.name = name;
    this.shoppingCart = [];
    this.sum = 0;
  }

  addProduct(product) {
    this.shoppingCart.push(product);
    if (product instanceof DiscountProduct) {
      this.sum += product.calculateDiscountPrice();
    } else {
      this.sum += product.price;
    }
  }
  removeProduct(product) {
    const removeProduct = this.shoppingCart.find((item) => item === product);

    if (removeProduct) {
      this.shoppingCart = this.shoppingCart.filter((item) => item !== product);
      if (removeProduct instanceof DiscountProduct) {
        this.sum -= removeProduct.calculateDiscountPrice();
      } else {
        this.sum -= removeProduct.price;
      }
    }
  }
  buy() {
    const products = this.shoppingCart
      .map((product) => product.title)
      .join(", ");
    console.log(`${this.name} купив товари ${products} на суму ${this.sum}`);
    this.shoppingCart = [];
    this.sum = 0;
  }
}

class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
}

class DiscountProduct extends Product {
  constructor(title, price, percent) {
    super(title, price);
    this.percent = percent;
  }
  calculateDiscountPrice() {
    const discount = (this.percent / 100) * this.price;
    return this.price - discount;
  }
}

const eggs = new Product("Яйця", 50);
const porridge = new Product("Гречка", 40);
const sausage = new DiscountProduct("Ковбаса", 120, 5); // 5% знижка
const dumplings = new DiscountProduct("Пельмені", 90, 10); // 10% знижка

const customer = new Customer("Tom Holland");

customer.addProduct(eggs);
customer.addProduct(porridge);
customer.addProduct(sausage);
customer.addProduct(dumplings);
customer.removeProduct(porridge);
customer.buy(); // "Tom Holland купив товари: Яйця, Ковбаса, Пельмені на сумму 245 грн."
