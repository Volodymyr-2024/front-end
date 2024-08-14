// Создайте функцию `greet`, которая выводит в консоль приветствие "Привет, мир!".
function greet () {
    console.log("Привет, мир!");
}
greet();

// Создайте функцию `square`, которая запрашивает у 
// пользователя число, возводит его в квадрат и выводит результат.
let num = 5
function square (num) {
    return num * num
}
console.log(square(num));

// Напишите функцию `isEven`, которая запрашивает у пользователя число,
//  проверяет его на четность и выводит результат в консоль.

let num1 = 4;
function isEven (num1) {
    if (num1 % 2 === 0) {
        console.log (`Число четное`)
    }
    else (`Число нечетное`)
}
isEven(num1);

// Создайте функцию `concatenate`, которая запрашивает у пользователя
//  две строки, объединяет их и выводит результат.
 let str1 = 'привет';
 let str2 = 'мир';
 function concatenate (str1, str2) {
    console.log(`${str1} + ${str2}`)
 }
 concatenate(str1, str2)
