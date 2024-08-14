const item = document.getElementById('paragraph')
console.log(item)

const item2 = document.querySelector('p')
console.log(item2)

const list = document.getElementsByTagName('li')
console.log(list);
for (const prop of list) {
    console.log(prop)
// }
// const paragraph = document.querySelector('.paragraph')
// paragraph.textContent = 'Привет мир!'

// const imgCat = document.querySelector ('.imgCat')
// imgCat.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxBmIUwxl_tKscKJB-310PaTYaG3Z3rgo-Q&s')

// const data = document.querySelector('.data')
// data.textContent = Date.now()