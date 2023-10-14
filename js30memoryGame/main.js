const card = document.querySelectorAll('.cell_game');
const front = document.querySelectorAll('.front');
const container = document.querySelector('.container_game');
let score = document.querySelector('.score_game span');
const timerContainer = document.querySelector(".time");
const restartButton = document.querySelector("#restart");


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


        front[c].classList.add('show');

        setInterval(()=>{ //функция показывает цвет карточки при перезагрузе старницы 
            front[c].classList.remove('show');
        },3000)

         
        card[c].addEventListener('click',() => {
            front[c].classList.add('change');
            const changeCard = document.querySelectorAll('.change');
            if(changeCard.length==2) {
                container.style.pointerEvents = "none";
                setInterval(() =>{
                    container.style.pointerEvents = "all";
                }, 1000);
                compearImage (changeCard[0],changeCard[1]);
            }
        })
    }
}

function compearImage (cardOne,cardTwo) { //функция для сравнения карточек
    if(cardOne.dataset.index == cardTwo.dataset.index){

        score.innerHTML = parseInt(score.innerHTML) + 1;//суммирование ходов верных
        
        cardOne.classList.remove('change');
        cardTwo.classList.remove('change');

        cardOne.classList.add('same');
        cardTwo.classList.add('same');

    }else{
        setTimeout(() => {
            score.innerHTML = parseInt(score.innerHTML) + 1;//суммирование ходов неверных
            cardOne.classList.remove('change');
            cardTwo.classList.remove('change');
        },1000)
       
    }
}


