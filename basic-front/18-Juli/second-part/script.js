// У вас есть блок текста и несколько кнопок. При клике на первую кнопку вы вешаете класс highlight,
//  при клике на вторую удалите класс "highlight" у блока текста, если он присутствует. Проверку осуществляем с помощью contains

// const container = document.querySelector('.container')
// const btn1 = document.querySelector('.btn1')
// const btn2 = document.querySelector('.btn2')
// const box = document.querySelector('.box')
// //classList.add('active') - добавляет новый класс active
// btn1.addEventListener('click', () => {
//     if(box.classList.contains('box')) {
//         box.classList.add('active')
//     }
// })
// //classList.remove('active') - удаляет класс active 
// btn2.addEventListener('click', () => {
//     if(box.classList.contains('active')) {
//         box.classList.remove('active')
//     }
// })
// if(box.classList.contains('box')) {
//     box.classList.remove('box')
// } else {
//     box.classList.add('toggler')
// }
// const newItem = document.createElement('div')
// newItem.classList.add('container__item')
// container.append(newItem)

// const textBlock = document.getElementById('container')
// const btn1 = document.getElementById('btn1')
// const btn2 = document.getElementById('btn2')

// btn1.addEventListener('click', function() {
//     textBlock.classList.add('highlight')
// })
// btn2.addEventListener('click', function() {
//     textBlock.classList.remove('highlight')
//     }
// )

// При клике на первую кнопку вы добавляете класс "active" к блоку текста и меняете сам текст на «текст изменен из javascript», при клике на вторую кнопку убираете класс
//  "active" у блока текста, если он присутствует. Проверку осуществляем с помощью метода classList.contains.

// У вас есть кнопка и блок текста. При каждом клике на кнопку, переключайте видимость блока текста. Если блок виден, скройте его, и наоборот.

const textBlock = document.getElementById('container')
const btn1 = document.getElementById('btn1')
