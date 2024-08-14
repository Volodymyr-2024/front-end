const box = document.querySelector('.box')
const arr = [
    {
        title: 't-shirts 1', 
        img_src: './images/image_1.jpg',
        description: 'Описание Описание Описание Описание Описание Описание Описание Описание'
    },
    {
        title: 't-shirts 2', 
        img_src: './images/image 3.jpg',
        description: 'Описание Описание Описание Описание Описание Описание Описание Описание'
    },
    {
        title: 't-shirts 3', 
        img_src: './images/image 4.jpg',
        description: 'Описание Описание Описание Описание Описание Описание Описание Описание'
    },
    {
        title: 't-shirts 4', 
        img_src: './images/image 7.jpg',
        description: 'Описание Описание Описание Описание Описание Описание Описание Описание'
    },
    {
        title: 't-shirts 5', 
        img_src: './images/image 7.jpg',
        description: 'Описание Описание Описание Описание Описание Описание Описание Описание'
    },
    {
        title: 't-shirts 6', 
        img_src: './images/image_1.jpg',
        description: 'Описание Описание Описание Описание Описание Описание Описание Описание'
    },
    {
        title: 't-shirts 7', 
        img_src: './images/image 3.jpg',
        description: 'Описание Описание Описание Описание Описание Описание Описание Описание'
    },
    {
        title: 't-shirts 4', 
        img_src: './images/image_1.jpg',
        description: 'Описание Описание Описание Описание Описание Описание Описание Описание'
    },
    {
        title: 't-shirts 3', 
        img_src: './images/image_1.jpg',
        description: 'Описание Описание Описание Описание Описание Описание Описание Описание'
    }
]
for (let i = 0; i < arr.length; i++) {
    const boxItem = document.createElement('li')
    boxItem.classList.add('box_item')
    box.appendChild(boxItem)
    const boxItemTitle = document.createElement('h3')
    const boxItemImg = document.createElement('img')
    const boxItemDescription = document.createElement('p')
    const boxItemButton = document.createElement('button')
    const boxObj = arr[i]
    boxItemTitle.textContent = boxObj.title
    boxItemImg.setAttribute('src', boxObj.img_src)
    boxItemDescription.textContent = boxObj.description
    boxItemButton.textContent = 'Добавить в корзину'
    boxItem.append(boxItemTitle, boxItemImg, boxItemDescription, boxItemButton)
}