//Повторение синтаксиса
// const newPromise = new Promise((res, rej) => {
//     if(5 == '5') {
//         res('hello')
//     } else {
//         rej('error')
//     }
// })
// newPromise
// .then((res) => {
//     console.log(res)
// })
// .catch((error) => {
//     console.log(error);
// })
// console.log(newPromise);
// setTimeout(() => {
//     const resPromise = Promise.resolve('Resolved :)')
//     resPromise.then((data) => {
//         console.log(data);
//     })
// }, 2000)
// const rejPromise = Promise.reject('Error error error!!!')
// rejPromise.catch((error) => {
//     console.error(error)
// })
// const promiseItem = new Promise((res, rej) => {
//     res('Yury')
// })

// Создайте три функции fetchData1, fetchData2 и fetchData3, каждая из которых возвращает Promise с имитацией загрузки данных
// с сервера, все три функции должны резолвиться через определенное кол-во времени: 2000 1500 и 1000 миллисекунд.
// Используя Promise.all(), создайте функцию loadAllData, которая одновременно загружает данные из всех трех ресурсов и возвращает массив с результатами.

// const fetchData1 = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Данные из ресурса 1");
//     }, 2000);
//   });
// };
// const fetchData2 = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Данные из ресурса 2");
//     }, 1500);
//   });
// };
// const fetchData3 = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Данные из ресурса 3");
//     }, 1000);
//   });
// };
// function loadAllData() {
//   return Promise.all([fetchData1(), fetchData2(), fetchData3()]);
// } // Использование Promise.all() с then
// loadAllData().then((results) => {
//   console.log(results);
// });

// Создайте две функции fetchDataFast и fetchDataSlow, каждая из которых возвращает промис с имитацией загрузки данных с сервера
//  (например можно использовать setTimeout который срабатывает через 2 секунды). Используя Promise.race, определите,
//  какая из функций загрузит данные быстрее. Выведите результат в консоль.
// const fetchDataFast = () => {
// return new Promise((res, rej) => {
// setTimeout(() => {
//     res('Успех 1')
// }, 5000)
// })
// }
// const fetchDataSlow = () => {
// return new Promise((res,rej) => {
//     setTimeout(() => {
//         res('Успех 2')
//     }, 2000)
// })
// }
// Promise.race([fetchDataFast(), fetchDataSlow()])
// .then((data) => {
//     console.log(data)
// })

// Создайте три функции fetchDataX, fetchDataY и fetchDataZ, каждая из которых возвращает Promise с имитацией загрузки данных с сервера.
// Все три функции должны резолвиться через определенное количество времени: 1000, 2000 и 3000 миллисекунд соответственно. Причем fetchDataX и fetchDataY
// должны отклоняться с ошибкой. Используя специальный метод промисса, создайте функцию loadAnyData, которая возвращает результат первого успешно выполненного промиса.
// const fetchDataX = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       rej("Ошибка 1");
//     }, 1000);
//   });
// };
// const fetchDataY = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       rej("Ошибка 2");
//     }, 2000);
//   });
// };
// const fetchDataZ = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Успех");
//     }, 3000);
//   });
// };

// function loadAnyData() {
//   return Promise.any([fetchDataX(), fetchDataY(), fetchDataZ()]);
// }
// loadAnyData(fetchDataX(), fetchDataY(), fetchDataZ())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((response) => (response.json()))
// .then(json => console.log(json))

// Используя fetch сделать запрос на https://jsonplaceholder.typicode.com/todos и после получения ответа вывести все id туду в консоль.
const ul = document.querySelector("ul");
function fetchRequest() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((value) => {
        const li = document.createElement("li");
        li.innerText = value.title;
        ul.appendChild(li);
      });
    });
}
fetchRequest();
// Далее: все поля title размещаем на странице в ul > li
