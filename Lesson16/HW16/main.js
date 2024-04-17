"use strict";

//Level 1
//1-1
const promise = new Promise((resolve, reject) => {
  console.log("Hello world");
});

promise.then((value) => {
  console.log(value);
});

//1-2
function delayedMsg(msg) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, 2000);
  });
  promise.then((msg) => {
    console.log(msg);
  });
}

delayedMsg(123);

//1-3
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Помилка");
  }, 2000);
});

promise.catch((error) => {
  console.error(error);
});

//1-4
function showResults(promise1, promise2, promise3) {
  Promise.all([promise1, promise2, promise3]).then((results) => {
    results.forEach((result) => {
      console.log(result);
    });
  });
}

const secondPromise = Promise.resolve("Результат 2");
const firstPromise = Promise.resolve("Результат 1");
const thirdPromise = Promise.resolve("Результат 3");

showResults(promise1, promise2, promise3);

//1-5
function showFirst(promise1, promise2, promise3) {
  Promise.race([promise1, promise2, promise3])
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
}

const firstPromise1 = new Promise((resolve) =>
  setTimeout(() => {
    resolve(1), 3000;
  })
);
const secondPromise2 = Promise.resolve(2);
const thirdPromise3 = Promise.reject(3);

showFirst(firstPromise1, secondPromise2, thirdPromise3);

//Level 2
//Task 2
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

delay(3000).then(() => {
  console.log("3 sec");
});

//Task 3

function callback_BasedFunction(arg1, arg2) {
  // Perform asynchronous operations
  // Call the callback with the result or error
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = arg1 + arg2;
      if (result % 2 !== 0) {
        resolve(result);
      } else {
        reject(new Error("Result is not odd!"));
      }
    }, 1000);
  });
}

//Task 4

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(10));

console.log("start");

new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = fibonacci(20);
    resolve(result);
  }, 5000);
}).then((result) => {
  console.log(result);
});

console.log("end");
