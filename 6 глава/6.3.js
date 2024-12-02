// Замыкания
// влож функции мдн
//LexicalEnvironment  - mdn

//[Environment]]

// Environment Record – объект, в котором как свойства хранятся все локальные
// переменные (а также некоторая другая информация, такая как значение this).
//Переменная – это свойство специального внутреннего объекта, связанного с текущим выполняющимся блоком/функцией/скриптом.
// Работа с переменными – это на самом деле работа со свойствами этого объекта.
// Лексическое окружение – объект спецификац
let count = 10;
function makeCount() {
  //   let count = 1;
  return function () {
    return count++;
  };
}
let counter = makeCount();
console.log(counter());
console.log(counter());
console.log(counter());

// let name = "Jonh";
// function sayHi() {
//   console.log("Hi, " + name);
// }
// name = "Pete";
// console.log(sayHi()); // что будет показано: "John" или "Pete"?  // pete

// function makeWorker() {
//   let name = "Pete";
//   return function () {
//     console.log(name);
//   };
// }
// name = "Jonh";
// let work = makeWorker();
// work();

function Count() {
  let count = 0;
  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}
let co = new Count();

// console.log(co.up());
// console.log(co.up());
// console.log(co.up());
// console.log(co.down());

function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2));
console.log(sum(5)(-1));

// inBetween(a, b) //– между `a` и `b` (включительно).
// inArray([...])  // – находится в данном массиве.
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));

/**
 * Нужно написать функцию, которая принимает число N и возвращает функцию,
 * вызов которой первые N раз возвращает 'yes', а потом – 'no'.
 */
function canGetCount(n) {
  let count = 0;
  return function () {
    count++;
    return count <= n ? "yes" : "no";
  };
}

const getOne = canGetCount(2);

getOne(); //=== "yes";
getOne(); //=== "yes";
getOne(); //=== "no";
