// Используя fetch для выполнения GET запроса к JSONPlaceholder (URL: https://jsonplaceholder.typicode.com/users). Выведите список пользователей в консоль.
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(json => console.log(json))
 
// Используя fetch для выполнения POST запроса к JSONPlaceholder (URL: https://jsonplaceholder.typicode.com/users).
// Создайте объект пользователя с полями name, username, и email. Отправьте POST запрос с созданным объектом пользователя. Выведите ответ сервера в консоль.
// const user = {
//     name: "John Doe",
//     username: "johndoe",
//     email: "johndoe@example.com"
//   };
//   fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'POST',
//     body: JSON.stringify(user),
//     headers: {
//     'Content-Type': 'application/json'
//     }
//   })
//   .then(response => response.json())
//   .then(json => console.log('Ответ сервера:', json))
//   .catch(error => console.error('Ошибка:', error))

//   Используя fetch для выполнения GET запроса к JSONPlaceholder (URL: https://jsonplaceholder.typicode.com/posts). Необходимо функцию рендера постов. Отобразить все посты.
function fetchPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(json => renderPosts(json))
}
function renderPosts(json){
  const container = document.getElementById('container')
  container.innerHTML = ''
json.forEach(post => {
  const postElement = document.createElement('div');
    postElement.classList.add('post');

    // Создаем заголовок и содержание поста
    const titleElement = document.createElement('h3');
    titleElement.textContent = post.title;

    const bodyElement = document.createElement('p');
    bodyElement.textContent = post.body;

    // Добавляем заголовок и содержание в элемент поста
    postElement.appendChild(titleElement);
    postElement.appendChild(bodyElement);

    // Добавляем элемент поста в контейнер
    container.appendChild(postElement);
  });
};

// Вызываем функцию для получения и отображения постов при загрузке страницы

document.addEventListener('DOMContentLoaded', fetchPosts)


// Создать форму с полями Имя, Логин, Email, которая будет отправлять запрос на создание пользователя. Используем POST метод.