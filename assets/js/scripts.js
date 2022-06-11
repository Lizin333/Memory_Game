const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondeCard;
let lockBoard = false;


function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip')
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;

        return
    }
    secondeCard = this;
    hasFlippedCard = false;
    checkForMatch();
}


function checkForMatch(){
    if(firstCard.dataset.card === secondeCard.dataset.card){
        disableCards();
        return;
    }
    unflipCard();  
}


function disableCards(){
        firstCard.removeEventListener('click', flipCard)
        firstCard.removeEventListener('click', flipCard)

        resetBoard();
}


function unflipCard(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondeCard.classList.remove('flip')

       resetBoard() 
    }, 1500);
    
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondeCard] = [null, null];
}

(function embaralhar(){
    cards.forEach((card) =>{
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;

    })
})();


cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});