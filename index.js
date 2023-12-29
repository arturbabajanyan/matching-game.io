function reloadThePage() {
    location.reload();
}
const regex = new RegExp('card-back');
let storedTwoCards = [];

let index = 0;
let stopLoop = 20;


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
            if (storedTwoCards.length === 4) {
                setTimeout(checkAnswers, 700);
            }
        } else {
            e.target.src = `./img/card-pictures/card-back.png`;
            storedTwoCards = [];
        }
    })
})

function checkAnswers() {
    console.log(document.querySelectorAll('img')[storedTwoCards[0]]);
    console.log(document.querySelectorAll('img')[storedTwoCards[2]]);
    if (storedTwoCards[1] == storedTwoCards[3]) {
        console.log('You got it');
        document.querySelectorAll('img')[storedTwoCards[0]].style.display='none';
        document.querySelectorAll('img')[storedTwoCards[2]].style.display='none';
    } else {
        console.log('Wrong answer');
        document.querySelectorAll('img')[storedTwoCards[0]].src = `./img/card-pictures/card-back.png`;
        document.querySelectorAll('img')[storedTwoCards[2]].src = `./img/card-pictures/card-back.png`;
    }
    storedTwoCards = [];
    console.log('Done');
}