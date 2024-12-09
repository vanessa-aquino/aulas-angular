// Quando eu quero criar uma representação nova, eu crio um molde. Ou seja, se eu quero criar uma tag HTML e usa-lá várias vezes, eu preciso ter um molde disso. Nesse caso, a class "NewTag" é esse molde. O "extends" diz que essa classe extende ou herda todos os comportamentos de um elemento HTML.

// Leitura da linha: Temos uma nova classe ou um novo molde que irá se comportar como um elemento HTML.
class NewTag extends HTMLElement { 

// Dentro de uma classe, o primeiro método que se executa SEMPRE é o método "constructor".
    constructor() {
        // Dentro do "constructor" geralmente é chamado o "super", que serve para invocar o método construtor de quem você está herdando.

        super(); // Através do "super", nós estamos executando o construtor da nossa classe e o construtor do HTMLElement.

        // Leitura da linha: Essa classe vai anexar uma sombra. Se eu deixo o modo no "closed", as modificações só poderão acontecer aqui dentro, se eu deixo "open", o mundo exterior consegue modificar e manipular nossos elementos dinâmicamente.
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = '<h1>Hello World: Shadow DOM</h1>';
    }
}


// Aqui eu esotu definindo qual elemento customizado estamos criando, no primeiro parâmetro foi definido o nome da tag, e no segundo parâmetro, foi passado o molde.
customElements.define('new-tag', NewTag);