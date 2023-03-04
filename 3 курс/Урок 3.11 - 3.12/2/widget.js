class Pincoder {
    
    constructor(container) {
        this.container = container;

        this.renderScreenCreate();
    }
    
    renderScreenCreate () {
        const section = document.createElement('section');
        section.classList.add('screen', 'screen-create');

        const form = document.createElement('form');

        const input = document.createElement('input');
        input.setAttribute('placeholder', 'Введите ПИН')

        const button = document.createElement('button');
        button.textContent = 'Сохранить'

        form.appendChild(input);
        form.appendChild(button);

        section.appendChild(form);

        this.container.appendChild(section);
    }
}