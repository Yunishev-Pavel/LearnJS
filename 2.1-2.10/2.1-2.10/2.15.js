// Function Declaration
// Функция — это фрагмент кода, который можно вызывать и использовать в различных частях программы.
//  Функции позволяют упростить код, сделать его более читаемым и повторно используемым.
// Локальные переменные
// Переменные, объявленные внутри функции, видны только внутри этой функции.

// Функции — это удобный способ организации кода. Они помогают:
// - Избавиться от необходимости писать один и тот же код повторно.
// - Если нужно изменить что-то в коде, то он меняется в одном месте.
// - Структура кода становится более четкой.

// использует дополнительную функцию isPrime(n) для проверки на простое:

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i); // простое
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

//Передаваемые значения копируются в параметры функции и становятся локальными переменными.
// Функции имеют доступ к внешним переменным. Но это работает только изнутри наружу. Код вне функции не имеет доступа к её локальным переменным.
// Функция может возвращать значение. Если этого не происходит, тогда результат равен undefined.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Родители разрешили?");
  }
}
//   Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

//   Сделайте два варианта функции checkAge:

//   Используя оператор ?
//   Используя оператор ||

function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}

function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:
function min(a, b) {
  let c = Math.min(a, b);
  return c;
}

min(2, 5); //== 2;
min(3, -1); //== -1;
min(1, 1); // == 1;

// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n)
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
pow(3, 2); //= 3 * 3 = 9
pow(3, 3); //= 3 * 3 * 3 = 27
pow(1, 100); //= 1 * 1 * ...* 1 = 1

function pow(x, n) {
  return x ** n;
}
console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));

function pow(x, n) {
  x = prompt("введите число х");
  n = prompt("введите число n");
  let res =
    n > n % 1
      ? x ** n
      : alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  return alert(`${res}`);
}
pow();

// Необходимо создать функцию getSumOfNumbers(). Она будет считать сумму от 0 до переданного числа.
// Выбери любой из 3 типов при создании функции.
// getSumOfNumbers() принимает в себя 2 параметра: number и type.
// Параметр number - это число, до которого будет считаться сумма.
// То есть, если было передано число 10, то функция должна посчитать сумму от 0 до 10 (0 + 1 + 2 + … + 10).
// Если параметр не передан или значение было не числом, то из функции необходимо вернуть NaN.
// Параметр type отвечает за выбор чисел для подсчета суммы. Он может быть одним из 3-х значений: "odd", "even" и "".
// Если type равняется "odd", то в сумму должны входить только нечетные числа, "even" - четные числа, пустая строка "" - все числа.
// По умолчанию параметр type должен быть равен "odd".
// Функция getSumOfNumbers() должна возвращать итоговую сумму с помощью return.

function getSumOfNumbers(type = "odd", number) {
  if (typeof number !== "number") {
    return NaN;
  }
  let sum = 0;

  for (let i = 0; i <= number; i++) {
    if (type === "") {
      sum += i;
    }
    if (type === "even") {
      i % 2 === 0;
      sum += i;
    }
    if (type === "odd") {
      i % 2 === 1;
      sum += i;
    }
  }
  return sum;
}
getSumOfNumbers("", 10);
getSumOfNumbers("even", 3);
getSumOfNumbers("odd", 5);
