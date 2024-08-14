//* Увеличить все четные числа на 1 и удалить первое число массива
// const initArray = [33, 12, 23, 2, 4, 'river', 'ocean', 'lake', 'pool', false, true]

// Увеличить все числа на 1 и удалить первое число массива
// const arr = [1, 2, 3, 4, 5, 6];
// const newArr = arr.map(myFunction);
// function myFunction(value) {
//   return value + 1;
// }
// newArr.shift();
// console.log(newArr);

// Из массива чисел выбрать только те, которые больше 10.
// const arr = [1, 22, 12, 7, 18, 5, 3, 45]
// const newArr = arr.filter(value => {
//     return value > 10
// })
// console.log(newArr)

// Из массива строк выбрать только те, которые содержат больше 3 символов.
// const arr = ['river', 'ocean', 'lake', 'pool', 'er', 'true']
// const newArr = arr.filter(value => {
//     return value.length > 3
// })
// console.log(newArr)

// Из массива строк создать новый массив, где все строки будут в верхнем регистре.
// const arr = ['river', 'ocean', 'lake', 'pool', 'er', 'true']
// const newArr = arr.map(value => {
//     return value.toUpperCase()
// })
// console.log(arr, newArr);

// Дан массив чисел. Необходимо отфильтровать его, чтобы остались только четные числа, затем взять последний элемент отфильтрованного массива и переместить его в начало массива.
// const arr = [1, 22, 12, 7, 18, 5, 3, 45]
// function fn(array) {
//     const newArr = array.filter(value => {
//         return value % 2 === 0
//     })
//     const last = newArr[newArr.length - 1]
//     newArr.pop()
//     newArr.unshift(last)
//     return newArr
// }
// console.log(fn(arr))

// Дан массив чисел. Необходимо отфильтровать его, чтобы
// остались только числа больше 10, затем увеличить каждое из этих чисел на 5, взять последний элемент полученного массива и переместить его в начало массива.
// const arr = [1, 22, 12, 7, 18, 5, 3, 45];
// fn = (array) => {
//   const newArr = array
//     .filter((value) => {
//       return value > 10;
//     })
//     .map((value) => {
//       return value + 5;
//     });
//   const last = newArr[newArr.length - 1];
//   newArr.pop();
//   newArr.unshift(last);
//   return newArr;
// };
// console.log(fn(arr));

// Дан массив строк. Необходимо отфильтровать его, чтобы остались только строки, длина которых больше 3 символов.
//  Затем преобразовать эти строки в верхний регистр, удалить первую строку из массива и вставить ее в конец массива.
// const arr = ['river', 'ocean', 'lake', 'pool', 'er', 'you', 'true']
// myFunction = (array) => {
//     const newArr = array
// .filter(value => {
//     return value.length > 3
// })
// .map(value => value.toUpperCase())
// const last = newArr.shift()
// newArr.push(last)
// return newArr
// }
// console.log(myFunction(arr))

// Дан массив объектов, каждый из которых представляет человека с именем и возрастом. Необходимо отфильтровать массив, чтобы остались только те люди, возраст которых больше 18 лет. 
// Затем преобразовать их имена в верхний регистр, удалить первый объект из массива и вставить его в конец массива. В конце вывести имена людей на страницу HTML.
const userData = [
    {id: 1, name: 'Yury', age: 26},
    {id: 2, name: 'Viktor', age: 30},
    {id: 3, name: 'Niklaus', age: 14},
    {id: 4, name: 'Petr', age: 24}
]
fnName = (arr) => {
  const newArr = arr.filter(value => value.age > 18).map(value => value.name.toUpperCase());
  const first = newArr.shift();
  newArr.push(first);
  return newArr;
};
const result = fnName(userData);
const resultDiv = document.querySelector('#result');
// resultDiv.textContent = `${result}`;
result.forEach(element => {
    let listItem = document.createElement('li')
    listItem.textContent = element
    resultDiv.append(listItem)
});
console.log(result)

// код для добавления вместо имен - объектов, дополниттельно содержащих возраст и id
// function fn(arr) {
//     const result = arr
//     .filter(item => item.age >= 15)
//     .map(item => {
//         return {
//             id: Date.now(),
//             name: item.name + ' new name',
//             age: item.age
//         }
//     })
//     return result
// }
// console.log(fn(userData));