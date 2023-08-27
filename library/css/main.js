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

//бургер end

//about section start
const containerCardsAboutImg = document.querySelectorAll('.container_cards_about_img');
const containerCardsAbout = document.querySelector('.container_cards_about');
const shelder = document.querySelector('.shelder');
const inputcolor = document.querySelectorAll('.inputcolor');
const carretLeft = document.querySelector('.carret_left');
const carretRight = document.querySelector('.carret_right');

let shelderCount = 0;  //счетчик
let shelderWidth;

// при нажатии кнопок перелистывается
carretLeft.addEventListener('click', leftShelder);
carretRight.addEventListener('click', rightShelder);

//счетчик вперед
function rightShelder() {
    shelderCount = shelderCount + 1;
    if (shelderCount >= containerCardsAboutImg.length) shelderCount = 0;
    rollShelder();
}
//счетчик назад
function leftShelder() {
    shelderCount = shelderCount - 1;
    if (shelderCount < 0 ) shelderCount = containerCardsAboutImg.length - 1;
    rollShelder();

}
//передвижение картинки на расстояние 470px
function rollShelder() {
containerCardsAbout.style.transform = `translateX(${-shelderCount*470}px)`;
}


//для работы кнопок внизу, меняет цвет
function thisSheldr (index) {
    inputcolor.forEach(item => item.classList.remove('input[type="radio"]checked'));
    inputcolor[index].classList.add('input[type="radio"]checked');
}
//для работы кнопок внизу, запускает следующую картинку
inputcolor.forEach((input, index) => {
    input.addEventListener('click', () => {
        shelderCount = index;
        rollShelder();
        thisSheldr(shelderCount);
    })
})
//about section end



//Favorites section start