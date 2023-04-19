const cards = [
    { id: '6C', src: './src/pictures/cards/6C.jpg' },
    { id: '7C', src: './src/pictures/cards/7C.jpg' },
    { id: '8C', src: './src/pictures/cards/8C.jpg' },
    { id: '9C', src: './src/pictures/cards/9C.jpg' },
    { id: '10C', src: './src/pictures/cards/10C.jpg' },
    { id: 'JC', src: './src/pictures/cards/JC.jpg' },
    { id: 'QC', src: './src/pictures/cards/QC.jpg' },
    { id: 'KC', src: './src/pictures/cards/KC.jpg' },
    { id: 'AC', src: './src/pictures/cards/AC.jpg' },

    { id: '6D', src: './src/pictures/cards/6D.jpg' },
    { id: '7D', src: './src/pictures/cards/7D.jpg' },
    { id: '8D', src: './src/pictures/cards/8D.jpg' },
    { id: '9D', src: './src/pictures/cards/9D.jpg' },
    { id: '10D', src: './src/pictures/cards/10D.jpg' },
    { id: 'JD', src: './src/pictures/cards/JD.jpg' },
    { id: 'QD', src: './src/pictures/cards/QD.jpg' },
    { id: 'KD', src: './src/pictures/cards/KD.jpg' },
    { id: 'AD', src: './src/pictures/cards/AD.jpg' },

    { id: '6H', src: './src/pictures/cards/6H.jpg' },
    { id: '7H', src: './src/pictures/cards/7H.jpg' },
    { id: '8H', src: './src/pictures/cards/8H.jpg' },
    { id: '9H', src: './src/pictures/cards/9H.jpg' },
    { id: '10H', src: './src/pictures/cards/10H.jpg' },
    { id: 'JH', src: './src/pictures/cards/JH.jpg' },
    { id: 'QH', src: './src/pictures/cards/QH.jpg' },
    { id: 'KH', src: './src/pictures/cards/KH.jpg' },
    { id: 'AH', src: './src/pictures/cards/AH.jpg' },

    { id: '6S', src: './src/pictures/cards/6S.jpg' },
    { id: '7S', src: './src/pictures/cards/7S.jpg' },
    { id: '8S', src: './src/pictures/cards/8S.jpg' },
    { id: '9S', src: './src/pictures/cards/9S.jpg' },
    { id: '10S', src: './src/pictures/cards/10S.jpg' },
    { id: 'JS', src: './src/pictures/cards/JS.jpg' },
    { id: 'QS', src: './src/pictures/cards/QS.jpg' },
    { id: 'KS', src: './src/pictures/cards/KS.jpg' },
    { id: 'AS', src: './src/pictures/cards/AS.jpg' },
];

export function getRandomCard(): void {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    if (!window.application.randomCards.includes(randomCard)) {
        window.application.randomCards.push(randomCard);
    } else {
        getRandomCard();
    }
}


export function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}