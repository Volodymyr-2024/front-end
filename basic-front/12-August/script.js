// Сделайте 3 запроса на сервер https://jsonplaceholder.typicode.com/ с использованием синтаксиса async/await.
async function fetchData() {
  const usersResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (!usersResponse.ok) {
    throw new Error("Ошибка при получении пользователей");
  }
  const users = await usersResponse.json();
  users.forEach((item) => {
    const container = document.querySelector('.container')
    const user = document.createElement('p')
    user.innerText = ('item.name')
    container.appendChild('user') 

    console.log("Пользователь:", item.name);
  });
  const commentsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  if (!commentsResponse.ok) {
    throw new Error("Ошибка при получении комментариев");
  }
  const comments = await commentsResponse.json();
  comments.forEach((item) => {
    console.log("Комментарии:", item.body);
  });
  const postsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (!postsResponse.ok) {
    throw new Error("Ошибка при получении постов");
  }
  const posts = await postsResponse.json();
  posts.forEach((item) => {
    console.log("Пост:", item.body);
  });
}
fetchData();


// доделать вывод на страницу