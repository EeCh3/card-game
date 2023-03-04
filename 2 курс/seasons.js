const seasons = () => {
    let userInput = prompt(`Какой сейчас сезон? Введите номер месяца:`);
		userInput = Number(userInput);
    if (userInput >= 3 && userInput <= 5) {
        console.log(`Весна`);
    } else if (userInput >= 6 && userInput <= 8) {
        console.log(`Лето`);
    } else if (userInput >= 9 && userInput <= 11) {
        console.log(`Осень`);
    } else if (userInput === 12 && userInput === 1 && userInput === 2) {
        console.log(`Зима`);
    } else {
        console.log(`Вы ввели неправильное значение`);
    }
}
 

