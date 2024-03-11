"use strict";

//Level1
//Task1

let actor = {};
actor.name = "Robert";
actor.surname = "Downey";
actor.name = "John";
delete actor.name;
console.log(actor);

//Task2
let person = {
  firstName: "Dmytro",
  lastName: "Furtune",
};

let phone = prompt("Enter your phone number");
let contacts = {
  phone,
  email: "some@email.com",
};

contacts.phone = phone;
person.contacts = contacts;

console.log(person);

//Task3
let favoriteSerials = ["Vikings", "Mandalorian", "Game of Thrones"];
favoriteSerials.unshift("Succession");
favoriteSerials.push("Friends");

console.log(favoriteSerials);

//Level2
//Task4
let employee = {
  salary: 2000,
  taxes: 200,
  position: "front-end developer",
  level: "middle",
};

for (const key in employee) {
  if (typeof key === "number") {
    employee[key] += 2;
  }
}

employee.showInfo = function () {
  console.log(`${this.level} ${this.position} заробляє ${this.salary}`);
};

let employee2 = {
  salary: 3500,
  taxes: 400,
  position: "javascript devepoler",
  level: "senior",
};

employee2.showInfo = employee.showInfo;
employee2.showInfo();

//Task5
function sumInput() {
  let inputNumber;
  let numberArray = [];
  let sum = 0;

  while (true) {
    inputNumber = prompt("Enter some numbers");
    if (inputNumber === null || isNaN(inputNumber) || inputNumber === "") {
      break;
    }
    numberArray.push(inputNumber);
  }

  for (let i = 0; i < numberArray.length; i++) {
    sum += Number(numberArray[i]);
  }
  return sum;
}

//Task6
const person = {
  name: "John",
  age: 30,
  job: "software engineer",
  address: {
    city: "New York",
    country: "USA",
  },
};

let {
  name,
  age,
  job: currentJob,
  address: { city, country: currentCountry },
} = person;

//Task7

let books = {
  countries: [
    {
      country: "Англія",
      authors: [
        {
          author: "Артур Конан Дойль",
          books: [
            {
              title: "Пригоди Шерлока Холмса",
              year: 1887,
              genre: "Роман",
            },
            {
              title: "Загадка Боскомського долу",
              year: 1912,
              genre: "Детектив",
            },
            {
              title: "Загадка Червоного Цирку",
              year: 1927,
              genre: "Детектив",
            },
          ],
        },
      ],
    },
    {
      country: "Україна",
      authors: [
        {
          author: "Макс Кідрук",
          books: [
            {
              title: "Твердиня",
              year: 2013,
              genre: "Роман",
            },
            {
              title: "Нові темні віки",
              year: 2023,
              genre: "Роман",
            },
          ],
        },
        {
          author: "Тарас Шевченко",
          books: [
            {
              title: "Кобзар",
              year: 1840,
              genre: "Роман",
            },
          ],
        },
      ],
    },
  ],
};

let {
  countries: [
    {
      authors: [
        {
          books: [firstBook, , thirdBook],
        },
      ],
    },
    {
      authors: [
        {
          books: [, { title: secondKidrukBookName }],
        },
        {
          books: [{ year: yearOfPublicationKobzar }],
        },
      ],
    },
  ],
} = books;

console.log(
  firstBook,
  thirdBook,
  secondKidrukBookName,
  yearOfPublicationKobzar
);
