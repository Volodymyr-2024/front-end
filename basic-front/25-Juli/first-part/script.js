// Создайте массив animals с элементами "cat", "dog", "rabbit". Используйте метод pop(), чтобы удалить последний элемент массива.
// const animals = ["cat", "dog", "rabbit"];
// const arr = ["cat", "dog", "rabbit"]
// arr.pop()
// console.log(arr)

// Создайте массив letters с элементами "A", "B", "C". Используйте метод pop(), чтобы получить и вывести последнюю букву.
// const letters = ["A", "B", "C"];
// const letters = ["A", "B", "C"]
// console.log(letters.pop())

// Дан массив массивов чисел. Нужно создать новый массив, в котором из каждого внутреннего массива удалено последнее число, и вернуть массив оставшихся чисел.
// Входной массив: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Ожидаемый выходной массив: [[1, 2], [4, 5], [7, 8]]
// const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// const newArray = array.map((element) => {
//     element.pop()
//     return element
// })
// console.log(newArray)

// Создайте массив чисел. Напишите функцию, используя метод filter, чтобы получить новый массив, содержащий только положительные числа из исходного массива.
// const numbers = [-2, 5, -8, 10, -3, 7];
// const numbers = [-2, 5, -8, 10, -3, 7];
// const newNumbers = numbers.filter((item) => item >= 0);
// console.log(newNumbers);

// Создайте массив чисел. Напишите функцию, используя метод filter, чтобы получить новый массив, содержащий только числа, которые делятся на 3 без остатка.
// const numbers = [9, 12, 5, 18, 7, 24];
// const numbers1 = [9, 12, 5, 18, 7, 24];
// const newNumbers1 = numbers1.filter((item) => item % 3 === 0);
// console.log(newNumbers1);

// Создайте массив строк и чисел, отфильтруйте данный массив так, чтобы на выходе у вас получился только массив строк
// const numbers2 = [9, 12, 5, "sdfs", 18, 7, 24];
// const newNumbers2 = numbers2.filter((item) => typeof item === "string");
// console.log(newNumbers2);

// Используя метод sort(), отсортируйте числовой массив по убыванию
// let array = [4, 2, 5, 1, 3]
// array.sort((a, b) => (b - a))
// console.log(array)

// Используя метод sort(), отсортируйте массив объектов по значению определенного свойства.
// let people = [ { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 20 } ];
// people.sort((a, b) => (a.age - b.age))
// console.log(people)

// Используя метод filter(), создайте новый массив, содержащий только четные числа из исходного массива.
// let array = [1, 2, 3, 4, 5];
// const res = array.filter((item) => item % 2 === 0)
// console.log(res)

// Создайте массив строк. Напишите функцию, используя метод sort, чтобы отсортировать строки по их длине от самой короткой к самой длинной.
// const words = ["apple", "banana", "kiwi", "orange", "grape"];
// const words = ["apple", "banana", "kiwi", "orange", "grape"];
// const sor = (arr) => {
// return arr.sort((a, b) => (a.length - b.length))
// }
// console.log(sor(words))

// Создайте массив colors с элементами "red", "green", "blue". Используйте метод shift(), чтобы удалить первый элемент массива.
// const colors = ["red", "green", "blue"]
// const fn = (arr) => {
//     arr.shift()
//     return arr
// }
// console.log(fn(colors))

// Создайте массив fruits с элементами "banana", "orange". Используйте метод unshift(), чтобы добавить в начало массива новые фрукты: "apple", "grape".
// const fruits = ["banana", "orange"];
// const fruits = ["banana", "orange"]
// function app(arr) {
//     arr.unshift("apple", "grape")
//     return arr
// }
// console.log(app(fruits));

// function fn(arr) {
//     return arr
//     .filter(item => typeof item === 'string')
//     .map(item => item.toUpperCase())
//     .reduce((a, b) => a + " " + b)
//     .toLowerCase()
// }
// console.log(fn([1, 2, 3, 'hello', 'my name', 'is Yury']))

// Создайте массив чисел. Напишите функцию, используя метод reduce, чтобы вычислить сумму всех элементов массива.
// const numbers = [5, 10, 15, 20]
//     let sum = numbers.reduce(function(el1, el2) {
//         return el1 + el2
//     })
// console.log(sum)

// Создайте массив чисел. Напишите функцию, используя метод reduce, чтобы вычислить сумму всех элементов массива.
// const words = ["Hello", "world", "!"]
// let sum1 = words.reduce(function(el1, el2) {
//     return el1 + " " + el2
// })
// console.log(sum1)

// Создайте массив чисел. Напишите функцию, используя метод reduce, чтобы найти максимальное число в массиве.
// const numbers1 = [14, 5, 22, 8, 45, 11]
// function max(arr) {
//     return arr.reduce((el1, el2) => Math.max(el1, el2))
// }
// console.log(max(numbers1))

