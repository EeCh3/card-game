const words = () => {
let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
arr = arr.sort(() => Math.random() - 0.5);
alert(arr);

let first = prompt(`Чему равнялся первый элемент массива?`);
let last = prompt(`Чему равнялся последний элемент массива?`);
if (first === arr[0] && last === arr[6]) {
	alert(`Поздравляем! Вы угадали оба элемента!`)
} else if (first === arr[0] || last === arr[6]) {
	alert(`Вы были близки к победе!`)
} else {
	alert(`Вы ответили неверно`)
}
}