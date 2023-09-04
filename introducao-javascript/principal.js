alert("arquivo funciona");

//-------------------------------------------------
//daqui pra baixo começa o js do site

//busca no site pelo titulo e armazena ele dentro da variavel titulo 
let titulo = document.querySelector(".titulo");
//mostra no devtools o conteudo de texto da variavel titulo para fins testes
console.log(titulo.textContent);
//altera o conteudo da variavel titulo para o texto desejado
titulo.textContent = "Fica Grande Nutrição";