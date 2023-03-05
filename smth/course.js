// ЗАДАНИЕ 1
// const numbers = {
// 	keyin1: 1,
// 	keyin2: 2,
// 	keyin3: 3,
// 	keyin4: 4,
// 	keyin5: 5,
// 	keyin6: 6,
// 	keyin7: 7,
// }
// for (let item in numbers) {
//     if (numbers[item] >= 3) {
//         console.log(numbers[item]);
//     }
// }
				// ИЛИ 
// console.log(Object.values(numbers).filter[item => item >= 3]);

// ЗАДАНИЕ 2
// Выведите в консоль дату в формате 'день - месяц - год'.
// const date = new Date();
// console.log(`${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()}`);



// ЗАДАНИЕ 3
// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, 
// а значения второго массива — значениями.

// const en = ["mon",  "tue",  "wed",  "thu",  "fri",  "sat",  "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// const week = {};
// for (let i = 0; i < en.length; i++) {
// 	week[en[i]] = ru[i];
// }
// console.log(week);




// ЗАДАНИЕ 4
// const week = {
//     1: "Понедельник",
//     2: "Вторник",
//     3: "Среда",
//     4: "Четверг",
//     5: "Пятница",
//     6: "Суббота",
//     7: "Воскресенье",
// }

// let userInput = prompt(`Введите день недели`);
// for (let item in week) {
//     if (userInput === week[1]  || userInput === week[2] || userInput === week[3] || userInput === week[4] || userInput === week[5]) {
//         alert(`Будний день`);
//         break;
//     } else if (userInput === week[6]  || userInput === week[7]) {
//         alert(`Выходной день`);
//         break;
//     } else if (userInput === '1') {
//         alert(week[1]);
//         break;
//     } else if (userInput === '2') {
//         alert(week[2]);
//         break;
//     } else if (userInput === '3') {
//         alert(week[3]);
//         break;
//     } else if (userInput === '4') {
//         alert(week[4]);
//         break;
//     } else if (userInput === '5') {
//         alert(week[5]);
//         break;
//     } else if (userInput === '6') {
//         alert(week[6]);
//         break;
//     } else if (userInput === '7') {
//         alert(week[7]);
//         break;
//     } else {
//         alert(`Я не знаю, что это за день недели`);
//         break;
//     }
// }


// ЗАДАНИЕ 5
// const numbers = {
// 	key1: {
// 		keyin1: 1,
// 		keyin2: 2,
// 		keyin3: 3,
// 	},
// 	key2: {
// 		keyin1: 4,
// 		keyin2: 5,
// 		keyin3: 6,
// 	},
// }
// let result = 0;
// for (const key in numbers) {
// 	result += Object.values(numbers[key]).reduce((a, b) => a + b);
// }
// console.log(result)



// ЗАДАНИЕ 6
const months = {
	ru: [ 
		'январь', 
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
		],
	en: [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
		],
	}

	
let language = prompt('Введите ru или en');
let month = prompt('Введите номер месяца, который вы хотите вывести');

let result = months[language][month - 1];
console.log(result);