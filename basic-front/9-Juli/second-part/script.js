// // Создайте массив с вашими любимыми цветами и выведите его в консоль.

const array = ["red", "blue", "white", "green"];
console.log(array);

// // Создайте массив чисел и выведите каждый элемент в консоль.

const array1 = [1, 8, 6, 3, 5, 2];
for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

// Создайте массив чисел и выведите только четные числа.

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array2.length; i++) {
  if (array2[i] % 2 === 0) {
    console.log(array2[i]);
  }
}
// // Создайте массив чисел и найдите их сумму.

const array3 = [1, 5, 4, 8, 9, 10];
let sum = 0;
for (let i = 0; i < array3.length; i++) {
  sum = sum + array3[i];
}
console.log(sum);

// Создайте массив строк и выведите их в обратном порядке.

const array4 = ["one", "two", "three", "four"];
for (let i = array4.length - 1; i >= 0; i--) {
  console.log(array4[i]);
}
