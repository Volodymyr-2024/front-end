// Создайте объект user с методом sayHello, который принимает имя пользователя и возвращает приветствие.

const user = {
    sayHello: function(name) {
        return `Привет, ${name}!`
    }
}
console.log(user.sayHello("Антон"));
console.log(user.sayHello("Николай"));

// Создайте объект calculator с методом add, который принимает два числа и возвращает их сумму.

const calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    }
}
console.log (calculator.add(15, 24))

// В объект calculator добавить метод findTotal, который принимает 3 числа и возвращает их сумму

const calculator2 = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    findTotal: function(num1, num2, num3) {
        return num1 + num2 + num3;
    }

}
console.log (calculator2.add(15, 24), calculator2.findTotal(15, 8, 7))
console.log(`**********************************`)

// Создайте метод multiply, который принимает массив, ваша задача отфильтровать 
// массив от строк и перемножить все числа в массиве друг на друга Пример 
// массива [1, 2, 3, 45, 2, 4, ‘helllo’, ‘world']
const arr = [1, 2, 3, 45, 2, 4, `helllo`, `world`];
const array = {
    multiplay: function(arr) {
      let result = 1;
      for (let i = 0; i < arr.lenght; i++) {
        if (typeof(arr[i]) == "number") {
            result *= arr[i];
        }
      }
      return result; 
    }
}
console.log (array.multiplay(arr))