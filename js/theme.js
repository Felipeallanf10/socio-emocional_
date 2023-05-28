const button_theme = document.querySelector('#button-theme')
const sun = document.querySelector('#icon_sun')
const moon = document.querySelector('#icon_moon')
const body = document.querySelector('body')
const sessao_h3 = document.querySelector('#title')
const ball = document.querySelector('#ball')

function toggleButton() {
  body.classList.toggle('dark')
  sessao_h3.classList.toggle('dark')
  ball.classList.toggle('dark')
}

localStorage.setItem('theme', 'light')
const handleClick = event => {
  event.preventDefault()
  if (localStorage.getItem('theme') == 'dark') {
    localStorage.setItem('theme', 'light')
  } else if (localStorage.getItem('theme') == 'light') {
    localStorage.setItem('theme', 'dark')
  }
}
localStorage.setItem('theme', 'light')

button_theme.addEventListener('click', toggleButton)
button_theme.addEventListener('click', handleClick)




