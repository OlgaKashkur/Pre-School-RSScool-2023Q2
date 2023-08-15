//бургер
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav_close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });
}());

document.querySelectorAll('.navinfo').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.header_nav').classList.remove('header_nav_active');
        document.querySelector('.header_burger').classList.remove('header_nav_active');
        document.body.classList.remove('lock');
    })
})