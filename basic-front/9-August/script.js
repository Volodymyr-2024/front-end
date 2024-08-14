// const p1 = new Promise ((res,rej) => {
//     if (5 === 5) {
//         res('Hello World!')
//     } else {
//         rej('rejected')
//     }
// })
// console.log(p1);
// p1.then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.error(err);
// })

// async function fetchApi(url, id) {
//     try {
//         const response = await fetch(url)
//         if(!response.ok) {
//             throw new Error('There is mistake')
//         }
//         const data = await response.json()
//         console.log(response);
//     } catch(e) {
//         console.error('Error' + e);
//     }
// }
// fetchApi('https://jsonplaceholder.typicode.com/todos')

// function fetchPromiseApi(url, id) {
//     fetch(url)
//     .then(res => {
//         if (!res.ok) {
//             throw new Error('Error!!!')
//         }
//         return res.json()
//     })
//     .then (data => data
//         .forEach((item, index) => {
//         const desc = `description for ${index + 1} element`
//             createPost(item.title, desc)
//         })
//         )
//     .catch(rej => console.error(('Error was made', rej))
// )
// }
// fetchPromiseApi('https://jsonplaceholder.typicode.com/todos')

// function createPost (title, body) {
//     const listItem = document.querySelector('.lists')
//     const titleElement = document.createElement('h3')
//     const bodyElement = document.createElement('p')

//     titleElement.innerText = title
//     bodyElement.innerText = body
//     listItem.append(titleElement, bodyElement)
//     listItem.classList.add('listItem')
//     listItem.appendChild(listItem)
// }
// createPost('Hello', 'world')

// Напишите функцию, которая принимает параметром ur и  выводит всех пользователей в консоль
// function output(url) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((json) => console.log(json))
//     .catch((err) => console.error(err));
// }
// output("https://jsonplaceholder.typicode.com/users");

// Необходимо вывести на страницу карточки пользователей в формате.
// 1 карточка - name, username, email, phone

// function output(url) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((json) => {
//         json.forEach(user => {
//             sortUser(user)
//         });
//     })
//     .catch((err) => console.error(err));
// }
// function sortUser(user) {
//   const container = document.querySelector(".lists");

//   // Создаем контейнер карточки пользователя
//   const userCard = document.createElement("div");
//   userCard.classList.add("user-card");

//   const nameEl = document.createElement("p");
//   const usernameEl = document.createElement("p");
//   const emailEl = document.createElement("p");
//   const phoneEl = document.createElement("p");
//   nameEl.innerText = `Name: ${user.name}`;
//   usernameEl.innerText = `Username: ${user.username}`;
//   emailEl.innerText = `E-mail: ${user.email}`;
//   phoneEl.innerText = `Phone: ${user.phone}`;

//   userCard.append(nameEl, usernameEl, emailEl, phoneEl);
//   // Добавляем карточку в контейнер
//   container.appendChild(userCard);
// }
// output("https://jsonplaceholder.typicode.com/users");

// https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1
function displayCat(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const imgUrl = data[0].url;
      const container = document.querySelector(".lists");
      const imgEl = document.createElement("img");
      imgEl.src = imgUrl;
      imgEl.setAttribute('src', src)
      container.append(imgEl);
    })
    .catch((err) => console.error(err));
}
displayCat(
  "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"
);

// function fetchCat (url) {
//     fetch(url)
//     .then ((response) => {
//       return response.json()
//     })
//     .then ((data) => {
//       displayCat(data[0].url)
//     })
//   }
//   fetchCat('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1')
// function displayCat(src) {
//     const img = document.createElement('img')
//     img.setAttribute('src', src)
//     list.appendChild(img)
// }