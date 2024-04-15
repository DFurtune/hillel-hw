"use strict";

// //Level 1
// //1-1
function showDelay(msg) {
  setTimeout(() => {
    console.log(msg);
  }, 2000);
}

showDelay(111);

// //1-2
function repeat(msg) {
  setInterval(() => {
    console.log(msg);
  }, 2000);
}

repeat(222);

// //1-3
function repeatRecursion(msg) {
  console.log(msg);
  let timerId = setTimeout(() => {
    repeatRecursion(msg);
  }, 2000);

  repeatRecursion.timerId = timerId;
}

repeatRecursion(333);

//1-4
function boom(count) {
  if (count === 0) {
    console.log("Boom!");
    return;
  }

  console.log(count);
  setTimeout(() => {
    boom(count - 1);
  }, 1000);
}

boom(3);

//Level 2
//Task 2

function delay(fn, sec) {
  return () => {
    setTimeout(fn, sec * 1000);
  };
}

function sayHi() {
  console.log("Hi!");
}

delay(sayHi, 5);
const delayedSayHi = delay(sayHi, 5);

sayHi();
delayedSayHi();

//Task3

class Timer {
  constructor() {
    this.counter = 0;
    this.timer = null;
  }

  start() {
    this.timer = setInterval(() => {
      this.counter++;
      console.log(this.counter);
    }, 1000);
  }

  stop() {
    clearInterval(this.timer);
    this.counter = 0;
    console.log("0 - таймер сброшений");
  }

  pause() {
    clearInterval(this.timer);
    console.log("Зупинено показ чисел");
  }

  show() {
    console.log(`Поточний лічильник: ${this.counter}`);
  }
}

const newTimer = new Timer();

newTimer.start();

setTimeout(() => {
  newTimer.pause();
}, 5000);

setTimeout(() => {
  newTimer.start();
}, 7000);

setTimeout(() => {
  newTimer.stop();
  newTimer.show();
}, 9000);

// Level 3
// Task 4

function cook(customers) {
  for (const customer in customers) {
    const orders = customers[customer];
    let maxTime = 0;

    orders.forEach((order) => {
      maxTime = Math.max(maxTime, order.time);
    });

    setTimeout(() => {
      const orderNames = orders.map((order) => order.name);
      console.log(
        `Шановний відвідувач, ${customer}, ваше замовлення готове: ${orderNames.join(
          ", "
        )}. Смачного!`
      );
    }, maxTime);
  }
}

const customers = {
  "Katy Perry": [
    { name: "Borsh", time: 5000 },
    { name: "vareniki", time: 1000 },
    { name: "uzvar", time: 500 },
  ],
  "Cristiano Ronaldo": [
    { name: "Soup", time: 7000 },
    { name: "porridge", time: 1000 },
    { name: "water", time: 100 },
  ],
  "Jason Statham": [
    { name: "fried potatoes", time: 6000 },
    { name: "steak", time: 10000 },
    { name: "juice", time: 100 },
  ],
};

cook(customers);
