// Создайте и заполните массив: напишите код, который создает массив и заполняет его числами от 1 до 10. Используйте цикл for для этого.
// const arr = []
// for (let i = 1; i <= 10; i++) {
//     arr.push(i)
// }
// console.log(arr)

// Обход массива: создайте массив чисел. Напишите код, который использует цикл for для перебора элементов массива и выводит каждое число в консоль.
// const array = [1, 2, 5, 45, 84, 93, 102, 4]
// for (let i = 0; i < array.length; i ++) {
//     console.log(array[i])
// }

// Обратный обход массива: создайте массив чисел. Напишите код, который использует цикл for, чтобы перебрать массив в обратном порядке (с последнего элемента к первому).
// for (let i = array.length; i > 0; i--) {
//     console.log(array[i]);
// }
// Фильтрация массива: создайте массив чисел. Напишите код, который использует цикл for, чтобы создать новый массив, который содержит только числа из исходного массива, которые больше 5.
// const newArray = []
// for (let i =0; i < array.length; i++){
//     if (array[i] > 5) {
//         newArray.push(array[i])
//     }
// }
// console.log(newArray)

// Напишите функцию, которая вычисляет факториал числа.
// function factorial(n) {
//     let result = 1
//     for (let i = 1; i <= n; i++){
// result *= i
//     }
//     return result
// }
// console.log(factorial(4));

// Напишите функцию, которая переворачивает строку.
// function stringReverse(str) {
//     return str.split('').reverse().join('').toUpperCase()
// }
// console.log (stringReverse('Привет'))

// Напишите стрелочную функцию, которая принимает массив чисел и возвращает их сумму.
// arraySum = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };
// console.log(arraySum([1, 2, 3, 4, 5]));

// Напишите функцию, которая удваивает каждый элемент в массиве чисел.
// stringFun = (arr) => {
//     const newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i]*2)
//     }
//     return newArr
// }
// console.log(stringFun([1, 2, 3, 4, 5]))

// Напишите функцию, которая проверяет, есть ли определенный элемент в массиве.
function find(array, value) {
    for (let i = 0; i < array.length; i++)
        if (array[i] == value) {
            return true
            break
        }
    return false    
}
console.log(find([1, 2, 5, 7, 8, 100], 55))

// Создайте функцию, которая принимает два массива - один с ключами, другой с значениями - и возвращает объект.
function objekt(arr1, arr2) {
    const obj = {}
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = arr2[i]
    }
    return obj
}
console.log(objekt(['фрукты', 'овощи', 'разное'], [2, 4, 78]))