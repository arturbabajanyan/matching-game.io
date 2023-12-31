function reloadThePage() {
    location.reload();
}
const regex = new RegExp('card-back');
let storedTwoCards = [];

let index = 0;
let stopLoop = 20;
let timer;
let blankCard = `./img/card-pictures/card-back.png`;


const cards = ["AH", 'KD', "QS", "AC", "KH", "QC", "AH", 'KD', "QS", "AC", "KH", "QC"];
const shuffledCards = [];
let cardLength = cards.length;


while (cards.length > 0 && stopLoop > 0) {
    let randomList = Math.floor(Math.random() * cardLength);
    shuffledCards.push(cards.splice(randomList, 1)[0]);
    index++;
    stopLoop--;
    cardLength--;
}


document.querySelectorAll("div.card").forEach((item, index) => {
    item.addEventListener('click', e => {

        if (regex.test(e.target.src)) {
            e.target.src = `./img/card-pictures/${shuffledCards[index]}.png`;
            storedTwoCards.push(index, shuffledCards[index]);

            console.log(storedTwoCards);

            if (storedTwoCards.length === 4) {
                document.querySelector('.card-container').style.zIndex = '-2';
                timer = setTimeout(checkAnswers, 700);
            } else if (storedTwoCards.length > 6) {
                clearTimeout(timer);
                for (let i = 0; i < document.querySelectorAll('img').length; i++) {
                    document.querySelectorAll('img')[i].src = blankCard;
                }
                storedTwoCards = [];
            }

        } else {
            e.target.src = blankCard;
            if(storedTwoCards.length === 4) {
                clearTimeout(timer);
                if (storedTwoCards[1] == storedTwoCards[3]) {
                    checkAnswers();
                } else {
                    for (let i = 0; i < document.querySelectorAll('img').length; i++) {
                        document.querySelectorAll('img')[i].src = blankCard;
                    }
                }
            }
            storedTwoCards = [];
        }
    })
})

function checkAnswers() {
    document.querySelector('.card-container').style.zIndex = '2';
    if (storedTwoCards[1] == storedTwoCards[3]) {
        document.querySelectorAll('img')[storedTwoCards[0]].style.display = 'none';
        document.querySelectorAll('img')[storedTwoCards[2]].style.display = 'none';
    } else {
        document.querySelectorAll('img')[storedTwoCards[0]].src = blankCard;
        document.querySelectorAll('img')[storedTwoCards[2]].src = blankCard;
    }

    for (let i = 0; i < 4; i++) {
        storedTwoCards.shift();
    }
    // storedTwoCards = [];
    // console.log(storedTwoCards);
    // console.log('Done');
}