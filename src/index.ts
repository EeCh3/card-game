import './fonts and style/style.css';
import C6 from './pictures/cards/6C.jpg';
import C7 from './pictures/cards/7C.jpg';
import C8 from './pictures/cards/8C.jpg';
import C9 from './pictures/cards/9C.jpg';
import C10 from './pictures/cards/10C.jpg';
import CJ from './pictures/cards/JC.jpg';
import CQ from './pictures/cards/QC.jpg';
import CK from './pictures/cards/KC.jpg';
import CA from './pictures/cards/AC.jpg';

import D6 from './pictures/cards/6D.jpg';
import D7 from './pictures/cards/7D.jpg';
import D8 from './pictures/cards/8D.jpg';
import D9 from './pictures/cards/9D.jpg';
import D10 from './pictures/cards/10D.jpg';
import DJ from './pictures/cards/JD.jpg';
import DQ from './pictures/cards/QD.jpg';
import DK from './pictures/cards/KD.jpg';
import DA from './pictures/cards/AD.jpg';

import H6 from './pictures/cards/6H.jpg';
import H7 from './pictures/cards/7H.jpg';
import H8 from './pictures/cards/8H.jpg';
import H9 from './pictures/cards/9H.jpg';
import H10 from './pictures/cards/10H.jpg';
import HJ from './pictures/cards/JH.jpg';
import HQ from './pictures/cards/QH.jpg';
import HK from './pictures/cards/KH.jpg';
import HA from './pictures/cards/AH.jpg';

import S6 from './pictures/cards/6S.jpg';
import S7 from './pictures/cards/7S.jpg';
import S8 from './pictures/cards/8S.jpg';
import S9 from './pictures/cards/9S.jpg';
import S10 from './pictures/cards/10S.jpg';
import SJ from './pictures/cards/JS.jpg';
import SQ from './pictures/cards/QS.jpg';
import SK from './pictures/cards/KS.jpg';
import SA from './pictures/cards/AS.jpg';

import flipped from './pictures/closed.jpg'

const app = document.querySelector('.app');
declare global {
    interface Window {
        application: {
            blocks: {
                [key: string]: (container: HTMLElement) => void;
            };
            screens: {
                [key: string]: () => void;
            };
            renderScreen: (screenName: string) => void;
            renderBlock: (blockName: string, container: HTMLElement) => void;
            randomCards: [
                {
                    id: string;
                    src: string;
                }
            ];
            difficulty: number;
            gameStatus: string;
            modalWindowPicture: string;
        };
    }
}
window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName: string) {
        this.screens[screenName]();
    },
    renderBlock: function (blockName: string, container: HTMLElement) {
        this.blocks[blockName](container);
    },
    randomCards: [
        {
            id: '',
            src: '',
        },
    ],
    difficulty: 0,
    gameStatus: '',
    modalWindowPicture: '',
};

renderStartScreen();

