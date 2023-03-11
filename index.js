const app = document.querySelector('.app');

window.application = {
    blocks: {},
    screens: {},
    renderScreen: function(screenName) {
        if (window.application.screens[screenName]) {
            window.application.screens[screenName]()
        } else {
            console.log('НЕ СУЩЕСТВУЕТ ТАКОГО ПОЛЯ В window.application.screens');
        }  
    },
    renderBlock: function(blockName, container) {
        if (window.application.blocks[blockName]) {
            window.application.blocks[blockName](container)
        } else {
            console.log('НЕ СУЩЕСТВУЕТ ТАКОГО ПОЛЯ В window.application.blocks');
        }
    },
}


const gameScreenCardsContainer = document.createElement('div');
gameScreenCardsContainer.classList.add('gameScreenCardsContainer');

// вывести создание всех элементов игрового экрана в отдельную  функцию 
// (чтобы код не повторялся)
function renderGameScreen() {

}

// СОЗДАЮ ТАЙМЕР

const secondsBox = document.createElement('p');
secondsBox.classList.add('secondsBox', 'timer');
secondsBox.textContent = ':00';
const minutesBox = document.createElement('p');
minutesBox.classList.add('minutesBox', 'timer');
minutesBox.textContent = '00';


function timer() {
    let seconds = 0;
    let minutes = 0;

    let gameTimer = setInterval(function() {
            seconds ++;
        if (seconds < 10) {
            secondsBox.textContent = `:0${seconds}`
        } else if (seconds >= 10 && seconds < 59) {
            secondsBox.textContent = `:${seconds}`;
        } else if (seconds === 60) {
            minutes ++;
            seconds = seconds - 60;
            minutesBox.textContent = `0${minutes}`;
                if (minutes >= 10) {
                    minutesBox.textContent = minutes;
                }} 
    }, 1000);
}


function renderEasyGameBlock(container) {
    const easyTemplate = document.querySelector('.easy');
    const clone = easyTemplate.content.cloneNode(true);
    const card = clone.querySelectorAll('.card');
    container.appendChild(clone)
} 

function renderEasyGameScreen() {
    app.textContent = '';
    timer()

    const gameScreenContainer = document.createElement('div');
    gameScreenContainer.classList.add('gameScreenContainer');

    const gameScreenTopContent = document.createElement('div');
    gameScreenTopContent.classList.add('gameScreenTopContent');

    const timerBox = document.createElement('div');
    timerBox.classList.add('timerBox');
    
    timerBox.appendChild(minutesBox)
    timerBox.appendChild(secondsBox)

    const replayButton = document.createElement('button');
    replayButton.classList.add('replayButton');
    replayButton.textContent = 'Начать заново'

    const gameScreenCardsContainer = document.createElement('div');
    gameScreenCardsContainer.classList.add('gameScreenCardsContainer');

    gameScreenTopContent.appendChild(timerBox);
    gameScreenTopContent.appendChild(replayButton);
    gameScreenContainer.appendChild(gameScreenTopContent);
    gameScreenContainer.appendChild(gameScreenCardsContainer);
    app.appendChild(gameScreenContainer);

    window.application.blocks['easyGame'] = renderEasyGameBlock;
    window.application.renderBlock('easyGame', gameScreenCardsContainer)
}

function renderMediumGameBlock(container) {
    const mediumTemplate = document.querySelector('.medium');
    const clone = mediumTemplate.content.cloneNode(true);
    const card = clone.querySelectorAll('.card');
    container.appendChild(clone)
} 

function renderMediumGameScreen() {
    app.textContent = '';
    timer()

    const gameScreenContainer = document.createElement('div');
    gameScreenContainer.classList.add('gameScreenContainer');

    const gameScreenTopContent = document.createElement('div');
    gameScreenTopContent.classList.add('gameScreenTopContent');

    const timerBox = document.createElement('div');
    timerBox.classList.add('timerBox');

    timerBox.appendChild(minutesBox)
    timerBox.appendChild(secondsBox)

    const replayButton = document.createElement('button');
    replayButton.classList.add('replayButton');
    replayButton.textContent = 'Начать заново'

    const gameScreenCardsContainer = document.createElement('div');
    gameScreenCardsContainer.classList.add('gameScreenCardsContainer');

    gameScreenTopContent.appendChild(timerBox);
    gameScreenTopContent.appendChild(replayButton);
    gameScreenContainer.appendChild(gameScreenTopContent);
    gameScreenContainer.appendChild(gameScreenCardsContainer);
    app.appendChild(gameScreenContainer);

    window.application.blocks['mediumGame'] = renderMediumGameBlock;
    window.application.renderBlock('mediumGame', gameScreenCardsContainer)
}

function renderHardGameBlock(container) {
    const hardTemplate = document.querySelector('.hard');
    const clone = hardTemplate.content.cloneNode(true);
    const card = clone.querySelectorAll('.card');
    container.appendChild(clone)
} 

function renderHardGameScreen() {
    app.textContent = '';
    timer()

    const gameScreenContainer = document.createElement('div');
    gameScreenContainer.classList.add('gameScreenContainer');

    const gameScreenTopContent = document.createElement('div');
    gameScreenTopContent.classList.add('gameScreenTopContent');

    const timerBox = document.createElement('div');
    timerBox.classList.add('timerBox');

    timerBox.appendChild(minutesBox)
    timerBox.appendChild(secondsBox)

    const replayButton = document.createElement('button');
    replayButton.classList.add('replayButton');
    replayButton.textContent = 'Начать заново'

    const gameScreenCardsContainer = document.createElement('div');
    gameScreenCardsContainer.classList.add('gameScreenCardsContainer');

    gameScreenTopContent.appendChild(timerBox);
    gameScreenTopContent.appendChild(replayButton);
    gameScreenContainer.appendChild(gameScreenTopContent);
    gameScreenContainer.appendChild(gameScreenCardsContainer);
    app.appendChild(gameScreenContainer);

    window.application.blocks['hardGame'] = renderMediumGameBlock;
    window.application.renderBlock('hardGame', gameScreenCardsContainer)
}

const difficulty1 = document.querySelector('.difficulty1');
const difficulty2 = document.querySelector('.difficulty2');
const difficulty3 = document.querySelector('.difficulty3');

difficulty1.addEventListener('click', function(e) {
    window.application.difficulty = 1;
})

difficulty2.addEventListener('click', function(e) {
    window.application.difficulty = 2;
})

difficulty3.addEventListener('click', function(e) {
    window.application.difficulty = 3;
})

const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', function(e) {
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
})
