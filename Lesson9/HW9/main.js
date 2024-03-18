//Level1
//Task1

let map = new Map();

map
  .set(123, "number")
  .set("str", "string")
  .set(true, "boolean")
  .set(null, "null")
  .set(undefined, "undefined")
  .set(123n, "bigInt")
  .set({ name: "John", age: 18 }, "object")
  .set(Symbol("id"), "symbol");

map.forEach((value, key) => {
  console.log(key, value);
});

let obj = Object.fromEntries(map);
console.log(obj);

let map2 = new Map(Object.entries(obj));
console.log(map2);

//Level2
//Task2
function mergeArrays(...rest) {
  let mergeArr = [...rest].flat();
  let set = new Set(mergeArr);
  return set;
}

console.log(mergeArrays([1, 2], [2, 2, 3], [1, 1, 2, 4]));

//Task3
function aclean(array) {
  let map = new Map();

  for (const word of array) {
    let item = word.toLowerCase().split("").sort().join("");

    map.set(item, word);
  }
  return Array.from(map.values());
}
let array = [
  "материк",
  "мошкара",
  "апельсин",
  "спанієль",
  "мінотавр",
  "ромашка",
  "норматив",
  "метрика",
];
console.log(aclean(array));

//Level3
//Task4
const books = {
  fantastic: {
    "Френк Герберт": [
      {
        title: "Дюна",
        year: 1965,
      },
      {
        title: "Дюна. Месія месіїв",
        year: 1969,
      },
      {
        title: "Діти Дюни",
        year: 1976,
      },
    ],
    "Станіслав Лем": [
      {
        title: "Соляріс",
        year: 1961,
      },
      {
        title: "Соляріс. Зіркові щоденники Ійона Тихого",
        year: 1971,
      },
    ],
  },
  novel: {
    Ремарк: [
      {
        title: "Три товарища",
        year: 1936,
      },
      {
        title: "Триумфальна арка",
        year: 1942,
      },
    ],
    "Джордж Оруелл": [
      {
        title: "1984",
        year: 1949,
      },
      {
        title: "Ферма Господаря Вилки",
        year: 1945,
      },
    ],
  },
  fantasy: {
    "Володар перснів": [
      {
        title: "Братство Кільця",
        year: 1954,
      },
      {
        title: "Дві вежі",
        year: 1954,
      },
      {
        title: "Повернення короля",
        year: 1955,
      },
    ],
    "Гаррі Поттер": [
      {
        title: "Гаррі Поттер і Філософський камінь",
        year: 1997,
      },
      {
        title: "Гаррі Поттер і тайна кімната",
        year: 1998,
      },
    ],
  },
};

books[Symbol.iterator] = function () {
  let bookNames = [];
  let i = 0;

  for (const key in this) {
    const authors = this[key];
    for (const author in authors) {
      const authorBooks = authors[author];
      for (const book of authorBooks) {
        bookNames.push(book.title);
      }
    }
  }

  return {
    next() {
      if (i < bookNames.length) {
        return { value: bookNames[i++], done: false };
      }
      return { done: true };
    },
  };
};

for (const iterator of books) {
  console.log(iterator);
}
