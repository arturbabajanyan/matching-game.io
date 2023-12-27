function reloadThePage() {
    location.reload();
}

let index = 0;


let stopLoop = 20;

const cards = ["AH", 'KD', "QS", "AC", "KH", "QC", "AH", 'KD', "QS", "AC", "KH", "QC"];
const shuffledCards = [];
let cardLength = cards.length;

while (cards.length > 0 && stopLoop > 0) {
    let randomList = Math.floor(Math.random() * cardLength);
    shuffledCards.push(cards.splice(randomList, 1)[0]);
    // document.querySelectorAll('img')[index].src = `./img/card-pictures/${cards.splice(randomList, 1)}.png`;
    index++;
    stopLoop--;
    cardLength--;
}

document.querySelectorAll("div.card").forEach((item, index) => { // here
    item.addEventListener('click', e => {
        console.log(e.target)
        // document.body.style.backgroundImage = `url("${background_list[index]}")`
    })
})

// for (let i = 0; i < shuffledCards.length; i++) {
//     console.log(shuffledCards[i]);
//     document.querySelectorAll('img')[i].src = `./img/card-pictures/${shuffledCards[i]}.png`
// }


