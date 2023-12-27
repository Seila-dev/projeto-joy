//dark-mode section
const trocarBackground = document.querySelectorAll('.dark-mode-btn');
const body = document.body;

trocarBackground.forEach(item => {
    item.addEventListener('click', () => {
        const darkMode = document.querySelector('.dark-mode');
        if(darkMode){
            // trocarBackground.classList.remove('dark-mode'); 
            body.classList.remove('dark-mode');
        }else{
            // trocarBackground.classList.add('dark-mode');
            body.classList.add('dark-mode')
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