//Level1
//1-1

function setLength(obj) {
  obj.length = Object.keys(obj).length;
  return obj;
}

//1-2
let actor = {
  name: "Tom Hardy",
  age: 44,
  gender: "Male",
  nationality: "British",
  lastFilm: "Venom: Let There Be Carnage",
};

function getEntries(obj) {
  return Object.keys(obj).map((key) => [key, obj[key]]);
}

console.log(getEntries(actor));

//1-3
Object.defineProperties(actor, {
  name: {
    writable: false,
  },
  age: {
    enumerable: false,
  },
  gender: {
    configurable: false,
  },
});

console.log(Object.values(actor));

actor.name = "Bill";
delete actor.gender;

console.log(actor);

//1-4
function Animal(voice) {
  this.voice = voice;

  this.say = function () {
    return this.voice;
  };

  Object.defineProperties(this, {
    say: {
      enumerable: false,
    },
  });
}
const dog = new Animal("Гав!");
console.log(dog.say());

for (let key in dog) {
  console.log(key); // voice (say - не перераховується)
}

//Level2
//Task2
let car1 = {
  model: "Mersedes",
  price: 50000,
  [Symbol.toPrimitive](hint) {
    if (hint === "default") {
      return this.price;
    } else {
      return this.model;
    }
  },
};

let car2 = {
  model: "Audi",
  price: 40000,
  [Symbol.toPrimitive](hint) {
    if (hint === "default") {
      return this.price;
    } else {
      return this.model;
    }
  },
};

console.log(car1 + car2);
alert(car1);
alert(car2);

//Task3
let actor2 = {
  name: "Tom Hardy",
  age: 44,
  gender: "Male",
  nationality: "British",
  lastFilm: "Venom: Let There Be Carnage",
};
function cloneObject(obj, ...keys) {
  let cloneObj = {};

  for (const key in obj) {
    if (!keys.includes(key)) {
      cloneObj[key] = obj[key];
    }
  }
  return cloneObj;
}
const clonedActor = cloneObject(actor2, "nationality", "age", "phone");
console.log(clonedActor);
