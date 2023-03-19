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

renderStartScreen();

// СОЗДАЮ НАЧАЛЬНЫЙ ЭКРАН
function renderStartScreen() {
    app.textContent = '';

    const startScreenContainer = document.createElement('div');
    startScreenContainer.classList.add('startScreenContainer');

    const startScreenBox = document.createElement('div');
    startScreenBox.classList.add('startScreenBox');

    const startScreenTitleBox = document.createElement('div');
    startScreenTitleBox.classList.add('startScreenTitleBox');

    const startScreenTitle = document.createElement('div');
    startScreenTitle.classList.add('startScreenTitle');
    startScreenTitle.textContent = 'Выберите сложность';
    startScreenTitleBox.appendChild(startScreenTitle);

    const difficultyBox = document.createElement('div');
    difficultyBox.classList.add('difficultyBox');

    const difficultyButton1 = document.createElement('button');
    difficultyButton1.classList.add('difficultyItem', 'difficulty1');
    difficultyButton1.textContent = '1';
    const difficultyButton2 = document.createElement('button');
    difficultyButton2.classList.add('difficultyItem', 'difficulty2');
    difficultyButton2.textContent = '2';
    const difficultyButton3 = document.createElement('button');
    difficultyButton3.classList.add('difficultyItem', 'difficulty3');
    difficultyButton3.textContent = '3';

    difficultyButton1.addEventListener('click', function (e) {
        window.application.difficulty = 1;
    });

    difficultyButton2.addEventListener('click', function (e) {
        window.application.difficulty = 2;
    });

    difficultyButton3.addEventListener('click', function (e) {
        window.application.difficulty = 3;
    });

    difficultyBox.appendChild(difficultyButton1);
    difficultyBox.appendChild(difficultyButton2);
    difficultyBox.appendChild(difficultyButton3);

    const startButton = document.createElement('button');
    startButton.classList.add('startButton', 'button');
    startButton.textContent = 'Старт';
    startButton.addEventListener('click', renderGameScreen);

    startScreenContainer.appendChild(startScreenBox);
    startScreenBox.appendChild(startScreenTitleBox);
    startScreenBox.appendChild(difficultyBox);
    startScreenBox.appendChild(startButton);
    app.appendChild(startScreenContainer);
}

const cards = [
    { id: '6C', src: './pictures/cards/6C.jpg' },
    { id: '7C', src: './pictures/cards/7C.jpg' },
    { id: '8C', src: './pictures/cards/8C.jpg' },
    { id: '9C', src: './pictures/cards/9C.jpg' },
    { id: '10C', src: './pictures/cards/10C.jpg' },
    { id: 'JC', src: './pictures/cards/JC.jpg' },
    { id: 'QC', src: './pictures/cards/QC.jpg' },
    { id: 'KC', src: './pictures/cards/KC.jpg' },
    { id: 'AC', src: './pictures/cards/AC.jpg' },

    { id: '6D', src: './pictures/cards/6D.jpg' },
    { id: '7D', src: './pictures/cards/7D.jpg' },
    { id: '8D', src: './pictures/cards/8D.jpg' },
    { id: '9D', src: './pictures/cards/9D.jpg' },
    { id: '10D', src: './pictures/cards/10D.jpg' },
    { id: 'JD', src: './pictures/cards/JD.jpg' },
    { id: 'QD', src: './pictures/cards/QD.jpg' },
    { id: 'KD', src: './pictures/cards/KD.jpg' },
    { id: 'AD', src: './pictures/cards/AD.jpg' },

    { id: '6H', src: './pictures/cards/6H.jpg' },
    { id: '7H', src: './pictures/cards/7H.jpg' },
    { id: '8H', src: './pictures/cards/8H.jpg' },
    { id: '9H', src: './pictures/cards/9H.jpg' },
    { id: '10H', src: './pictures/cards/10H.jpg' },
    { id: 'JH', src: './pictures/cards/JH.jpg' },
    { id: 'QH', src: './pictures/cards/QH.jpg' },
    { id: 'KH', src: './pictures/cards/KH.jpg' },
    { id: 'AH', src: './pictures/cards/AH.jpg' },

    { id: '6S', src: './pictures/cards/6S.jpg' },
    { id: '7S', src: './pictures/cards/7S.jpg' },
    { id: '8S', src: './pictures/cards/8S.jpg' },
    { id: '9S', src: './pictures/cards/9S.jpg' },
    { id: '10S', src: './pictures/cards/10S.jpg' },
    { id: 'JS', src: './pictures/cards/JS.jpg' },
    { id: 'QS', src: './pictures/cards/QS.jpg' },
    { id: 'KS', src: './pictures/cards/KS.jpg' },
    { id: 'AS', src: './pictures/cards/AS.jpg' },
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

    window.application.minutes = minutesBox.textContent;

    const gameTimer = setInterval(function () {
        seconds++;
        if (seconds < 10) {
            secondsBox.textContent = `:0${seconds}`;
            window.application.seconds = secondsBox.textContent;
        } else if (seconds >= 10 && seconds < 59) {
            secondsBox.textContent = `:${seconds}`;
            window.application.seconds = secondsBox.textContent;
        } else if (seconds === 60) {
            minutes++;
            seconds = seconds - 60;
            minutesBox.textContent = `0${minutes}`;
            window.application.minutes = minutesBox.textContent;
            if (minutes >= 10) {
                minutesBox.textContent = minutes;
                window.application.minutes = minutesBox.textContent;
            }
        }
    }, 1000);
}

