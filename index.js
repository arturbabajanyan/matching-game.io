function reloadThePage() {
    location.reload();
}
const regex = new RegExp('card-back');
const storeTwoCards = {};

let index = 0;
let stopLoop = 20;
let startGame = false;


const cards = ["AH", 'KD', "QS", "AC", "KH", "QC", "AH", 'KD', "QS", "AC", "KH", "QC"];
const shuffledCards = [];
let cardLength = cards.length;


// document.querySelector('button.start-game').addEventListener('click', function() {
    startGame = true;
    while (cards.length > 0 && stopLoop > 0) {
        let randomList = Math.floor(Math.random() * cardLength);
        shuffledCards.push(cards.splice(randomList, 1)[0]);
        index++;
        stopLoop--;
        cardLength--;
    }
// })


document.querySelectorAll("div.card").forEach((item, index) => {
    item.addEventListener('click', e => {
        // if (!startGame) {
        //     alert("Press start to begin playing");
        // } else {
            if (regex.test(e.target.src)) {
                e.target.src = `./img/card-pictures/${shuffledCards[index]}.png`;
            } else {
                console.log(e.target.src)
                e.target.src = `./img/card-pictures/card-back.png`;
            }
        // }
    })
})

// for (let i = 0; i < shuffledCards.length; i++) {
//     console.log(shuffledCards[i]);
//     document.querySelectorAll('img')[i].src = `./img/card-pictures/${shuffledCards[i]}.png`
// }


