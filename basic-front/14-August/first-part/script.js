// const fetchApi = async(url) => {
//     try{
// const res = await fetch(url)
// if(!res.ok){
//     throw new Error('Request was not received')
// }
// const data = await res.json()
// console.log(data);
//     } catch(e){
//         console.error('fetch was not successfull', e);
//     }
// }
// fetchApi('https://jsonplaceholder.typicode.com/todos')

// https://jsonplaceholder.typicode.com/users
// Достать всех пользователей и вывести их имена на страницу

// const fetchApi = async (url) => {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) {
//       throw new Error("Request was not received");
//     }
//     const data = await res.json();
//     displayName(data);
//   } catch (e) {
//     console.log("Error", e);
//   }
// };
// function displayName(users) {
//   const userList = document.getElementById("users");
//   users.forEach((user) => {
//     const listItem = document.createElement("li");
//     listItem.innerText = user.name;
//     userList.appendChild(listItem);
//   });
// }
// fetchApi("https://jsonplaceholder.typicode.com/users");

// Необходимо вывести на страницу только те объекты, в которых поле completed === true.
// https://jsonplaceholder.typicode.com/todos
const fetchApi = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Request was not received");
    }
    const data = await res.json();
    displayName(data);
  } catch (e) {
    console.log("Error", e);
  }
};
function displayName(users) {
  const userList = document.getElementById("users");
  const newUsers = users.filter((user) => user.completed === true);
  newUsers.forEach((user) => {
    const listItem = document.createElement("li");
    // listItem.style.listStyle = "none";
    // const userInfo = `
    // <br><strong>ID:</strong> ${user.id}<br>
    // <strong>Title:</strong> ${user.title}<br>
    // <strong>Completed:</strong> ${user.completed}<br>
    // <strong>User ID:</strong> ${user.userId}<br>
    // `;
    // listItem.innerHTML = userInfo;
    listItem.innerHTML = user.title
    userList.appendChild(listItem);
  });
}
fetchApi("https://jsonplaceholder.typicode.com/todos");
