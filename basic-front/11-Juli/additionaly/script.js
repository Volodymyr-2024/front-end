// Создайте объект person с двумя свойствами: name и age. Задайте им значения и выведите объект в консоль.

// const person = {
//     name: 'Виктор',
//     age: 32
// }
// console.log(`Имя: ${person.name}. Возраст: ${person.age}`)

// Напишите функцию multiply, которая принимает два числа в качестве аргументов
// и возвращает их произведение. Вызовите функцию и выведите результат в консоль.

// function multiply (x, y) {
//     return x * y;
// }
// const result = multiply(5, 4);
// console.log(result);

// Перепишите функцию multiply из предыдущей задачи с использованием стрелочной функции.

// const multiply1 = (x, y) => {
//     return x * y;
// }
// const res = multiply1(5, 8);
// console.log(res);

// Добавьте метод greet в объект person, который выводит приветствие с именем человека.
// Вызовите метод и выведите результат в консоль.

// const person1 = {
//     name: 'Виктор',
//     age: 32,
//     greet: function() {
//         console.log(`Привет ${person1.name}, которому ${person1.age} года!`);
//     }
// }
// person1.greet()

// Создайте объект calculator с методами add, subtract, multiply и divide, которые принимают
// два числа в качестве аргументов и выполняют соответствующую операцию. Выведите результаты операций в консоль.

// const x = 10;
// const y = 5;
// const calculator = {
//     add: x + y,
//     subtract: x - y,
//     multiply: x * y,
//     divide: x / y,
// }
// console.log(`Сумма = ${calculator.add}, Разность = ${calculator.subtract}, Умножение = ${calculator.multiply}, Деление = ${calculator.divide}`)

// Напишите функцию, которая подсчитывает количество элементов с определенным значением в массиве.

function countArr(array, value) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      count = count + 1;
    }
  }
  return count;
}
const array = [1, 2, 3, 4, 2, 2, 5, 2, 6];
const value = 2;
console.log(countArr(array, value));

// Напишите функцию, которая проверяет, есть ли заданный ключ в объекте.

// Напишите программу, которая создает таблицу умножения от 1 до 10.

// filterStringsAndUppercase: принимает массив, фильтрует строки, преобразует их в верхний регистр и возвращает новый массив, содержащий только строки в верхнем регистре.
// filterNumbers: принимает массив, фильтрует и возвращает только числа.
