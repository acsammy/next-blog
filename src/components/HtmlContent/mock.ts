export default `
<h1>Hello World 1 </<h1>
<h2>Hello World 2 </<h2>
<h3>Hello World 3 </<h3>
<h4>Hello World 4 </<h4>
<h5>Hello World 5 </<h5>
<h6>Hello World 6 </<h6>

<h4><strong>PRÉ-REQUISITOS</strong></h4><p>Há algumas coisas que você deve saber com antecedência antes de começar a brincar com o React. Se você nunca usou JavaScript ou DOM antes, por exemplo, eu ficaria mais familiarizado com eles antes de tentar lidar com o React.</p><p>Aqui estão o que considero pré-requisitos do React.</p><ul><li>Familiaridade básica com <a href=  "https: translate.google.com/website?sl=en&amp;tl=pt&amp;hl=pt-BR&amp;client=webapp&amp;u=https: internetingishard.com/  ">HTML e CSS</a> .</li><li>Conhecimento básico de <a href=  "https: translate.google.com/website?sl=en&amp;tl=pt&amp;hl=pt-BR&amp;client=webapp&amp;u=https: www.digitalocean.com/community/tutorial_series/how-to-code-in-javascript  ">JavaScript</a> e programação.</li><li>Compreensão básica do <a href=  "https: www-taniarascia-com.translate.goog/introduction-to-the-dom/?_x_tr_sl=en&amp;_x_tr_tl=pt&amp;_x_tr_hl=pt-BR&amp;_x_tr_pto=wapp  ">DOM</a> .</li><li>Familiaridade com a <a href=  "https: www-taniarascia-com.translate.goog/es6-syntax-and-feature-overview/?_x_tr_sl=en&amp;_x_tr_tl=pt&amp;_x_tr_hl=pt-BR&amp;_x_tr_pto=wapp  ">sintaxe e recursos do ES6</a> .</li><li><a href=  "https: www-taniarascia-com.translate.goog/how-to-install-and-use-node-js-and-npm-mac-and-windows/?_x_tr_sl=en&amp;_x_tr_tl=pt&amp;_x_tr_hl=pt-BR&amp;_x_tr_pto=wapp  ">Node.js e npm</a> instalados globalmente.</li></ul><h2 style=  "margin-left:0px;  "><strong>O que é Reagir?</strong></h2><ul><li>React é uma biblioteca JavaScript - uma das mais populares, com <a href=  "https: translate.google.com/website?sl=en&amp;tl=pt&amp;hl=pt-BR&amp;client=webapp&amp;u=https: github.com/facebook/react  ">mais de 100.000 estrelas no GitHub</a> .</li><li>O React não é um framework (ao contrário do Angular, que é mais opinativo).</li><li>React é um projeto de código aberto criado pelo Facebook.</li><li>React é usado para construir interfaces de usuário (UI) no front-end.</li><li>React é a camada de <strong>visualização</strong> de um aplicativo MVC (Model View Controller)</li></ul><p>Um dos aspectos mais importantes do React é o fato de que você pode criar <strong>componentes</strong> , que são como elementos HTML personalizados e reutilizáveis, para construir interfaces de usuário de forma rápida e eficiente. O React também simplifica como os dados são armazenados e manipulados, usando <strong>state</strong> e <strong>props</strong> .</p><p>Analisaremos tudo isso e muito mais ao longo do artigo, então vamos começar.</p><h2 style=  "margin-left:0px;  "><br><strong>Configuração e instalação</strong></h2><p>Existem algumas maneiras de configurar o React, e mostrarei duas para que você tenha uma boa ideia de como funciona.<br>&nbsp;</p><h1>Arquivo HTML Estático</h1><p>Este primeiro método não é uma maneira popular de configurar o React e não é como faremos o resto do nosso tutorial, mas será familiar e fácil de entender se você já usou uma biblioteca como jQuery, e é o maneira menos assustadora de começar se você não estiver familiarizado com Webpack, Babel e Node.js.</p>
<p>Agora, vamos escrever nosso primeiro bloco de código do React. Vamos usar classes ES6 para criar um componente React chamado <code>App</code>.</p>
<pre>
  <code class=  "language-plaintext  ">
    class App extends React.Component {
      n
      ...
      n
    }
  </code>
</pre>

<p>Agora adicionaremos o <a href=  "https: translate.google.com/website?sl=en&amp;tl=pt&amp;hl=pt-BR&amp;client=webapp&amp;u=https: reactjs.org/docs/react-component.html%23render  "><code>render()</code></a>método, o único método necessário em um componente de classe, que é usado para renderizar nós DOM.</p>

<pre><code class=  "language-plaintext  ">
class App extends React.Component {
  n
    render() {  n
      return (  n
        ...  n
      );
    n
  }
  n
}
</code>
</pre>

<p>Dentro do <code>return</code>, vamos colocar o que parece ser um simples elemento HTML. Observe que não estamos retornando uma string aqui, então não use aspas ao redor do elemento. Isso se chama <code>JSX</code>, e aprenderemos mais sobre isso em breve.</p>
<pre>
<code class=  "language-plaintext  ">
  class App extends React.Component {
    n
    render()
    {
      n
      return &lt;h1&gt;Hello world!&lt;/h1&gt;
      n
    }
    n
  }
</code>
</pre>

<p>Por fim, vamos usar o <code>render()</code>método React DOM para renderizar a <code>App</code>classe que criamos no <code>root</code>div em nosso HTML.</p>
<pre>
  <code class=  "language-plaintext  ">
    ReactDOM.render(
      &lt;App /&gt;, document.getElementById('root')
    )
  </code>
</pre>


<p><br>
<pre>
<code>&lt;!DOCTYPE html&gt;</code><br><code>&lt;html&gt;</code><br><code>&nbsp; &lt;head&gt;</code><br><code>&nbsp; &nbsp; &lt;meta charset=  "utf-8  " /&gt;</code><br><br><code>&nbsp; &nbsp; &lt;title&gt;Hello React!&lt;/title&gt;</code><br><br><code>&nbsp; &lt;body&gt;</code><br><code>&nbsp; &nbsp; &lt;div id=  "root  "&gt;&lt;/div&gt;</code><br><br><code>&nbsp; &nbsp; &lt;script type=  "text/babel  "&gt;</code><br><code>&nbsp; &nbsp; &nbsp; class App extends React.Component {</code><br><code>&nbsp; &nbsp; &nbsp; &nbsp; render() {</code><br><code>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return &lt;h1&gt;Hello world!&lt;/h1&gt;</code><br><code>&nbsp; &nbsp; &nbsp; &nbsp; }</code><br><code>&nbsp; &nbsp; &nbsp; }</code><br><br><code>&nbsp; &nbsp; &nbsp; ReactDOM.render(&lt;App /&gt;, document.getElementById('root'))</code><br><code>&nbsp; &nbsp; &lt;/script&gt;</code><br><code>&nbsp; &lt;/body&gt;</code><br><code>&lt;/html&gt;</code><br>&nbsp;</p>
</pre>
<p>Agora, se você visualizar seu <code>index.html</code>no navegador, verá a <code>h1</code>tag que criamos renderizada no DOM.</p><p><img src=  "https: res.cloudinary.com/dw08nx3ad/image/upload/v1672667148/hello_world_497b8abb35.png  " alt=  "hello world  " srcset=  "https: res.cloudinary.com/dw08nx3ad/image/upload/v1672667148/thumbnail_hello_world_497b8abb35.png 245w,https: res.cloudinary.com/dw08nx3ad/image/upload/v1672667148/small_hello_world_497b8abb35.png 500w,https: res.cloudinary.com/dw08nx3ad/image/upload/v1672667149/medium_hello_world_497b8abb35.png 750w,https: res.cloudinary.com/dw08nx3ad/image/upload/v1672667149/large_hello_world_497b8abb35.png 1000w,  " sizes=  "100vw  ">
</p>`;
