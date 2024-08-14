// Опишите две функции: writeLocalStorage и readLocalStorage. Функции должны записывать или считывать объекты в localStorage соответственно.
// const objectName = {
//     firstName: 'Volodymyr',
//     lastName: 'Stoliarchuk'
// }
// function writeLocalStorage(obj){
//     localStorage.setItem('object', JSON.stringify(obj))
// }
// writeLocalStorage(objectName)

// const readLocalStorage = (obj) => {
//     return  JSON.parse(localStorage.getItem(obj))
// }
// console.log(readLocalStorage('object'))

// Создать форму, которая позволяет добавить пункт товара в массив. Данные из массива должны отображаться в интерфейсе при добавлении
//  нового товара. Реализовывать через массив с продуктами и localStorage.
const form = document.getElementById("productForm");
const input = document.querySelector(".tovar");
const list = document.getElementById("productList");

function getProducts() {
  const prodArray = localStorage.getItem("prodArray");
  return prodArray ? JSON.parse(prodArray) : [];
}

function saveProducts(product) {
  localStorage.setItem("prodArray", JSON.stringify(product));
}
function showProducts() {
  const products = getProducts();
  list.innerHTML = "";
  products.forEach((element) => {
    const listItem = document.createElement("li");
    listItem.textContent = element.name;
    list.append(listItem);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  const prodValue = input.value;
  console.log(prodValue);
  if (prodValue != "") {
    const products = getProducts();
    const newProduct = {
      id: Date.now(),
      name: prodValue,
    };
    products.push(newProduct);
    saveProducts(products);
    showProducts();
    input.value = "";
  }
});
showProducts();
