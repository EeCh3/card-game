/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

var app = document.querySelector('.app');
renderStartScreen();
// СОЗДАЮ НАЧАЛЬНЫЙ ЭКРАН
function renderStartScreen() {
    var app = document.querySelector('.app');
    app.textContent = '';
    var startScreenContainer = document.createElement('div');
    startScreenContainer.classList.add('startScreenContainer');
    var startScreenBox = document.createElement('div');
    startScreenBox.classList.add('startScreenBox');
    var startScreenTitleBox = document.createElement('div');
    startScreenTitleBox.classList.add('startScreenTitleBox');
    var startScreenTitle = document.createElement('div');
    startScreenTitle.classList.add('startScreenTitle');
    startScreenTitle.textContent = 'Выберите сложность';
    startScreenTitleBox.appendChild(startScreenTitle);
    var difficultyBox = document.createElement('div');
    difficultyBox.classList.add('difficultyBox');
    var difficultyButton1 = document.createElement('button');
    difficultyButton1.classList.add('difficultyItem', 'difficulty1');
    difficultyButton1.textContent = '1';
    var difficultyButton2 = document.createElement('button');
    difficultyButton2.classList.add('difficultyItem', 'difficulty2');
    difficultyButton2.textContent = '2';
    var difficultyButton3 = document.createElement('button');
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
    var startButton = document.createElement('button');
    startButton.classList.add('startButton', 'button');
    startButton.textContent = 'Старт';
    startButton.addEventListener('click', renderGameScreen);
    startScreenContainer.appendChild(startScreenBox);
    startScreenBox.appendChild(startScreenTitleBox);
    startScreenBox.appendChild(difficultyBox);
    startScreenBox.appendChild(startButton);
    app.appendChild(startScreenContainer);
}
var cards = [
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
// ПОЛУЧАЮ РАНДОМНУЮ КАРТУ ИЗ МАССИВА КАРТ
// здесь была ошибка с "includes", quick fix добавил строчки 14,15 и 16
function getRandomCard() {
    var randomCard = cards[Math.floor(Math.random() * cards.length)];
    if (!window.application.randomCards.includes(randomCard)) {
        window.application.randomCards.push(randomCard);
    }
    else {
        getRandomCard();
    }
}
// ПЕРЕМЕШАТЬ ЭЛЕМЕНТЫ МАССИВА
function shuffleArray(array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
    return array;
}
// СОЗДАЮ ПАРЫ КАРТ И ПЕРЕМЕШИВАЮ ИХ
function createCardPairs(container) {
    var cardPairs = window.application.randomCards.concat(window.application.randomCards);
    var shuffledCards = shuffleArray(cardPairs);
    for (var i = 0; i < shuffledCards.length; i++) {
        var cardBox = document.createElement('div');
        cardBox.classList.add('cardBox');
        cardBox.style.backgroundImage = "url(".concat(shuffledCards[i].src, ")");
        cardBox.classList.add(shuffledCards[i].id);
        container.appendChild(cardBox);
    }
    window.application.randomCards.length = 0;
}
// СОЗДАЮ СЕКУНДОМЕР
function renderTimerBlock(container) {
    var secondsBox = document.createElement('p');
    secondsBox.classList.add('secondsBox', 'timer');
    secondsBox.textContent = ':00';
    var minutesBox = document.createElement('p');
    minutesBox.classList.add('minutesBox', 'timer');
    minutesBox.textContent = '00';
    var timerBlock = document.createElement('div');
    timerBlock.classList.add('timerBlock');
    timerBlock.appendChild(minutesBox);
    timerBlock.appendChild(secondsBox);
    container.appendChild(timerBlock);
    var seconds = 0;
    var minutes = 0;
    setInterval(function () {
        seconds++;
        if (seconds < 10) {
            secondsBox.textContent = ":0".concat(seconds);
        }
        else if (seconds >= 10 && seconds <= 59) {
            secondsBox.textContent = ":".concat(seconds);
        }
        else if (seconds === 60) {
            minutes++;
            seconds = seconds - 60;
            minutesBox.textContent = "0".concat(minutes);
            if (minutes >= 10) {
                minutesBox.textContent = minutes.toString();
            }
        }
    }, 1000);
}
// РЕНДЕРЮ БЛОК КАРТ ДЛЯ ИГРОВОГО ЭКРАНА
function renderGameBlock(container) {
    var EasyGameCardPairs = 3;
    var MediumGameCardsPairs = 6;
    var HardGameCardsPairs = 9;
    if (window.application.difficulty === 1) {
        for (var i = 0; i < EasyGameCardPairs; i++) {
            getRandomCard();
        }
    }
    else if (window.application.difficulty === 2) {
        for (var i = 0; i < MediumGameCardsPairs; i++) {
            getRandomCard();
        }
    }
    else if (window.application.difficulty === 3) {
        for (var i = 0; i < HardGameCardsPairs; i++) {
            getRandomCard();
        }
    }
    createCardPairs(container);
}
// СОЗДАЮ ИГРОВОЙ ЭКРАН
function renderGameScreen() {
    var app = document.querySelector('.app');
    app.textContent = '';
    var gameScreenContainer = document.createElement('div');
    gameScreenContainer.classList.add('gameScreenContainer');
    var gameScreenTopContent = document.createElement('div');
    gameScreenTopContent.classList.add('gameScreenTopContent');
    var replayButton = document.createElement('button');
    replayButton.classList.add('replayButton', 'button');
    replayButton.textContent = 'Начать заново';
    var gameScreenCardsContainer = document.createElement('div');
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
    var cardBoxes = document.querySelectorAll('.cardBox');
    setTimeout(function () {
        cardBoxes.forEach(function (cardBox) {
            cardBox.style.backgroundImage = 'url(./src/pictures/closed.jpg)';
        });
    }, 5000);
}
// РАСКРЫВАЮ И СВЕРЯЮ КАРТЫ
function uncoverCard() {
    var totalAmountOfCards = [];
    var openedCards = [];
    var cardBoxes = document.querySelectorAll('.cardBox');
    cardBoxes.forEach(function (cardBox) {
        cardBox.addEventListener('click', function () {
            var cardName = cardBox.classList;
            cardBox.style.backgroundImage = "url(./src/pictures/cards/".concat(cardName[1], ".jpg)");
            openedCards.push(cardName[1]);
            totalAmountOfCards.push(cardName[1]);
            if (openedCards.length === 2) {
                if (openedCards[0] === openedCards[1]) {
                    openedCards = [];
                }
                else {
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
    var _a, _b, _c, _d;
    var app = document.querySelector('.app');
    app.textContent = '';
    var modalWindow = document.createElement('div');
    modalWindow.classList.add('modal');
    var EndgameWindowContainer = document.createElement('div');
    EndgameWindowContainer.classList.add('EndgameWindowContainer', 'modalContent');
    var EndgamePictureBox = document.createElement('div');
    EndgamePictureBox.classList.add('EndgamePictureBox');
    var EndgamePicture = document.createElement('img');
    EndgamePicture.classList.add('EndgamePicture');
    EndgamePicture.setAttribute('src', window.application.modalWindowPicture);
    EndgamePictureBox.appendChild(EndgamePicture);
    var EndgameHeadingBox = document.createElement('div');
    EndgameHeadingBox.classList.add('EndgameHeadingBox');
    var EndgameHeading = document.createElement('h1');
    EndgameHeading.classList.add('EndgameHeading');
    EndgameHeading.textContent = window.application.gameStatus;
    EndgameHeadingBox.appendChild(EndgameHeading);
    var totalTimeBox = document.createElement('div');
    totalTimeBox.classList.add('totalTimeBox');
    var totalTimeHeading = document.createElement('h2');
    totalTimeHeading.classList.add('totalTimeHeading');
    totalTimeHeading.textContent = 'Затраченное время:';
    var totalTime = document.createElement('h3');
    totalTime.classList.add('totalTime');
    var minutesText = (_b = (_a = document.querySelector('.minutesBox')) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : '00';
    var secondsText = (_d = (_c = document.querySelector('.secondsBox')) === null || _c === void 0 ? void 0 : _c.textContent) !== null && _d !== void 0 ? _d : '00';
    totalTime.textContent = minutesText + secondsText;
    totalTimeBox.appendChild(totalTimeHeading);
    totalTimeBox.appendChild(totalTime);
    var playAgainButton = document.createElement('button');
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

/******/ })()
;
//# sourceMappingURL=bundle.js.map