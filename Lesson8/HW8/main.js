//Level1
//Task1
let array = [2, 7, 6, 3, 9, 1, 4, 5, 8, 10];
array.forEach((item) => {
  console.log(item);
});

let arrayMulBy5 = array.map((item) => item * 5);
console.log(arrayMulBy5);

function sort(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sort(array));

function sortReverse(arr) {
  return arr.sort((a, b) => b - a);
}
console.log(sortReverse(array));

let sumOfArray = array.reduce(function reducer(acc, item) {
  return (acc += item);
});
console.log(sumOfArray);

//Level2
//Task2

let stringArray = ["Mersedes", "Audi", "BMW", "VolksWagen"];

function toSortString(arg) {
  return arg.sort((a, b) => a.length - b.length);
}

console.log(toSortString(stringArray));

//Task3
let strings = [
  "Привіт",
  "Світ",
  "Привіт",
  "Світ",
  "Привіт",
  "Привіт",
  "Світ",
  "Світ",
  ":-O",
];

function unique(arr) {
  let result = [];

  for (const item of strings) {
    if (result.includes(item)) {
      continue;
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(unique(strings));

//Level3
//Task4
let numbers = [12, 10, 8, 12, 7, 6, 4, 10, 12];

function getPopularNumber(arr) {
  let count = 1;
  let tempCount;
  let tempPopular;
  let popular = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    tempPopular = arr[i];
    tempCount = 0;
    for (let j = 0; j < arr.length; j++) {
      if (tempPopular === arr[j]) {
        tempCount++;
      }
    }
    if (tempCount > count) {
      popular = tempPopular;
      count = tempCount;
    }
  }
  return popular;
}
console.log(getPopularNumber(numbers));
