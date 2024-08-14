// Напишите функцию reverseString(str), которая принимает строку str и возвращает перевернутую строку.

function reverseString(str) {
    let revers = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revers += str[i];
    }
    return revers;
}
console.log(reverseString("!рим ,тевирП"))

// Умножение всех элементов массива на заданное число
// Напишите функцию multiplyArray(arr, num), которая принимает массив чисел arr и число num, и возвращает новый массив, в котором каждый элемент массива arr умножен на num.
function multiplyArray(arr, num) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = arr[i] * num;
    }
    return newArray;
}
console.log(multiplyArray([1, 2, 3, 4, 5, 6, 7, 8], 2))

// Напишите функцию mergeObjects(obj1, obj2), которая принимает два объекта obj1 и obj2 и возвращает новый объект, содержащий 
// все свойства из obj1 и obj2. Если одно и то же свойство присутствует в обоих объектах, использовать значение из obj2.

function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2}
}
const obj1 = {a: 1, b: 2, c: 3};
const obj2 = {b: 4, d: 5};
console.log(mergeObjects(obj1, obj2));

// Второй вариант
function mergeObjects(obj1, obj2) { // Создаем новый пустой объект 
const mergedObj = {}; // Копируем все свойства из obj1 в mergedObj 
for (const key in obj1) {
     if (obj1.hasOwnProperty(key)) { 
        mergedObj[key] = obj1[key]; 
} 
    } // Копируем все свойства из obj2 в mergedObj, перезаписывая существующие свойства 
for (const key in obj2) { 
    if (obj2.hasOwnProperty(key)) { 
        mergedObj[key] = obj2[key]; 
    } 
} return mergedObj; 
}