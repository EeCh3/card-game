const riddle = () => {
    let userAnswer = prompt(`Пустые отдыхаем, а полные шагаем.`);  
    let answer = `Сапоги`;
    if (userAnswer != answer) {
        for (let i = 0; i <1; i++) {
            alert(`Подсказка: С....и`);
            let userAnswer = prompt(`Пустые отдыхаем, а полные шагаем.`);
            if (userAnswer === answer) {
                alert(`Поздравляю!`);
                break;
            }  else if (userAnswer != answer) {
                    for (let i = 0; i < 1; i++) {
                        alert(`Подсказка: С.п..и`);
                        let userAnswer = prompt(`Пустые отдыхаем, а полные шагаем.`);
                        if (userAnswer === answer) {
                            alert(`Поздравляю!`);
                            break;   
                        } else {
                            alert(`Вы проиграли`); 
                        }
                    }
            
                }
        }
    }  else if (userAnswer === answer) {
                alert(`Поздравляю!`);}
}
