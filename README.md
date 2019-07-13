[Web Components](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components)

# [Web Components](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components)

Web Components são uma suíte de diferentes tecnologias que permite a criação de elementos customizados reutilizáveis — com a funcionalidade separada do resto do seu código — e que podem ser utilizados em suas aplicações web.

*[Clique aqui](https://www.webcomponents.org/) para verificar o Suporte dos Navegadores.*


## Conceitos e uso

Como desenvolvedores, sabemos que é uma boa ideia reutilizar o código o máximo que pudermos. Tradicionalmente, isso não tem sido fácil quando o assunto são estruturas de marcação customizadas — pense no complexo HTML (e estilo e script associados) que, às vezes, deve ser escrito para renderizar controles UI customizados e em como utilizá-los repetidas vezes pode tornar sua página uma bagunça se você não tomar cuidado.

Web Components buscam resolver esses problemas — são formados por três tecnologias principais, que podem ser usadas em conjunto para criar elementos customizados versáteis, com funcionalidade encapsulada, que podem ser reutilizados onde você quiser sem preocupação com conflito de código.

-   **Elementos customizados**: Um conjunto de APIs JavaScript que permite definir elementos customizados e seus respectivos comportamentos, podendo ser utilizados de diferentes formas na interface da aplicação.
-   **Shadow DOM**: Um conjunto de APIs JavaScript para incorporar uma árvore DOM "fantasma" encapsulada a um elemento — que é renderizada separadamente do DOM do documento principal — e controlar a funcionalidade associada. Nesse caso, você pode manter os recursos de um elemento privados, fazendo com que seu comportamento e estilo possam ser escritos sem medo de causar conflito com outras partes do documento.
-   **Templates HTML**: Os elementos  [`<template>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/template "O  elemento HTML <template> é um mecanismo para encapsular um conteúdo do lado do cliente que não é renderizado quando a página é carregada, mas que pode ser instanciado posteriormente em tempo de execução usando JavaScript.")  e  [`<slot>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/slot "A documentação sobre isto ainda não foi escrita; por favor considere contribuir!")  permitem que você escreva templates de marcação que não são exibidas na página. Elas podem então ser reutilizadas várias vezes como modelo de estrutura de um elemento customizado.
A abordagem básica para se implementar um componente web geralmente se parece com isso:

1.  Crie uma classe ou uma função na qual você especifica a funcionalidade de seu componente web. Se optar por usar classe, utilize a sintaxe definida pelo ECMAScript 2015 (veja [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) para mais informações).
2.  Registre seus elemento customizado através do método [`CustomElementRegistry.define()`](https://developer.mozilla.org/pt-BR/docs/Web/API/CustomElementRegistry/define "A documentação sobre isto ainda não foi escrita; por favor considere contribuir!"), passando o nome do elemento a ser definido, a classe ou função na qual sua funcionalidade foi especificada, e opcionalmente, de qual elemento ele herda suas propriedades.
3.  Se necessário, incorpore um shadow DOM ao elemento customizado usando o método  [`Element.attachShadow()`](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/attachShadow "A documentação sobre isto ainda não foi escrita; por favor considere contribuir!"). Adicione elementos filhos, listeners, etc., ao shadow DOM usando métodos normais de DOM.
4.  Se necessário, defina um template HTML usando [`<template>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/template "O  elemento HTML <template> é um mecanismo para encapsular um conteúdo do lado do cliente que não é renderizado quando a página é carregada, mas que pode ser instanciado posteriormente em tempo de execução usando JavaScript.")  e  [`<slot>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/slot "A documentação sobre isto ainda não foi escrita; por favor considere contribuir!"). Novamente, use os métodos normais de DOM methods para clonar o template e inclui-la ao shadow DOM.
5.  Use seu elemento customizado onde você preferir em sua página, da mesma forma que usaria qualquer outro elemento HTML.

## Tutoriais

[Usando elementos customizados](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)

Um guia que mostra como usar os recursos de elementos customizados para criar componentes web simples, além de como analisar o ciclo de vida das funções de retorno e outros recursos mais avançados.

[Usando shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

Um guia que analisa os fundamentos do shadow DOM, mostrando como incorporá-lo a um elemento, adicioná-lo à árvore do shadow DOM, estilizá-lo, etc.

[Usando templates e slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)

Um guia que mostra como definir uma estrutura HTML reutilzável através dos elementos [`<template>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/template "O  elemento HTML <template> é um mecanismo para encapsular um conteúdo do lado do cliente que não é renderizado quando a página é carregada, mas que pode ser instanciado posteriormente em tempo de execução usando JavaScript.")  e  [`<slot>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/slot "A documentação sobre isto ainda não foi escrita; por favor considere contribuir!"), e como utilizar essa estrutura dentro de elementos web.