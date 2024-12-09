console.log('teste')

class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    // Esse é o método para a construção de toda a estrutura.
    build() {
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'card__left');

        const author = document.createElement('span');
        author.textContent = 'By ' + (this.getAttribute('author') || 'Anonymous');

        const linkTitle = document.createElement('a');
        linkTitle.textContent = this.getAttribute('title');
        linkTitle.href = this.getAttribute('link-url');


        const infos = document.createElement('p');
        infos.textContent = this.getAttribute('content');

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(infos);

        const cardRigth = document.createElement('div');
        cardRigth.setAttribute('class', 'card__rigth');

        const image = document.createElement('img');
        image.src = this.getAttribute('img-src');
        image.alt = 'Lara Croft colocando ataduras em sua ferida'
        cardRigth.appendChild(image);


        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRigth);

        return componentRoot;
    }

    // Esse é o método para a construção de toda a estilização.
    styles() {
        const style = document.createElement('style');
        style.textContent = `
            .card {
                margin: auto;
                border: 1px solid black;
                width: 80%;
                box-shadow: box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
                -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }

            .card__left > span {
                font-weigth: 400;
            }

            .card__left > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }

            .card__left > p {
                color: rgb(70, 70, 70);
            }
        
            .card__rigth {
                display: flex;
                align-items: center;
            }

            img {
                width: 300px;
                height: 200px;
            }
        `

        return style;
    }
}

customElements.define('card-news', Cardnews);