// СОЗДАЮ НАЧАЛЬНЫЙ ЭКРАН
function renderStartScreen() {
    const app = document.querySelector('.app') as Element;
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

    difficultyButton1.addEventListener('click', function () {
        window.application.difficulty = 1;
    });

    difficultyButton2.addEventListener('click', function () {
        window.application.difficulty = 2;
    });

    difficultyButton3.addEventListener('click', function () {
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
    { id: '6C', src: C6 },
    { id: '7C', src: C7 },
    { id: '8C', src: C8 },
    { id: '9C', src: C9 },
    { id: '10C', src: C10 },
    { id: 'JC', src: CJ },
    { id: 'QC', src: CQ },
    { id: 'KC', src: CK },
    { id: 'AC', src: CA },

    { id: '6D', src: D6 },
    { id: '7D', src: D7 },
    { id: '8D', src: D8 },
    { id: '9D', src: D9 },
    { id: '10D', src: D10 },
    { id: 'JD', src: DJ },
    { id: 'QD', src: DQ },
    { id: 'KD', src: DK },
    { id: 'AD', src: DA },

    { id: '6H', src: H6 },
    { id: '7H', src: H7 },
    { id: '8H', src: H8 },
    { id: '9H', src: H9 },
    { id: '10H', src: H10 },
    { id: 'JH', src: HJ },
    { id: 'QH', src: HQ },
    { id: 'KH', src: HK },
    { id: 'AH', src: HA },

    { id: '6S', src: S6 },
    { id: '7S', src: S7 },
    { id: '8S', src: S8 },
    { id: '9S', src: S9},
    { id: '10S', src: S10 },
    { id: 'JS', src: SJ },
    { id: 'QS', src: SQ },
    { id: 'KS', src: SK },
    { id: 'AS', src: SA },
];


// ПОЛУЧАЮ РАНДОМНУЮ КАРТУ ИЗ МАССИВА КАРТ
// здесь была ошибка с "includes", quick fix добавил строчки 14,15 и 16
function getRandomCard(): void {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    console.log('111');
    console.log(randomCard);
    if (!window.application.randomCards.includes(randomCard)) {
        window.application.randomCards.push(randomCard);
        console.log('222');
        console.log(randomCard);
        console.log('333');
        console.log(window.application.randomCards);
    } else {
        getRandomCard();
    }
}



// ПЕРЕМЕШАТЬ ЭЛЕМЕНТЫ МАССИВА
export function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// СОЗДАЮ ПАРЫ КАРТ И ПЕРЕМЕШИВАЮ ИХ
function createCardPairs(container: HTMLElement) {
    const cardPairs = window.application.randomCards.concat(
        window.application.randomCards
    );
    const shuffledCards = shuffleArray(cardPairs);

    for (let i = 0; i < shuffledCards.length; i++) {
        const cardBox = document.createElement('div');
        cardBox.classList.add('cardBox');
        cardBox.setAttribute('class', `cardBox ${shuffledCards[i].id}`);
        cardBox.setAttribute(
            'style',
            `background-image: url(${shuffledCards[i].src});`
        );

        if (shuffledCards[i].id.trim() !== '') {
            cardBox.classList.add(shuffledCards[i].id);
        }

        container.appendChild(cardBox);
    }
    window.application.randomCards = [{ id: '', src: '' }];
}

// СОЗДАЮ СЕКУНДОМЕР
function renderTimerBlock(container: HTMLElement) {
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

    setInterval(function () {
        seconds++;
        if (seconds < 10) {
            secondsBox.textContent = `:0${seconds}`;
        } else if (seconds >= 10 && seconds <= 59) {
            secondsBox.textContent = `:${seconds}`;
        } else if (seconds === 60) {
            minutes++;
            seconds = seconds - 60;
            minutesBox.textContent = `0${minutes}`;
            if (minutes >= 10) {
                minutesBox.textContent = minutes.toString();
            }
        }
    }, 1000);
}

// РЕНДЕРЮ БЛОК КАРТ ДЛЯ ИГРОВОГО ЭКРАНА
function renderGameBlock(container: HTMLElement) {
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

// СОЗДАЮ ИГРОВОЙ ЭКРАН
function renderGameScreen() {
    const app = document.querySelector('.app') as Element;
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
    setTimeout(uncoverCard, 5000);
}

// ПЕРЕВОРАЧИВАЮ КАРТЫ ЧЕРЕЗ 5 СЕКУНД
function coverCards() {
    const cardBoxes = document.querySelectorAll<HTMLElement>('.cardBox');
    setTimeout(() => {
        cardBoxes.forEach((cardBox) => {
            cardBox.style.backgroundImage = flipped;
        });
    }, 5000);
}

// РАСКРЫВАЮ И СВЕРЯЮ КАРТЫ
function uncoverCard() {
    const totalAmountOfCards = [];
    let openedCards: string[] = [];
    const cardBoxes = document.querySelectorAll<HTMLElement>('.cardBox');

    cardBoxes.forEach((cardBox) => {
        cardBox.addEventListener('click', function () {
            let cardName = cardBox.classList;
            cardBox.style.backgroundImage = `url(./src/pictures/cards/${cardName[1]}.jpg)`;
            openedCards.push(cardName[1]);
            totalAmountOfCards.push(cardName[1]);

            if (openedCards.length === 2) {
                if (openedCards[0] === openedCards[1]) {
                    openedCards = [];
                } else {
                    window.application.gameStatus = 'Вы проиграли!';
                    window.application.modalWindowPicture =
                        './src/pictures/lose.png';
                    renderEndgameWindow();
                }
            }
            if (totalAmountOfCards.length === cardBoxes.length) {
                window.application.gameStatus = 'Вы выиграли!';
                window.application.modalWindowPicture =
                    './src/pictures/win.png';
                renderEndgameWindow();
            }
        });
    });
}

// СОЗДАЮ МОДАЛЬНОЕ ОКНО ПОБЕДЫ ИЛИ ПОРАЖЕНИЯ
function renderEndgameWindow() {
    const app = document.querySelector('.app') as Element;
    app.textContent = '';

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

    const minutesText =
        document.querySelector('.minutesBox')?.textContent ?? '00';
    const secondsText =
        document.querySelector('.secondsBox')?.textContent ?? '00';
    totalTime.textContent = minutesText + secondsText;

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
