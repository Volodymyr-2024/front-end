// Создайте пустой массив colors. Используйте метод push, чтобы добавить в него три цвета: "red", "green", "blue". (Попробовать решить с помощью цикла)
// const colors = []
// const color = ["red", "green", "blue"]
// for (let i = 0; i < color.length; i++)
// colors.push(color[i])
// console.log(colors)

// Создайте массив numbers с элементами 1 и 2. Используйте метод push, чтобы добавить в него два новых числа: 3 и 4.
// const numbers = [1, 2];
// const numbers = [1, 2];
// numbers.push(3, 4)
// console.log(numbers);

// Используя метод forEach(), выведите в консоль сумму всех элементов числового массива.
// const arrayConst = [1, 2, 3, 4, 5]
// let sum = 0
// arrayConst.forEach(function(element) {
//     sum += element
// })
// console.log(sum)

// Используя метод forEach(), умножьте каждый элемент числового массива на его индекс.
// const newArray = []
// arrayConst.forEach(function(element, index) {
// newArray.push(element * index)
// })
// console.log(newArray)

// Используя метод map(), создайте новый массив, содержащий длины каждого элемента исходного массива.
const arrayWords = ['apple', 'banana', 'cherry', 'kiwi']
const len = arrayWords.map((fruit) => {
    return fruit.length
})
console.log(len)

// Используя метод map(), создайте новый массив, содержащий квадратный корень каждого элемента числового массива.
const arrayConst = [1, 4, 9, 16, 25]
const square = arrayConst.map((num) => {
return Math.sqrt(num)
})
console.log(square)