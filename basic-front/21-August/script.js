// Создать объект person со свойствами name и age и с методом myAge, который будет выводить сообщение в консоль с использованием свойства age объекта.

// const person = {
//     name: "Nikolay",
//     age: "28",
//     sayAge() {
//         console.log(`Привет, мне ${this.age} лет`);
//     }
// }
// person.sayAge()

// Создать объект calculator с методами add и multiply и свойством result, равному 0,
// которые будут принимать два числа и возвращать их сумму и произведение соответственно в переменную result.
// const calculator = {
//     result: 0,
//     add: function(a, b){
//         this.result = a + b
//     },
//     multiply: function(a, b){
//         this.result = a * b
//     }
// }
// calculator.add(2, 3)
// console.log(calculator.result);
// calculator.multiply(5, 6)
// console.log(calculator.result);

// Создать обработчик события “click” для кнопки, при клике на которую будет меняться цвет фона.
// const btn = document.querySelector('.btn')
// function getColor() {
//    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
// }
// btn.addEventListener('click', function() {
// this.style.backgroundColor = getColor()
// })

// Создайте объект lightSwitch с методами turnOn и turnOff и свойством state, которое хранит текущее состояние света ("on" или "off").
// Метод turnOn должен менять state на "on".
// Метод turnOff должен менять state на "off".
// Кроме того, добавьте метод toggle, который переключает состояние света между "on" и "off".
// const lightSwitch = {
//   state: "on",
//   turnOn: function () {
//     this.state = "on";
//     return this.state;
//   },
//   turnOff: function () {
//     this.state = "off";
//     return this.state;
//   },
//   toggle: function () {
//     if (this.state === "on") {
//       this.state = "off";
//     } else {
//       this.state = "on";
//     }
//     return this.state;
//   },
// };
// console.log(lightSwitch.toggle());
// console.log(lightSwitch.toggle());
// console.log(lightSwitch.turnOff());
// console.log(lightSwitch.toggle());
// console.log(lightSwitch.toggle());
// console.log(lightSwitch.turnOn());

// Создать функцию конструктор объекта Car, который имеет поля brand, model, year и метод print, который выводит в консоль все поля строкой.
// function getCar(brand, model, year) {
//   (this.brand = brand),
//     (this.model = model),
//     (this.year = year),
//     (this.print = function() {
//       console.log(this.brand, this.model, this.year);
//     });
// }
// const myCar = new getCar("VW", "Passat", "2024");
// myCar.print();


// Написать функцию, которая принимает 2 аргумента и результат их сложения записывает в this.result. Использовать метод call().
function plusNumbers(a, b) {
    this.result = a + b;
}
const resultObj = {};
plusNumbers.call(resultObj, 5, 7);
console.log(resultObj.result); 

// Написать функцию, которая принимает 2 аргумента и результат их деления записывает в this.result. Использовать метод apply().
function delNumbers(a, b){
    if (b === 0){
        console.log('Ошибка. Деление на ноль!');
    }
    this.result = a / b
}
const obj = {}
delNumbers.apply(obj, [10, 2])
console.log(obj.result);

// Написать функцию counter, которая будет прибавлять 1 к текущему значению.
function Counter() {
    this.count = 0; 
    // Метод для увеличения значения
    this.increment = function() {
        this.count += 1;
        return this.count;
    }.bind(this); // Привязываем контекст this
}

// Создаем экземпляр счетчика
const myCounter = new Counter();
console.log(myCounter.increment())