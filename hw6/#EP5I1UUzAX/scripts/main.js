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

const deck = deckCards.reduce((acc, card) => {
    switch (card.cardSuit) {
        case 'spade':
            acc.spades.push(card);
            break;
            case 'diamond':
                acc.diamonds.push(card);
                break;
                case 'clubs':
                    acc.clubs.push(card);
                    break;
                    case 'heart':
                        acc.hearts.push(card);
                        break;
    }
    return acc;
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});
console.log(deck);