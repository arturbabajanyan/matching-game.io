const cardSuits = ['H', 'D', 'S', 'C'];
const cardNumber = ['A', 'K', 'Q', 'J', '0', '9', '8', '7', '6', '5', '4', '3', '2']
const deck = [];
const randomSixCards = []
let x = 0;

for (let i = 0; i < cardSuits.length; i++) {
    for (let j = 0; j < cardNumber.length; j++) {
        deck.push(cardNumber[j] + cardSuits[i]);
    }
}

while (randomSixCards.length < 6) {
    let randomCard = deck[Math.floor(Math.random() * deck.length)];
    if (!randomSixCards.includes(randomCard)) {
        randomSixCards.push(randomCard);
    }
}