function renderGameBlock(container) {
    const EasyGameCardPairs = 3;
    const MediumGameCardsPairs = 6;
    const HardGameCardsPairs = 9;
    if (window.application.difficulty === 1) {
        for (let i = 0; i < EasyGameCardPairs; i++) {
            getRandomCard();
        }
    } else if (window.application.difficulty === 2) {
        for (let i = 0; i < MediumGameCardsPairs; i++) {
            getRandomCard();
        }
    } else if (window.application.difficulty === 3) {
        for (let i = 0; i < HardGameCardsPairs; i++) {
            getRandomCard();
        }
    }
    createCardPairs(container);
}

function renderGameScreen() {
    app.textContent = '';

    const gameScreenContainer = document.createElement('div');
    gameScreenContainer.classList.add('gameScreenContainer');

    const gameScreenTopContent = document.createElement('div');
    gameScreenTopContent.classList.add('gameScreenTopContent');

    const replayButton = document.createElement('button');
    replayButton.classList.add('replayButton', 'button');
    replayButton.textContent = 'Начать заново';

    const gameScreenCardsContainer = document.createElement('div');
    gameScreenCardsContainer.classList.add('gameScreenCardsContainer');

    window.application.blocks['timerBlock'] = renderTimerBlock;
    window.application.renderBlock('timerBlock', gameScreenTopContent);

    gameScreenTopContent.appendChild(replayButton);
    gameScreenContainer.appendChild(gameScreenTopContent);
    gameScreenContainer.appendChild(gameScreenCardsContainer);
    app.appendChild(gameScreenContainer);

    window.application.blocks['gameBlock'] = renderGameBlock;
    window.application.renderBlock('gameBlock', gameScreenCardsContainer);

    coverCards();
    uncoverCard();
}

// ПЕРЕВОРАЧИВАЮ КАРТЫ ЧЕРЕЗ 5 СЕКУНД
function coverCards() {
    const cardBoxes = document.querySelectorAll('.cardBox');
    const flipCardsTimer = setTimeout(() => {
        cardBoxes.forEach((cardBox) => {
            cardBox.style.backgroundImage = 'url(./pictures/closed.jpg)';
        });
    }, 5000);
}

// РАСКРЫВАЮ И СВЕРЯЮ КАРТЫ
function uncoverCard() {
    const totalAmountOfCards = [];
    let openedCards = [];
    const cardBoxes = document.querySelectorAll('.cardBox');

    cardBoxes.forEach((cardBox) => {
        cardBox.addEventListener('click', function () {
            let cardName = cardBox.classList;
            cardBox.style.backgroundImage = `url(./pictures/cards/${cardName[1]}.jpg)`;
            openedCards.push(cardName[1]);
            totalAmountOfCards.push(cardName[1]);

            if (openedCards.length === 2) {
                if (openedCards[0] === openedCards[1]) {
                    openedCards = [];
                } else {
                    window.application.gameStatus = 'Вы проиграли!';
                    window.application.modalWindowPicture = './pictures/lose.png';
                    renderEndgameWindow();
                }
            }
            if (totalAmountOfCards.length === cardBoxes.length) {
                window.application.gameStatus = 'Вы выиграли!';
                window.application.modalWindowPicture = './pictures/win.png';
                renderEndgameWindow();
            }
        });
    });
}

// СОЗДАЮ МОДАЛЬНОЕ ОКНО ПОБЕДЫ ИЛИ ПОРАЖЕНИЯ
function renderEndgameWindow() {
    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modal');

    const EndgameWindowContainer = document.createElement('div');
    EndgameWindowContainer.classList.add(
        'EndgameWindowContainer',
        'modalContent'
    );

    const EndgamePictureBox = document.createElement('div');
    EndgamePictureBox.classList.add('EndgamePictureBox');
    const EndgamePicture = document.createElement('img');
    EndgamePicture.classList.add('EndgamePicture');
    EndgamePicture.setAttribute('src', window.application.modalWindowPicture);
    EndgamePictureBox.appendChild(EndgamePicture);

    const EndgameHeadingBox = document.createElement('div');
    EndgameHeadingBox.classList.add('EndgameHeadingBox');
    const EndgameHeading = document.createElement('h1');
    EndgameHeading.classList.add('EndgameHeading');

    EndgameHeading.textContent = window.application.gameStatus;
    EndgameHeadingBox.appendChild(EndgameHeading);

    const totalTimeBox = document.createElement('div');
    totalTimeBox.classList.add('totalTimeBox');

    const totalTimeHeading = document.createElement('h2');
    totalTimeHeading.classList.add('totalTimeHeading');
    totalTimeHeading.textContent = 'Затраченное время:';

    const totalTime = document.createElement('h3');
    totalTime.classList.add('totalTime');

    totalTime.textContent =
        `${window.application.minutes}` + `${window.application.seconds}`;

    totalTimeBox.appendChild(totalTimeHeading);
    totalTimeBox.appendChild(totalTime);

    const playAgainButton = document.createElement('button');
    playAgainButton.classList.add('playAgainButton', 'button');
    playAgainButton.textContent = 'Играть снова';
    playAgainButton.addEventListener('click', renderStartScreen);

    EndgameWindowContainer.appendChild(EndgamePictureBox);
    EndgameWindowContainer.appendChild(EndgameHeadingBox);
    EndgameWindowContainer.appendChild(totalTimeBox);
    EndgameWindowContainer.appendChild(playAgainButton);
    modalWindow.appendChild(EndgameWindowContainer);
    app.appendChild(modalWindow);

    modalWindow.style.display = 'block';
}
