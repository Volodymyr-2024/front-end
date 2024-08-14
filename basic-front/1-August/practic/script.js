// Создайте веб-страницу, где пользователь может ввести свое имя и возраст, и эти данные будут сохраняться
//  в localStorage. При перезагрузке страницы данные должны отображаться автоматически. Данные хранить в формате объекта
// const nameInput = document.getElementById("name");
// const ageInput = document.getElementById("alter");
// const form = document.getElementById("formData");

// function loadData() {
//   const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//   if (userInfo) {
//     nameInput.value = userInfo.name;
//     ageInput.value = userInfo.age;
//   }
// }
// function saveData() {
//   const name = nameInput.value;
//   const age = ageInput.value;
//   const userInfo = { name, age };
//   if (name && age) {
//     localStorage.setItem("userInfo", JSON.stringify(userInfo));
//   }
// }
// loadData();
// form.addEventListener("submit", saveData);

// Создайте веб-страницу, которая сохраняет введенное пользователем имя в localStorage при нажатии кнопки "Сохранить". 
// При загрузке страницы имя должно автоматически извлекаться и отображаться в приветственном сообщении.
// const inputName = document.getElementById('name')
// const btn = document.getElementById('btn')
// const txt = document.getElementById('text')
// btn.addEventListener('click', function() {
//     localStorage.setItem('name', inputName.value)
//     txt.textContent = (`Привет ${localStorage.getItem('name')}`)
// })

// Счетчик посещений:
// Реализуйте счетчик, который увеличивает свое значение при каждом посещении страницы и сохраняет это значение в localStorage.
//  При следующем посещении страницы счетчик должен отображать общее количество посещений.