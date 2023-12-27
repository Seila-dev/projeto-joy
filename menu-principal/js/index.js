// FAQ SECTION (Perguntas frequentes)

const accordion = document.querySelectorAll(".question-item");

accordion.forEach((item) => {
    item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        accordion.forEach((item) => {
            item.classList.remove('active');
        })
        if(isActive === false){
            item.classList.add('active');
        }else{
            item.classList.remove('active');
        }
    })
})

// Burguer section
const menuMobileIcon = document.querySelectorAll('.menu-mobile-icon');

menuMobileIcon.forEach(item => {
    item.addEventListener('click', () => {
     let menuMobile = document.querySelector('.menu-mobile');
     if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
    }else{
        menuMobile.classList.add('open')
    }
    })
})