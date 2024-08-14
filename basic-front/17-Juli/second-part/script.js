// Создайте пустой контейнер на веб-странице, куда будут добавляться задачи.
// Используйте JavaScript, чтобы создать несколько элементов <li> (элементов списка) с задачами.
// Добавьте текст для каждой задачи с помощью свойства textContent.
// Добавьте каждый элемент <li> в контейнер с помощью метода append.
// Используйте цикл for, чтобы повторить процесс для нескольких задач.

// const container = document.querySelector('.container')
// const tasks = [
//     'купить молоко', 'сходить на почту', 'забрать одежду'
// ]
// for (let i = 0; i < tasks.length; i++) {
//     const li = document.createElement('li')
//     li.textContent = tasks[i]
//     container.append(li)
// }

// const btn = document.querySelector('.btn')
// const container = document.querySelector('.container')
// btn.addEventListener('click', () => {
//     const newEl = document.createElement('div')
//     newEl.textContent = 'New content for div'
//     container.append(newEl)
// })

// У вас есть абзац текста. При клике клике на абзац, измените его текст.
const paragraph = document.querySelector('p')
paragraph.addEventListener('click', () => {
    paragraph.textContent = 'Новый текст'
})

const btnIncrease = document.querySelector(".btn__increase");
const btnDecrease = document.querySelector(".btn__decrease");
const container = document.querySelector(".container");
const counter = document.querySelector(".counter");
let result = 0;
const eventObj = {
    increase() {
      counter.textContent++;
    },
    decrease() {
      if(counter.textContent > 0) {
        counter.textContent--;
      }
    },
  };
btnIncrease.addEventListener("click", eventObj.increase);
btnDecrease.addEventListener("click", eventObj.decrease);


const input = document.querySelector('#input')
//полчение значения инпута реализуется путем обращения к полю value внутри event.target События типа input
input.addEventListener('input', (e) => console.log(e.target.value))
console.log(input)