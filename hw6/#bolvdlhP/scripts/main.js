const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const deckCards = [];

for (const suit of suits) {
    for (const value of values) {
        let color = (suit === 'heart' || suit === 'diamond') ? 'red' : 'black';
        deckCards.push({
            cardSuit: suit,
            value: value,
            color: color,
        })
    }
}
console.log(deckCards);
console.log(deckCards.find(value => value.cardSuit === 'spade' && value.value === 'ace'));
console.log(deckCards.filter(value => value.value === '6'));
console.log(deckCards.filter(value => value.color === 'red'));
console.log(deckCards.filter(value => value.cardSuit === 'diamond'));
console.log(deckCards.filter(value => value.cardSuit === 'clubs' && (['9', '10', 'jack', 'queen', 'king', 'ace'].includes(value.value))));