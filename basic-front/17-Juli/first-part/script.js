// const mainImage = document.querySelector('#main_image')
// const copiedImage = document.importNode(mainImage, true)

const list = document.querySelector('#my_list')
if (list.children.length > 3) {
    list.removeChild(list.lastElementChild);
}