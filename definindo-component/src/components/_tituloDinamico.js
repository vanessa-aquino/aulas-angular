class DynamicTitle extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        //Base do Component
        const componentRoot = document.createElement('h1');
        // Aqui eu defino que o texto do meu h1 vai ser definifo coom o valor que passarem na minha prop.
        componentRoot.textContent = this.getAttribute('title'); // "title" é a minha prop. 

        //Estilizar o Component
        const style = document.createElement('style');
        style.textContent = `
            h1 {
                color: red;
            }
        `

        //Enviar para a Shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);

    }
}

customElements.define('dynamic-title', DynamicTitle);