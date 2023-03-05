const container = document.querySelector('.container')
const pinInput = document.querySelector('.pinInput')
const saveButton = document.querySelector('.saveButton')
const error = document.querySelector('.error') 

// const widget = new Pincoder(container)

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

let savedPin

pinInput.addEventListener('input', function(event) {
        let inputValue = event.target.value;
        const arrInpValue = inputValue.split('');
        const filteredArray = []
        arrInpValue.filter(number => {
            if (numbers.includes(number)) {
                filteredArray.push(number)
            }
            
        })
        pin = ''
        for (number of filteredArray) {
            pin += number
        }
        event.target.value = pin;
        savedPin = pin;
    })

saveButton.addEventListener('click', function(event) {
    event.preventDefault()
    localStorage.setItem('pin', pinInput.value);
    // location.href = 'Экран ввода ПИН-кода.html'
})



    function renderEnterScreen() {
        for (let i = 0; i < pin.length; i++) {
            const input = document.createElement('input');
            document.body.appendChild(input);
        }}

