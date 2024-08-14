// localStorage.setItem('username', 'itspec') //во вкладке Application смторим результат

// localStorage.setItem('username', 'yury1997') //во вкладке application смотрим результат добавления
// const storedResult = localStorage.getItem('username')
// const el = document.createElement('div')
// el.textContent = storedResult ? storedResult : 'Хранилище пустое'
// document.body.append(el)
// console.log(storedResult);
// localStorage.removeItem('username')

//1. Добавьте в локальное хранилще ваше ФИО
const fullName = 'Столярчук Владимир Иванович'
localStorage.setItem('fullName', fullName)
const fn = () => {
    localStorage.removeItem('fullName')
}

//2. По клику на кнопку удалить ваши ФИО из локального хранилища
const btn = document.getElementById('btn')
btn.addEventListener('click', fn)

const decreaseBtn = document.querySelector('.decrease')
const increaseBtn = document.querySelector('.increase')
increaseBtn.addEventListener('click', () => {
    counter++
    localStorage.setItem('counter', String(counter))
})
decreaseBtn.addEventListener('click', () => {
    counter--
    localStorage.setItem('counter', String(counter))
})