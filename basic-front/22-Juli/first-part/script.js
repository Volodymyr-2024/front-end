// Создайте форму с полем для ввода email и кнопкой "Отправить". Напишите JavaScript-функцию,
//  которая будет вызываться при отправке формы. В функции проверьте, чтобы введенный email
//  содержал символ "@". Если условие выполняется, выведите сообщение "Форма отправлена", в
//   противном случае выведите сообщение "Введите корректный email".
const form = document.querySelector(".form_email");
const done = document.querySelector(".done");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let email = event.target.elements["0"].value;
  if (email.includes("@")) {
    done.textContent = "Форма отправлена";
    done.style.color = "green";
  } else {
    done.textContent = 'Введите корректный e-mail'
    done.style.color = 'red'
  }
  console.log(event, email);
});
