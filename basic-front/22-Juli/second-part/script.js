const form = document.querySelector('#main_form')
const errorEmail = document.querySelector('.error_email')
const errorPass = document.querySelector('.error_pass')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event)
    const first_name = event.target.elements['name'].value
    const last_name = document.querySelector('#last_name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    if (!email.includes('@')) {
        error.textContent = 'Введите корректный e-mail'
        error.style.color = 'red'
    }
    if (password.length <= 6) {
errorPass.textContent = 'Пароль короткий. Нужен больше 6-ти символов'
errorPass.style.color = 'red'
    }
    console.log(event, first_name, last_name)

})
