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
    { id: '6C', src: './cards/clubs/6_C.jpg' },
    { id: '7C', src: './cards/clubs/7_C.jpg' },
    { id: '8C', src: './cards/clubs/8_C.jpg' },
    { id: '9C', src: './cards/clubs/9_C.jpg' },
    { id: '10C', src: './cards/clubs/10_C.jpg' },
    { id: 'JC', src: './cards/clubs/J_C.jpg' },
    { id: 'QC', src: './cards/clubs/Q_C.jpg' },
    { id: 'KC', src: './cards/clubs/K_C.jpg' },
    { id: 'AC', src: './cards/clubs/A_C.jpg' },

    { id: '6D', src: './cards/diamonds/6_D.jpg' },
    { id: '7D', src: './cards/diamonds/7_D.jpg' },
    { id: '8D', src: './cards/diamonds/8_D.jpg' },
    { id: '9D', src: './cards/diamonds/9_D.jpg' },
    { id: '10D', src: './cards/diamonds/10_D.jpg' },
    { id: 'JD', src: './cards/diamonds/J_D.jpg' },
    { id: 'QD', src: './cards/diamonds/Q_D.jpg' },
    { id: 'KD', src: './cards/diamonds/K_D.jpg' },
    { id: 'AD', src: './cards/diamonds/A_D.jpg' },

    { id: '6H', src: './cards/hearts/6_H.jpg' },
    { id: '7H', src: './cards/hearts/7_H.jpg' },
    { id: '8H', src: './cards/hearts/8_H.jpg' },
    { id: '9H', src: './cards/hearts/9_H.jpg' },
    { id: '10H', src: './cards/hearts/10_H.jpg' },
    { id: 'JH', src: './cards/hearts/J_H.jpg' },
    { id: 'QH', src: './cards/hearts/Q_H.jpg' },
    { id: 'KH', src: './cards/hearts/K_H.jpg' },
    { id: 'AH', src: './cards/hearts/A_H.jpg' },

    { id: '6S', src: './cards/spades/6_S.jpg' },
    { id: '7S', src: './cards/spades/7_S.jpg' },
    { id: '8S', src: './cards/spades/8_S.jpg' },
    { id: '9S', src: './cards/spades/9_S.jpg' },
    { id: '10S', src: './cards/spades/10_S.jpg' },
    { id: 'JS', src: './cards/spades/J_S.jpg' },
    { id: 'QS', src: './cards/spades/Q_S.jpg' },
    { id: 'KS', src: './cards/spades/K_S.jpg' },
    { id: 'AS', src: './cards/spades/A_S.jpg' },
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
        cardBox.classList.add('cardBox', 'flippedCard');
        // cardBox.classList.add('cardBox');
        const card = document.createElement('img');
        card.classList.add('card');
        card.setAttribute('src', shuffledCards[i].src);
        card.classList.add(shuffledCards[i].id);

        cardBox.appendChild(card);
        container.appendChild(cardBox);
    }
}

const gameScreenCardsContainer = document.createElement('div');
gameScreenCardsContainer.classList.add('gameScreenCardsContainer');

// вывести создание всех элементов игрового экрана в отдельную  функцию
// (чтобы код не повторялся)
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

    const cards = document.querySelectorAll('.card');
    const cardBoxes = document.querySelectorAll('.cardBox');

    const flipCardsTimer = setInterval(function () {
        // const cards = document.querySelectorAll('.card');
        cards.forEach((card) => {
            card.classList.add('hidden');
        });
    }, 5000);
}

//              УДАЛЯЕТ КЛАСС "HIDDEN" У ВСЕХ КАРТ, А НЕ У ОДНОЙ
function compareCards() {
    const cardBoxes = document.querySelectorAll('.cardBox');
    for (let i = 0; i < cardBoxes.length; i++) {
        cardBoxes[i].addEventListener('click', function () {
            const cards = document.querySelectorAll('.card');
            for (let i = 0; i < cards.length; i++) {
                cards[i].classList.remove('hidden');
            }
        });
    }
}
//              УДАЛЯЕТ КЛАСС "HIDDEN" У ВСЕХ КАРТ, А НЕ У ОДНОЙ (только используется forEach)
function compareCards2() {
    const cardBoxes = document.querySelectorAll('.cardBox');
    cardBoxes.forEach((box) => {
        box.addEventListener('click', function () {
            const cards = document.querySelectorAll('.card');
            cards.forEach((card) => {
                card.classList.remove('hidden');
            });
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
