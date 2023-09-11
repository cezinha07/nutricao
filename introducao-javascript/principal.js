alert("arquivo funciona");

//-------------------------------------------------
//daqui pra baixo começa o js do site

//mudanças no titulo
//busca no site pelo titulo e armazena ele dentro da variavel titulo 
let titulo = document.querySelector(".titulo");
//mostra no devtools o conteudo de texto da variavel titulo para fins testes
console.log(titulo.textContent);
//altera o conteudo da variavel titulo para o texto desejado
titulo.textContent = "Fica Grande Nutrição";

//mudanças na tabela
//armazena na variavel paciente o dados do primeiro paciente
let paciente = document.querySelector("#primeiro-paciente");
console.log(paciente);

let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");


let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let imc = peso / (altura*altura);
console.log(imc);

let tdImc = paciente.querySelector(".info-imc")
tdImc.textContent = imc;

//validação de dados
if(peso <= 0 || peso >= 3){
    console.log("Peso inválido!");
    tdImc.textContent = "peso inválido!"
}

//DESAFIO!!
//FAZER APARECER O ERRO "PESO INVÁLIDO"
//NA CÉLULA DO IMC NA TABELA
