// const btn = document.querySelector('.btn')
// const box = document.querySelector('.container')
// btn.addEventListener('click', function() {
//     container.classList.add('container2')
// })
// Создайте страницу, содержащую пустой список (<ul>) и кнопку "Добавить элемент". При каждом клике на кнопку, добавьте новый элемент списка (<li>)
//      с уникальным текстом (например, "Элемент 1", "Элемент 2" и так далее). Текст может быть случайным.
// const list = document.querySelector('.list')
// const btn = document.querySelector('.btn')

// let result = 1
// btn.addEventListener('click', function() {
//     const item = document.createElement('li')
//     item.textContent = `Element ${result}`
//     list.append(item)
//     result++;
// })

// На странице есть кнопка и элемент заголовка (<h1>). При каждом клике на кнопку, измените текст заголовка на "Новый текст {номер клика}".
// const text = document.querySelector('h1')
// const btn = document.querySelector('.btn')

// num = 1
// btn.addEventListener('click', () => {
//     text.textContent = `Новый текст ${num}`
//     num++
// })

// На странице есть список (<ul>) с несколькими элементами (<li>) и кнопка "Удалить последний элемент". 
//     При каждом клике на кнопку, удалите последний элемент из списка.

// const box = document.querySelector('.box')
// const btn = document.querySelector('.btn')
// btn.addEventListener('click', () => {
//     box.removeChild(box.lastElementChild)
// })

// const btn = document.querySelector('.btn')
// const box = document.querySelector('.box')
// const lastItem = document.querySelector('.box li:last-child')
// btn.addEventListener('click', () => {
//     //Доделать проверку
//     console.log(lastItem)
//     lastItem.remove()
// })

const btn = document.querySelector('.btn')
const box = document.querySelector('.box')
btn.addEventListener('click', () => {
    const listItems = document.querySelectorAll('.box li')
    for(let i = 0; i < listItems.length; i++) {
        box[box.length - 1].remove()
    }
})
console.log(box)


// const btn = document.querySelector('.btn')
// const box = document.querySelector('.box')
// btn.addEventListener('click', () => {
//     const lastItem = document.querySelector('.box li:last-child')
//     if(lastItem) {
//         lastItem.remove()
//     }
// })

/ На странице есть кнопка "Сменить цвет фона" и блок (<div>) с текстом. При каждом клике на 
// Для решения: необходимо задавать рандомный параметр цвета фона
// Рандомизировать можно с помощью Math.floor(Math.random() * 16)
// Умножаем на 16 потому что когда получаем цвет, нам нужно получить значение 0-9 и A-F 
// Можно решить циклом



// На странице есть кнопка "Кликни меня" и блок текста, который отображает текущее количество кликов.
//  При каждом клике на кнопку, увеличивайте счетчик и обновляйте текст блока.