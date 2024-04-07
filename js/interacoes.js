$(document).ready(function() {
    $("#destaque").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'linear',
    })
})

const btnMenu = document.getElementById('iconMenu')
const menu = document.getElementById('itens')
menu.classList.add('show')

btnMenu.addEventListener('click', function() {
    menu.classList.toggle('show')
})