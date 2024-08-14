// Создаем массив объектов. Каждый объект состоит из id, title, description (3 items)
// Необходимо поместить данный массив в локальное хранилище и по клику извлекать его. Создать функцию, которая принимает массив,
// полученный из локального хранилища и распечатать его на страницу в формате постов, каждый из которых содержит title, description.
// const arr = [
//   {
//     id: 1,
//     title: "title1",
//     description: "description1",
//   },
//   {
//     id: 1,
//     title: "title2",
//     description: "description2",
//   },
//   {
//     id: 1,
//     title: "title2",
//     description: "description3",
//   },
// ];
// const btn = document.getElementById('btn')
// const box = document.querySelector('.box')
// localStorage.setItem('postlist', JSON.stringify(arr))
// btn.addEventListener('click', () => {
//     const postList =JSON.parse(localStorage.getItem('postlist'))
//     postList.forEach(value => {
//         const postValue = document.createElement('div')
//         const postId = document.createElement('h3')
//         const postDescription = document.createElement('p')
//         postId.innerText = value.title
//         postDescription.innerText = value.description
//         postValue.append(postId, postDescription)
//         box.append(postValue)
//     })
// })
// Создайте массив чисел (например, [1, 2, 3, 4, 5]).
// Напишите функцию, которая сохранит этот массив в локальное хранилище.
// Напишите функцию, которая извлекает этот массив из локального хранилища по клику на кнопку.
// Создайте функцию, которая принимает массив, полученный из локального хранилища, и выводит его на страницу.
// Добавьте возможность фильтрации массива перед его выводом на страницу, оставляя только четные числа, с использованием метода filter.
// Добавьте возможность удалить первый элемент массива перед его выводом на страницу с использованием метода shift.
// Добавьте возможность удалить последний элемент массива перед его выводом на страницу с использованием метода pop.

// const array = [1, 2, 3, 4, 5]
// function save(arr) {
//     localStorage.setItem('arr', JSON.stringify(arr))
// }
// save(array)

// const btn = document.getElementById('btn')
// function extract() {
//    const newArray =  JSON.parse(localStorage.getItem('arr'))
// }
// btn.addEventListener('click', extract)

// const container = document.querySelector('.container')
// function paging() {
//     const newElement = document.createElement('p')
//     newElement.innerText = newArray
//     container.append(newElement)
// }

// Напишите функцию которая принимает параметром массив и возвращает все элементы этого массива в консоль
// arr = [1, 2, 3, 4, 5]
// function fn(array) {
//     array.forEach(item => {
//         console.log(item)
//     });
// }
// fn(arr)

// Ожидаю что ваша функция вернет ["Apple", "Banana", "Cherry"]
// const products = [
//     { id: 1, name: "Apple", price: 100 },
//      { id: 2, name: "Banana", price: 50 },
//      { id: 3, name: "Cherry", price: 75 }
//     ];
// function back(arr) {
//     return arr.map(element => element.name);
// }
// console.log(back(products))
// Напишите функцию, которая использует метод filter, чтобы создать новый массив,
// содержащий только тех пользователей, которым больше 18 лет.
// const users = [
//     { id: 1, name: "Alice", age: 22 },
//     { id: 2, name: "Bob", age: 17 },
//     { id: 3, name: "Charlie", age: 19 }
// ];

// function getUserMinAge(users, age) {
//     return users.filter(val => val.age > age);
// }
// console.table(getUserMinAge(users, 18));

// Выведите НА СТРАНИЦУ task тех объектов, где поле completed: true

const tasks = [
  { id: 1, task: "Do laundry", completed: false },
  { id: 2, task: "Clean room", completed: true },
  { id: 3, task: "Buy groceries", completed: false },
];
function fn(arr) {
  const newArr = arr.filter((item) => item.completed);
  const container = document.getElementById("container");
  newArr.forEach((el) => {
    const newElement = document.createElement("div");
    newElement.innerText = el.task;
    container.appendChild(newElement);
  });
}
fn(tasks);

// Создайте массив объектов, где каждый объект содержит информацию о студенте: id, name, grade.
// Напишите функцию, которая:
// Удаляет первый элемент массива.
// Создать новый массив, содержащий только тех студентов, чья оценка выше 60.
// Создать новый массив, содержащий строки формата "<name>: <grade>" для каждого оставшегося студента.
const array = [
  { id: 1, name: 1, grade: 65 },
  { id: 2, name: 2, grade: 40 },
  { id: 3, name: 3, grade: 62 },
];
function fn(arr) {
    arr.shift()
    return arr
    .filter(value => value.grade > 60)
    .map(arr => ({name: arr.name, grade: arr.grade})
)}
console.table(fn(array))