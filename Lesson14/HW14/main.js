"use strict";
//Level1
//1-1
function print(start, end) {
  if (start <= end) {
    console.log(start);
    print(start + 1, end);
  }
}

//1-2
function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(5));

//1-3
function createMultBy(num) {
  return function multiply(arg) {
    if (typeof arg === "number") {
      return num * arg;
    } else {
      return createMultBy(num)(arg());
    }
  };
}
const multBy5 = createMultBy(5);
const multBy2 = createMultBy(2);

console.log(multBy5(4));
console.log(multBy5(6));

console.log(multBy2(4));
console.log(multBy2(6));

//Level2
//Task2
const sales = {
  name: "Jorge Clunie",
  profit: 10000,
  clients: [
    {
      name: "Harrison ford",
      profit: 5000,
      clients: [
        {
          name: "Mila Kunis",
          profit: 1000,
          clients: [
            {
              name: "Julia Roberts",
              profit: 2000,
              clients: [{ name: "Richard Gir", profit: 3000, clients: [] }],
            },
          ],
        },
      ],
    },
    {
      name: "Barak Obama",
      profit: 7000,
      clients: [{ name: "Hilari Klinton", profit: 5000, clients: [] }],
    },
    {
      name: "Frodo",
      profit: 3000,
      clients: [
        { name: "Bilbo", profit: 2000, clients: [] },
        {
          name: "Legolas",
          profit: 3000,
          clients: [{ name: "Galadriel", profit: 1000, clients: [] }],
        },
      ],
    },
  ],
};

function sumProfit(sales) {
  let sum = sales.profit;

  for (const key of sales.clients) {
    sum += sumProfit(key);
  }
  return sum;
}

console.log(sumProfit(sales));

//Level3
//Task3
function memoization(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      console.log("from cash");
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

function expensiveOperation(n) {
  return n * 2;
}

const memoizedExpensiveOperation = memoization(expensiveOperation);
console.log(memoizedExpensiveOperation(5)); // 10
console.log(memoizedExpensiveOperation(5)); // 10 - повертає його з кеша
