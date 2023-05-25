const btn = document.querySelector('.menu-icon button')

function toggleMenu() {
 const nav = document.querySelector('#navegation')
 nav.classList.toggle('active')
   
}

btn.addEventListener('click', toggleMenu)