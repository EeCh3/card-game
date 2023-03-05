// ЗАДАНИЕ 1
// let length = prompt(`Введите длину комнаты`);
// let width = prompt(`Введите ширину комнаты`);
// let square = length * width;
// let option = prompt(`Какой вид ремонта вас интересует? Минимальный, средний или максимальный?`);
// if (option === `Минимальный`) {
//     alert(`Ремонт будет стоить ${square * 7000}`);
// } else if (option === `Средний`) {
//     alert(`Ремонт будет стоить ${square * 10000}`);
// } else {
//     alert(`Ремонт будет стоить ${square * 15000}`);
// } 


// ЗАДАНИЕ 2
// const arr = [];
// const newArr = [];
// for (let i=0; i < 4; i++) {
//     arr.push(Math.round(Math.random() * (10 - 1) + 1))
//     }
// console.log(arr);
// for (let i = 0; i < 1; i++) {
//     newArr.push(arr[0] * arr[1] + arr[2] * arr[3]);
    
// }

// alert(`Массив ${arr}, результат ${newArr}` );


// ЗАДАНИЕ 3
// const arr = [];
// for (let i=0; i < 4; i++) {
//     arr.push(Math.round(Math.random() * 10))
//     }
// console.log(arr);

// let result = arr.reduce((sum, current) => sum + current, 0);

// console.log(result); 






// ЗАДАНИЕ 4
// const arr = [];
// const newArr = [];
// for (let i=0; i < 4; i++) {
//     arr.push(Math.round(Math.random() * (10 - 1) + 1))
//     }
// console.log(arr);
// for (let i=0; i < 4; i++) {
//     newArr.push(Math.pow(arr[i], 3));
//     }
// console.log(newArr);

// ЗАДАНИЕ 5
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const newArr = [];
// newArr.push(arr[0], arr[1], arr[2], arr[5], arr[6]);
// console.log(newArr);



// ЗАДАНИЕ 6
// let string = 'hello';
// let newString = string[0].toUpperCase() + string[1].toUpperCase() + string.slice(2);
// console.log(newString);


// ЗАДАНИЕ 7
// const exercise7 = () => {
//     let arr = []
//     let num = prompt(`Введите число от 1 до 20`);
    
        

// for (let i = 2; i < num; i++) {
//     if (i %  2 === 0) {
//         arr.push(i)
//     } ;
    
// }

// console.log(arr);
// }

// exercise7()




//ЗАДАНИЕ 8
// const generate_password = () => {
//     let data ="abcdefghijklmnopqrstuvwxyz0123456789";
//     const arr = data.split('');
//     console.log(arr);
//     let password = '';
//         for (let i = 0; i < 8; i++) {
//             letter = arr[Math.floor(Math.random() * data.length)];
//             capitalize = Math.random() > 0.5 ? true : false;
//             if (capitalize) letter = letter.toUpperCase();
//             password += letter;
            
//         } console.log(password);
// }        
// generate_password();




// ЗАДАНИЕ 9 
// let a = Number(prompt(`Введите первую стороную треугольника`));
// let b = Number(prompt(`Введите вторую стороную треугольника`));
// let c = Number(prompt(`Введите третью стороную треугольника`));
// let sum = a + b + c;
// let p =  sum / 2;
// let square = Math.sqrt(p*(p-a)*(p-b)*(p-c));
// console.log(sum);
// console.log(p);
// console.log(square);


//ЗАДАНИЕ 10
// const riddle = () => {
//     let count = 0;
//     let userAnswer = prompt(`Пустые отдыхаем, а полные шагаем.`);  
//     let answer = `Сапоги`;
//     if (userAnswer != answer) {
//         for (let i = 0; i <1; i++) {
//             alert(`Попробуйте еще раз`);
//             let userAnswer = prompt(`Пустые отдыхаем, а полные шагаем.`);
//             if (userAnswer === answer) {
//                 alert(`Поздравляю!`);
//                 break;
//             }  else if (userAnswer != answer) {
//                     for (let i = 0; i < 1; i++) {
//                         alert(`Попробуйте еще раз`);
//                         let userAnswer = prompt(`Пустые отдыхаем, а полные шагаем.`);
//                         if (userAnswer === answer) {
//                             alert(`Поздравляю!`);
//                             break;   
//                         } else {
//                             alert(`Вы проиграли`); 
//                         }
//                     }
            
//                 }
//         }
//     }  else if (userAnswer === answer) {
//                 alert(`Поздравляю!`);}
// }
// riddle()