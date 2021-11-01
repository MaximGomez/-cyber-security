'use strict'

document.addEventListener('DOMContentLoaded', function(event) {

    var hellopreloader = document.getElementById("preloader");
    function fadeOutnojquery(el){
        el.style.opacity = 1;
        var interhellopreloader = setInterval(function(){
            el.style.opacity = el.style.opacity - 0.015;
            if (el.style.opacity <=0.005){
                clearInterval(interhellopreloader);
                hellopreloader.style.display = "none";
            }
        },25);}
    window.onload = function(){
        setTimeout(function(){
            fadeOutnojquery(preloader);
        },500
    )};

    let icon = document.getElementById('light__theme');
    icon.onclick = function() {
        if(document.body.classList.toggle('dark__theme')) {
            icon.src='/img/logo/sun.svg';
        } else {
            icon.src='/img/logo/moon.svg';
        }
    }

    const   burger_menu = document.querySelector('.burger__menu'),
            burger_menu_container = document.querySelector('.burger__container');
    
    burger_menu.addEventListener('click', () => {
        document.body.classList.toggle('_lock');
        burger_menu.classList.toggle('burger__menu--active');
        burger_menu_container.classList.toggle('burger__container--active');
    });
    
    function scrollHeader() {
        const header = document.querySelector('.header__nav-container');
        if(this.scrollY >= 25) {
            header.classList.add('scroll-header');
        }
        else {
            header.classList.remove('scroll-header');
        }
    }
    window.addEventListener('scroll', scrollHeader);

    /*=============== SCROLL REVEAL ANIMATION ===============*/

    const sr = ScrollReveal ({
        distance: '60px',
        duration: 1500, 
        delay: 400,
        reset: false
    })
    
    // ! header
    sr.reveal(`.header__menu, .header__title`, {delay: 1000, interval: 500, origin: 'top'})
    sr.reveal(`.header__logo`, {delay: 1000, interval: 500, origin: 'left'})
    sr.reveal(`.light__mode-container`, {delay: 1000, interval: 500, origin: 'right'})
    sr.reveal(`.header__auxiliary-text, .header__subtitle`, {delay: 500, interval: 500, origin: 'bottom'})
    // ! cybersecurity__section
    sr.reveal(`.cybersecurity__text`, {interval: 400, origin: 'left'})
    sr.reveal(`.cybersecurity__image `, {interval: 400, origin: 'right'})
    // ! narration__section
    sr.reveal(`.narration__title`, {interval: 400, origin: 'top'})
    sr.reveal(`.narration__first`, {interval: 400, origin: 'left'})
    sr.reveal(`.narration__second`, {interval: 400, origin: 'bottom'})
    sr.reveal(`.narration__third`, {interval: 400, origin: 'right'})
    // ! page__section
    // first and third
    sr.reveal(`.page__content`, {interval: 400, origin: 'left'})
    sr.reveal(`.page__image`, {interval: 400, origin: 'right'})
    // second
    sr.reveal(`.phishing__content`, {interval: 400, origin: 'rihgt'})
    sr.reveal(`.phishing__image`, {interval: 400, origin: 'left'})
    // ! conclusion__section
    sr.reveal(`.conclusion__title`, {interval: 400, origin: 'top'})
    sr.reveal(`.conclusion__description`, {interval: 400, origin: 'bottom'})
    // ! footer
    sr.reveal(`.footer__gratitude`, {interval: 400, origin: 'left'})
    sr.reveal(`.footer__resources`, {interval: 400, origin: 'top'})
    sr.reveal(`.footer__additional`, {interval: 400, origin: 'bottom'})

});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.header__menu  a[href*=' + sectionId + ']')
        }else{
            document.querySelector('.header__menu  a[href*=' + sectionId + ']')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ==========  SHOW SCROLL UP ========== // 

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp)