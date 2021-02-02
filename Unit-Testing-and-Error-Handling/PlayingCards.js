function printDeckOfCards(cards) {
    function createCard(input) {
        let suit;
        let face;

        if (input.length == 2) {
            suit = input[0];
            face = input[1];
        } else if (input.length == 3) {
            suit = input.slice(0, 2);
            face = input[2];
        }

        const suits = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        const faces = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',

        }

        if (suits.includes(suit) == false || Object.keys(faces).includes(face) == false) {
            throw new TypeError(`${suit}${face}`);
        }

        return {
            face,
            suit,
            toString: () => {
                return `${suit}${faces[face]}`;
            }
        }
    }
    let result = [];
    try {
        for (const card of cards) {
            let currentCard = createCard(card);
            result.push(currentCard.toString());
        }
        console.log(result.join(' '));
    }catch (ex) {
        console.log(`Invalid card: ${ex.message}`)
    }
}
printDeckOfCards(['5S', '3D', 'QD', '1C'])

//const obj = solve('J', 'D');

//console.log(obj.toString());
