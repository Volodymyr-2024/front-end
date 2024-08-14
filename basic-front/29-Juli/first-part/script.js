// Проверьте, содержит ли массив хотя бы одно отрицательное число с помощью метода some().
// let numbers = [1, 2, -3, 4, 5];
// const min = numbers.some(item => item < 0)
// console.log(min)

// Проверьте, содержит ли массив хотя бы одну строку длиной более 10 символов с помощью метода some().
// let strings = ["apple", "banana", "orange", "watermelon"];
// const newStrings = strings.some(item => item.length > 10)
// console.log(newStrings)

// Проверьте, являются ли все элементы массива положительными числами с помощью метода every().
// let numbers = [1, 2, 3, 4, 5];
// const newRes =  numbers.every(value => value > 0)
// console.log(newRes)

// Проверьте, являются ли все элементы массива четными числами с помощью метода every().
// let number = [2, 4, 6, 8, 10];
// const example = number.every(value => value % 2 === 0)
// console.log(example)

// Создайте массив чисел. Реализуйте функцию hasEvenNumber, используя метод some, чтобы проверить, содержит ли массив хотя бы одно четное число.
// const numbers = [1, 3, 5, 6, 9];
// const hasEvenNumber = (array) => {
//     return array.some(value => value % 2)
// }
// console.log(hasEvenNumber(numbers))

// Создайте массив строк. Реализуйте функцию hasStringWithA, используя метод some, чтобы проверить, содержит ли массив хотя бы одну строку с буквой "a".
// const words = ["banana", "orange", "kiwi", "pear"];
// function hasStringWithA(array) {
//     return array.some(value => value.includes('a'))
// }
// console.log(hasStringWithA(words));

// Создайте массив чисел. Реализуйте функцию areAllMultiplesOfThree, используя метод every, чтобы проверить, что все числа в массиве кратны 3.
// const numbers = [3, 6, 9, 12];
// const areAllMultiplesOfThree = (array) => {
//     return array.every(value => value % 3 ===0)
// }
// console.log(areAllMultiplesOfThree(numbers))

// Создайте массив объектов с полями "name" и "age". Реализуйте функцию hasPersonWithAge, используя метод some, чтобы проверить, содержит ли массив хотя бы один объект с определенным возрастом.
// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 32 },
//   { name: "Charlie", age: 28 },
// ];
// const hasPersonWithAge = (array) => {
//   return array.some((value) => value.age === 25);
// };
// console.log(hasPersonWithAge(people));

// Дан массив объектов с полями "name" и "age". Нужно выполнить следующие действия:
// Отфильтровать людей младше 30 лет.
// Добавить в начало отфильтрованного массива нового человека.
// Увеличить возраст всех оставшихся людей на 1.
// Удалить последнего человека из массива.
// Проверить, есть ли в массиве хотя бы один человек с возрастом 30 лет.
const people = [
  { name: "Alice", age: 35 },
  { name: "Bob", age: 29 },
  { name: "Charlie", age: 28 },
];
const newPerson = { name: "Nick", age: 45 };
const createNewArray = array => {
  const filterPeople = array.filter(value => value.age < 30);
  filterPeople.unshift(newPerson);
  const updatedPeople = filterPeople.map(value => ({
    ...value,
    age: value.age + 1,
  }));
  updatedPeople.pop();
  const hasAge30 = updatedPeople.some(value => value.age === 30);
  return {
    updatedPeople,
    hasAge30,
  };
};
console.log(createNewArray(people));
