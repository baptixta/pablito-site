const headerNav = document.querySelector('.header__nav');
const navButton = document.querySelector('.header__button');
const navButtonIcon = document.querySelector('.header__button-icon');

navButton.addEventListener('click', () => {
    headerNav.classList.toggle('show-menu-mobile')

    navButtonIcon.classList.toggle('header__button-icon-exit')
})



