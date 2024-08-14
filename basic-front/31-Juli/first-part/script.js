// localStorage.setItem('username', 'itspec')
// const result = localStorage.getItem('username')
// console.log(result)
// localStorage.clear()

const basicHtml = document.querySelector('html')
const btn = document.querySelector('.btn')
const theme = localStorage.getItem('theme')
if(theme) {
    basicHtml.setAttribute('data-theme', theme)
}
const themeHandler = () => {
    const currentTheme = localStorage.getItem('theme')
    const html = document.querySelector('html')
    if(currentTheme) {
        if(currentTheme === 'light') {
            localStorage.setItem('theme', 'dark')
            html.setAttribute('data-theme', 'dark')
        } else if(currentTheme === 'dark') {
            localStorage.setItem('theme', 'red')
            html.setAttribute('data-theme', 'red')
        } else {
            localStorage.setItem('theme', 'light')
            html.setAttribute('data-theme', 'light')
        }
    } else {
        localStorage.setItem('theme', 'dark')
        html.setAttribute('data-theme', 'dark')
    }
}
btn.addEventListener('click', themeHandler)