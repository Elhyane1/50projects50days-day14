let icon = document.querySelector('.icon')
let spans = document.querySelectorAll('span')
let options = document.querySelector('.options')

icon.addEventListener('click', () => {
    options.classList.toggle('expand')
    spans[0].classList.toggle('rotate_forward')
    spans[1].classList.toggle('rotate_backward')
})