const app = document.querySelector('.app');

window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        if (window.application.screens[screenName]) {
            window.application.screens[screenName]();
        } else {
            console.log(
                'НЕ СУЩЕСТВУЕТ ТАКОГО ПОЛЯ В window.application.screens'
            );
        }
    },
    renderBlock: function (blockName, container) {
        if (window.application.blocks[blockName]) {
            window.application.blocks[blockName](container);
        } else {
            console.log(
                'НЕ СУЩЕСТВУЕТ ТАКОГО ПОЛЯ В window.application.blocks'
            );
        }
    },
};

const cards = [
    { id: '6C', src: './cards/6C.jpg' },
    { id: '7C', src: './cards/7C.jpg' },
    { id: '8C', src: './cards/8C.jpg' },
    { id: '9C', src: './cards/9C.jpg' },
    { id: '10C', src: './cards/10C.jpg' },
    { id: 'JC', src: './cards/JC.jpg' },
    { id: 'QC', src: './cards/QC.jpg' },
    { id: 'KC', src: './cards/KC.jpg' },
    { id: 'AC', src: './cards/AC.jpg' },

    { id: '6D', src: './cards/6D.jpg' },
    { id: '7D', src: './cards/7D.jpg' },
    { id: '8D', src: './cards/8D.jpg' },
    { id: '9D', src: './cards/9D.jpg' },
    { id: '10D', src: './cards/10D.jpg' },
    { id: 'JD', src: './cards/JD.jpg' },
    { id: 'QD', src: './cards/QD.jpg' },
    { id: 'KD', src: './cards/KD.jpg' },
    { id: 'AD', src: './cards/AD.jpg' },

    { id: '6H', src: './cards/6H.jpg' },
    { id: '7H', src: './cards/7H.jpg' },
    { id: '8H', src: './cards/8H.jpg' },
    { id: '9H', src: './cards/9H.jpg' },
    { id: '10H', src: './cards/10H.jpg' },
    { id: 'JH', src: './cards/JH.jpg' },
    { id: 'QH', src: './cards/QH.jpg' },
    { id: 'KH', src: './cards/KH.jpg' },
    { id: 'AH', src: './cards/AH.jpg' },

    { id: '6S', src: './cards/6S.jpg' },
    { id: '7S', src: './cards/7S.jpg' },
    { id: '8S', src: './cards/8S.jpg' },
    { id: '9S', src: './cards/9S.jpg' },
    { id: '10S', src: './cards/10S.jpg' },
    { id: 'JS', src: './cards/JS.jpg' },
    { id: 'QS', src: './cards/QS.jpg' },
    { id: 'KS', src: './cards/KS.jpg' },
    { id: 'AS', src: './cards/AS.jpg' },
];

// ПОЛУЧАЮ РАНДОМНУЮ КАРТУ ИЗ МАССИВА КАРТ
const randomCards = [];
function getRandomCard() {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    if (!randomCards.includes(randomCard)) {
        randomCards.push(randomCard);
    } else {
        getRandomCard();
    }
}

// ПЕРЕМЕШАТЬ ЭЛЕМЕНТЫ МАССИВА
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// СОЗДАЮ ПАРЫ КАРТ И ПЕРЕМЕШИВАЮ ИХ
function createCardPairs(container) {
    const cardPairs = randomCards.concat(randomCards);
    const shuffledCards = shuffleArray(cardPairs);

    for (let i = 0; i < shuffledCards.length; i++) {
        const cardBox = document.createElement('div');
        cardBox.classList.add('cardBox');
        cardBox.style.backgroundImage = `url(${shuffledCards[i].src})`;
        cardBox.classList.add(shuffledCards[i].id);

        container.appendChild(cardBox);
    }
}

const gameScreenCardsContainer = document.createElement('div');
gameScreenCardsContainer.classList.add('gameScreenCardsContainer');

function renderGameScreen() {}

// СОЗДАЮ СЕКУНДОМЕР
function renderTimerBlock(container) {
    const secondsBox = document.createElement('p');
    secondsBox.classList.add('secondsBox', 'timer');
    secondsBox.textContent = ':00';
    const minutesBox = document.createElement('p');
    minutesBox.classList.add('minutesBox', 'timer');
    minutesBox.textContent = '00';
    const timerBlock = document.createElement('div');
    timerBlock.classList.add('timerBlock');
    timerBlock.appendChild(minutesBox);
    timerBlock.appendChild(secondsBox);
    container.appendChild(timerBlock);

    let seconds = 0;
    let minutes = 0;

    const gameTimer = setInterval(function () {
        seconds++;
        if (seconds < 10) {
            secondsBox.textContent = `:0${seconds}`;
        } else if (seconds >= 10 && seconds < 59) {
            secondsBox.textContent = `:${seconds}`;
        } else if (seconds === 60) {
            minutes++;
            seconds = seconds - 60;
            minutesBox.textContent = `0${minutes}`;
            if (minutes >= 10) {
                minutesBox.textContent = minutes;
            }
        }
    }, 1000);
}

function renderEasyGameBlock(container) {
    for (let i = 0; i < 3; i++) {
        getRandomCard();
    }
    createCardPairs(container);
}

