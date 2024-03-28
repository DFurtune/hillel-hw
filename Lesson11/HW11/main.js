//Level1
//Task1
//#1
const Guest = {
  name: "John",
  isRegistered: false,
};

const User = {
  __proto__: Guest,
};

User.isRegistered = true;
User.isAdmin = false;
User.email = "email@mail.com";

const Admin = {
  __proto__: User,
};

Admin.isAdmin = true;
Admin.addProduct = function (product) {
  console.log(`Я адмін, додаю новий продукт - ${product}`);
};

for (const key in Admin) {
  console.log(key);
}

//#2
const Viacle = {};
Viacle.ride = function () {
  console.log(`Їду на ${this.name} зі швидкістю ${this.speed}`);
};
const Bycicle = {
  __proto__: Viacle,
};
Bycicle.name = "Велосипед";
Bycicle.speed = 20;

const Car = {
  __proto__: Bycicle,
};
Car.name = "Авто";
Car.speed = 60;

Bycicle.ride();
Car.ride();

//#3
const Animal = {};

Animal.sleep = function () {
  console.log("Я сплю");
};

const Dog = {
  __proto__: Animal,
};

Dog.showVoice = function () {
  console.log("Гав!");
};

const Pug = {
  __proto__: Dog,
};

Pug.name = "John";

Pug.sayHi = function () {
  console.log(`Доброго вечора! Мене звати ${this.name}!`);
};

Pug.sleep();
Pug.showVoice();
Pug.sayHi();

Pug.sleep = function () {
  console.log(`Я сплю і храплю`);
};

Pug.sleep();

//Level2
//Task2

const user = {
  _name: "",
  _age: 0,

  get name() {
    return this._name;
  },
  set name(newName) {
    if (newName.length > 2) {
      this._name = newName;
    } else {
      console.log("Імя не може бути коротше 2х символів");
    }
  },
  get age() {
    return this._age;
  },
  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.log("Вік не може бути менше нуля");
    }
  },
};

user.name = "Bo";
user.age = 0;

user.name = "Вова";
user.age = 5;

//Task3
function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype.getSquare = function () {
  let p = (this.a + this.b + this.c) / 2;
  return (
    Math.floor(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100
    ) / 100
  );
};

let triangle1 = new Triangle(3, 4, 5);
let triangle2 = new Triangle(5, 5, 2);
let triangle3 = new Triangle(4, 4, 4);
