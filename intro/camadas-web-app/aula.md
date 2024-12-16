* AS QUATRO CAMADAS DE UMA WEB APP *

CAMADA 1 - Componentes ou Components

O component possui três características: 
1º Ele é um elemento visual;
2° Ele é customizável;
3° Ele é reutilizável. 

CAMADA 2 - Gerenciamento de Estados ou States

O States é responsável por garantir que as informações dos componentes não estão dessincronizadas e facilitar a comunicação de um componente com outro. Por exemplo, atualizar carrinho de compras ao clicar no botão de comprar de um produto.

Exemplo de Ferramentas para Gerenciamento de States:
* FLUX;             // Mais utilizada no React
* REDUX;            // Mais utilizada no React 
* CONTEXT API;     // Mais utilizada no React
* RECOIL;
* STOREON;
* VUEX;            // Utilizada no Vue
* NGRX;           // Mais utilizada no Angular
* NGXS.          // Mais utilizada no Angular

CAMADA 3 - Roteamento ou Routes ou Routing & Navigation

É responsável pela forma de navegar fazendo a troca de URL sem recarregar a página, mudando somente os componentes que são mostrados.

Exemplos de Bibliotecas de Routes:
* History API; --> É o que vem nativo do navegador.
* React-Router;
* Vue-Router;
* Angular RoutingModule.

CAMADA 4 - Renderização ou Render

É responsável por decidir a melhor maneira de acessar e entregar para o browser o componente pronto para que ele seja desenhado na janela sem complicações.

Existem três tipos de estratégias de renderização: 
1 - 100% Server;
2 - Parte Server e Parte Client;
3 - 100% Client.