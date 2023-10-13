const card = document.querySelectorAll('.cell_game');
const front = document.querySelectorAll('.front');



randomImage()
clickCard ()

function randomImage () {  //функция для выпадения рандомных карточек
    card.forEach(i=>{
        const num = [...Array(card.length).keys()];
        const random = Math.floor(Math.random()*card.length);
    
        i.style.order = num [random]
    })
}

function clickCard () { //функция для переворота карточек
    
    for ( let c = 0; c<card.length; c++){
        card[c].addEventListener('click',() => {
            front[c].classList.add('change');
            const changeCard = document.querySelectorAll('.change');
            if(changeCard.length==2) {
                compearImage (changeCard[0],changeCard[1]);
            }
        })
    }
}

function compearImage (cardOne,cardTwo) { //функция для сравнения карточек
    if(cardOne.dataset.index == cardTwo.dataset.index){

        cardOne.classList.remove('change');
        cardTwo.classList.remove('change');

        cardOne.classList.add('same');
        cardTwo.classList.add('same');

    }else{
        setTimeout(() => {
            cardOne.classList.remove('change');
            cardTwo.classList.remove('change');
        },1000)
       
    }
}