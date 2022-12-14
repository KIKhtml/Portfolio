// Sticky Navbar
const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0)
});

// renponsive navbar
let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('active')
};

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navlist.classList.remove('active')
};

// animation
const sr = ScrollReveal({
    distance:'45px',
    duration:2500,
    reset:true
})

sr.reveal('.home-text', {delay:350, origin:'left'})
sr.reveal('.home-img', {delay:350, origin:'right'})
sr.reveal('.sub-service, .about, .portfolio, .service, .cta, .contact', {delay:200, origin:'bottom'})