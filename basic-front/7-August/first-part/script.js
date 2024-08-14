// function fetchApi(url) {
//     fetch(url)
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         data.forEach(item => {
//             console.log(item.name)
//         })
//     })
// }
// fetchApi('https://jsonplaceholder.typicode.com/users')

const newPost = {
  title: "Task",
  body: "do something",
  userId: 1,
};

// GET
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", // Здесь так же могут быть GET, PUT, DELETE
  body: JSON.stringify(newPost), // Тело запроса в JSON-формате
  headers: {
    // Добавляем необходимые заголовки
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // {title: 'Task', body: 'do something', userId: 1, id: 101}
  });

// PUT
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({ id: 1, title: "foo", body: "bar", userId: 1 }),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
// _ > { id: 1, title: "foo", body: "bar", userId: 1 };