function renderEasyGameScreen() {
    app.textContent = '';

    const gameScreenContainer = document.createElement('div');
    gameScreenContainer.classList.add('gameScreenContainer');

    const gameScreenTopContent = document.createElement('div');
    gameScreenTopContent.classList.add('gameScreenTopContent');

    const replayButton = document.createElement('button');
    replayButton.classList.add('replayButton');
    replayButton.textContent = 'Начать заново';

    const gameScreenCardsContainer = document.createElement('div');
    gameScreenCardsContainer.classList.add('gameScreenCardsContainer');

    window.application.blocks['timerBlock'] = renderTimerBlock;
    window.application.renderBlock('timerBlock', gameScreenTopContent);

    gameScreenTopContent.appendChild(replayButton);
    gameScreenContainer.appendChild(gameScreenTopContent);
    gameScreenContainer.appendChild(gameScreenCardsContainer);
    app.appendChild(gameScreenContainer);

    window.application.blocks['easyGame'] = renderEasyGameBlock;
    window.application.renderBlock('easyGame', gameScreenCardsContainer);

    coverCards();
    uncoverCard();
}

function coverCards() {
    const cardBoxes = document.querySelectorAll('.cardBox');
    const flipCardsTimer = setTimeout(() => {
        cardBoxes.forEach((cardBox) => {
            cardBox.style.backgroundImage = 'url(./closed.jpg)';
        });
    }, 5000);
}

function uncoverCard() {
    const totalAmountOfCards = [];
    let openedCards = [];
    const cardBoxes = document.querySelectorAll('.cardBox');
    cardBoxes.forEach((cardBox) => {
        cardBox.addEventListener('click', function () {
            let cardName = cardBox.classList;
            cardBox.style.backgroundImage = `url(./cards/${cardName[1]}.jpg)`;
            openedCards.push(cardName[1]);
            totalAmountOfCards.push(cardName[1]);

            if (openedCards.length === 2) {
                if (openedCards[0] === openedCards[1]) {
                    openedCards = [];
                } else {
                    alert('ВЫ ПРОИГРАЛИ');
                }
            }
            if (totalAmountOfCards.length === cardBoxes.length) {
                alert('ВЫ ВЫИГРАЛИ');
            }
            console.log(openedCards);
        });
    });
}

function renderMediumGameBlock(container) {
    for (let i = 0; i < 6; i++) {
        getRandomCard();
    }
    createCardPairs(container);
}

function renderMediumGameScreen() {
    app.textContent = '';

    const gameScreenContainer = document.createElement('div');
    gameScreenContainer.classList.add('gameScreenContainer');

    const gameScreenTopContent = document.createElement('div');
    gameScreenTopContent.classList.add('gameScreenTopContent');

    const replayButton = document.createElement('button');
    replayButton.classList.add('replayButton');
    replayButton.textContent = 'Начать заново';

    const gameScreenCardsContainer = document.createElement('div');
    gameScreenCardsContainer.classList.add('mediumGameScreenCardsContainer');

    window.application.blocks['timerBlock'] = renderTimerBlock;
    window.application.renderBlock('timerBlock', gameScreenTopContent);

    gameScreenTopContent.appendChild(replayButton);
    gameScreenContainer.appendChild(gameScreenTopContent);
    gameScreenContainer.appendChild(gameScreenCardsContainer);
    app.appendChild(gameScreenContainer);

    window.application.blocks['mediumGame'] = renderMediumGameBlock;
    window.application.renderBlock('mediumGame', gameScreenCardsContainer);

    coverCards();
    uncoverCard();
}

function renderHardGameBlock(container) {
    for (let i = 0; i < 9; i++) {
        getRandomCard();
    }
    createCardPairs(container);
}

function renderHardGameScreen() {
    app.textContent = '';

    const gameScreenContainer = document.createElement('div');
    gameScreenContainer.classList.add('gameScreenContainer');

    const gameScreenTopContent = document.createElement('div');
    gameScreenTopContent.classList.add('gameScreenTopContent');

    const replayButton = document.createElement('button');
    replayButton.classList.add('replayButton');
    replayButton.textContent = 'Начать заново';

    const gameScreenCardsContainer = document.createElement('div');
    gameScreenCardsContainer.classList.add('gameScreenCardsContainer');

    window.application.blocks['timerBlock'] = renderTimerBlock;
    window.application.renderBlock('timerBlock', gameScreenTopContent);

    gameScreenTopContent.appendChild(replayButton);
    gameScreenContainer.appendChild(gameScreenTopContent);
    gameScreenContainer.appendChild(gameScreenCardsContainer);
    app.appendChild(gameScreenContainer);

    window.application.blocks['hardGame'] = renderHardGameBlock;
    window.application.renderBlock('hardGame', gameScreenCardsContainer);

    coverCards();
    uncoverCard();
}

const difficulty1 = document.querySelector('.difficulty1');
const difficulty2 = document.querySelector('.difficulty2');
const difficulty3 = document.querySelector('.difficulty3');

difficulty1.addEventListener('click', function (e) {
    window.application.difficulty = 1;
});

difficulty2.addEventListener('click', function (e) {
    window.application.difficulty = 2;
});

difficulty3.addEventListener('click', function (e) {
    window.application.difficulty = 3;
});

const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', function (e) {
    if (window.application.difficulty === 1) {
        window.application.screens['easyGameScreen'] = renderEasyGameScreen;
        window.application.renderScreen('easyGameScreen');
    } else if (window.application.difficulty === 2) {
        window.application.screens['mediumGameScreen'] = renderMediumGameScreen;
        window.application.renderScreen('mediumGameScreen');
    } else if (window.application.difficulty === 3) {
        window.application.screens['hardGameScreen'] = renderHardGameScreen;
        window.application.renderScreen('hardGameScreen');
    }
});
