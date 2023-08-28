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
    thisSheldr (shelderCount);
}
//счетчик назад
function leftShelder() {
    shelderCount = shelderCount - 1;
    if (shelderCount < 0 ) shelderCount = containerCardsAboutImg.length - 1;
    rollShelder();
    thisSheldr (shelderCount);

}
//передвижение картинки на расстояние 470px
function rollShelder() {
containerCardsAbout.style.transform = `translateX(${-shelderCount*470}px)`;
}


//для работы кнопок внизу, меняет цвет active не прописала в css
function thisSheldr (index) {
    inputcolor.forEach(item => item.classList.remove('active'));
    inputcolor[index].classList.add('active');
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

/*const fadeIn = (el, timeout, display) => {
    el.style.opacity = 0;
    el.style.display = display || 'block';
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
        el.style.opacity = 1;
    }, 10);
};

const fadeOut = (el, timeout) => {
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;

    setTimeout(() => {
        el.style.display = 'none';
    }, timeout);
};

const block = document.querySelector('.page2');
const btn = document.getElementById('Spring');
const blockw = document.querySelector('.page1');
const btnw = document.getElementById('Winter');


let flag = false;


btn.addEventListener('click', (e) => {
    if (!flag) {
        fadeIn(block, 1000, 'flex');
        flag = true;
    } else {
        fadeOut(block, 1000);
        flag = false;
    }
});



btnw.addEventListener('click', (e) => {
    if (!flag) {
        fadeIn(blockw, 1000, 'flex');
        flag = true;
    } else {
        fadeOut(blockw, 1000);
        flag = false;
    }
})
*/

//Favorites section start
function fadeIn(el, timeout) {
    el.style.opacity = 0;
    el.style.display = 'flex';
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
        el.style.opacity = 1;
    }, 3000);
};

function fadeOut(el, timeout){
    el.style.opacity = 1;
     el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;

    setTimeout(() => {
        el.style.display = 'none';
    }, timeout);
};


const blockWinter = document.querySelector('.page1');
const btnWinter = document.getElementById('Winter');
const blockSpring = document.querySelector('.page2');
const btnSpring = document.getElementById('Spring');
const blockSummer = document.querySelector('.page3');
const btnSummer = document.getElementById('Summer');
const blockAutumn = document.querySelector('.page4');
const btnAutumn = document.getElementById('Autumn');


let defaultBlock = true;
//отображение блока по умолчанию
if (defaultBlock){
	fadeIn(blockWinter, 2000);
}


function springFun(){
	fadeOut(blockWinter, 2000);
    fadeOut(blockSummer, 2000);
	fadeOut(blockAutumn, 2000);	
	fadeIn(blockSpring, 3000);
	defaultBlock = false;
}

function winterFun(){
    fadeOut(blockSpring, 2000);
    fadeOut(blockSummer, 2000);
	fadeOut(blockAutumn, 2000);			
	fadeIn(blockWinter, 3000);
    } 
	
function summerFun(){
	fadeOut(blockWinter, 2000);
    fadeOut(blockSpring, 2000);
	fadeOut(blockAutumn, 2000);
	fadeIn(blockSummer, 3000);
	defaultBlock = false;
    } 
	
function autumnFun(){
	fadeOut(blockWinter, 2000);
    fadeOut(blockSpring, 2000);
    fadeOut(blockSummer, 2000);
	fadeIn(blockAutumn, 3000);
	defaultBlock = false;
    } 
	
btnSpring.addEventListener('click', springFun);
btnWinter.addEventListener('click', winterFun);
btnSummer.addEventListener('click', summerFun);
btnAutumn.addEventListener('click', autumnFun);
//Favorites section end



//profil registert start


    const logo = document.querySelector('.logo');
    const profile = document.querySelector('.profile')
   
   /*это вызывает но не исчезает ??
    /*logo.addEventListener('click', function() {
        profile.classList.add('profile_activ');
    });
    /* profile.addEventListener('click', () => {
        profile.classList.remove('profile_noactiv');
    });*/

   /*это вызывает но не исчезает
    /*const toggleProfil = () => {
        profile.classList.add('profile_activ');
    }
    logo.addEventListener('click', e => {
        e.stopPropagation ();
        toggleProfil ();
    });

    /*это только исчезает по другой области кроме нашего дива
    document.addEventListener('click', function(event) {
        let e = document.querySelector('.profile_activ');
        if (!e.contains(event.target)) {e.style.display='none'};
       
      });*/

   
   
      const toggleProfil = () => {
        profile.classList.toggle('profile_activ');
      }
      
      logo.addEventListener('click', e => {
        e.stopPropagation();
      
        toggleProfil();
      });
      
      document.addEventListener('click', e => {
        let target = e.target;
        let its_profile = target == profile || profile.contains(target);
        let its_logo = target == logo;
        let profile_is_active = profile.classList.contains('profile_activ');
        
        if (!its_profile && !its_logo && profile_is_active) {
          toggleProfil();
        }
      })
//profil registert end