// Используя методы filter() и reduce(), вычислите сумму всех четных чисел в числовом массиве.
// let numericArray = [1, 2, 3, 4, 5];
// let newArr = numericArray.filter(num => num % 2 ===0).reduce((a, b) => a + b, 0)
// console.log(newArr)

// Используя метод from(), создайте новый массив из строки, содержащий только уникальные символы.
// let str = "hello"

// Создайте пустой массив stack. Реализуйте функцию pushToStack, которая добавляет числа 1, 2, 3 в стек, а затем реализуйте функцию popFromStack, которая удаляет последнее число из стека.
//  const stack = []
//  const pushToStack = () => {
//     stack.push(1, 2, 3)
// }
// const popFromStack = () => {
// stack.pop()
// }
// pushToStack()
// popFromStack()
//  console.log(stack)

//  Создайте массив чисел. Реализуйте функцию doubleEvenNumbers, используя методы map и filter, чтобы удвоить значения только четных чисел.
// const numbers = [1, 2, 3, 4, 5];
// const doubleEvenNumbers = (arr) => {
//     const a = arr.filter((value) => value % 2 ===0).map((value) => value * 2)
//     return a   
// }
// console.log(doubleEvenNumbers(numbers))

// Создайте массив строк. Реализуйте функцию addExclamation, используя метод forEach, чтобы добавить к каждой строке восклицательный знак "!".
// const phrases = ["Hello", "How are you", "Goodbye"]
// function addExclamation(arr) {
// arr.forEach((str, index, array) => {
//     array[index] = str + "!";
// })
// }
// addExclamation(phrases)
// console.log(phrases)

// *Cоздайте массив чисел. Реализуйте функцию calculateAverage, используя методы shift и reduce, чтобы вычислить среднее значение чисел в массиве.
// const numbers = [10, 20, 30, 40, 50];
// const calculateAverage = (arr) => {
//     return arr.reduce((a, b) => a + b)
// }



// Создайте массив чисел. Реализуйте функцию addAndSort, используя методы unshift и sort, чтобы добавить число 5 в начало массива и отсортировать его по возрастанию.
// const numbers = [3, 1, 4, 2]
// const addAndSort = (arr) => {
//     arr.unshift(5)
//     arr.sort((a, b) => a - b)
//     return arr
// }
// console.log(addAndSort(numbers))



//* Создайте массив строк. Реализуйте функцию concatenateAndCountChars, используя методы map и reduce, чтобы объединить строки в одну и подсчитать 
// общее количество символов. (Разобрать вместе, показать как работают методы toUpperCase()/toLowerCase() и join())
// const words = ["apple", "banana", "cherry"]
// const concatenateAndCountChars = (arr) => {
//     arr.map(str => str.toUpperCase()).join('')
// }



//* Создайте массив строк. Реализуйте функцию concatenateAndCountChars, используя методы map и reduce, чтобы объединить строки в одну и подсчитать общее количество символов. 
// С помощью метода map возвести все строки в верхний регистр, а потом соединить в одну строку все элементы массива
// const words = ["apple", "banana", "cherry"]
// const concatenateAndCountChars = (arr) => {
//         arr.map(str => str.toUpperCase())
//         arr.reduce((a, b) => a + ' ' + b)
//         return arr
//     }
// console.log (concatenateAndCountChars(words))



// Создайте массив объектов с полями "name" и "age". Реализуйте функцию updateAges, используя методы forEach и filter, чтобы увеличить возраст на 1 для всех объектов с возрастом менее 30 лет.
// const people = [
// { name: "Alice", age: 25 },
// { name: "Bob", age: 32 },
// { name: "Charlie", age: 28 }
// ]
// function updateAges(arr) {
//     const young = arr.filter(person => person.age < 30)
//     young.forEach(person => {
//        person.age += 1 
//     });
// }
// updateAges(people)
// console.log(people)

// Создайте массив чисел. Реализуйте функцию sumAndMultiplyByLast, используя методы reduce и map, чтобы вычислить сумму чисел и умножить ее на последний элемент массива.
// const numbers = [2, 4, 6, 8, 10]
// const sumAndMultiplyByLast = (arr) => {
//     const res = arr.reduce((a, b) => a + b) * arr[arr.length - 1] 
//     return res
// }
// console.log(sumAndMultiplyByLast(numbers));

// Создайте массив строк. Реализуйте функцию filterAndSortStrings, используя методы filter и sort, чтобы оставить только строки длиной более 4 символов и отсортировать их по алфавиту.
const words = ["apple", "pear", "banana", "kiwi"]
const filterAndSortStrings = (arr) => {
    arr.filter(fruit => fruit.length > 4).sort()
    return arr.filter(fruit => fruit.length > 4).sort()
}
console.log(filterAndSortStrings(words))