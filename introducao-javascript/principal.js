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
let paciente = document.querySelectorAll(".paciente");
console.log(paciente);

//criaçao looping for
for(i = 0; i<paciente.length; i++){

    let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");


let paciente = paciente[i];
let peso = tdPeso.textContent;
let altura = tdAltura.textContent;



let tdImc = paciente.querySelector(".info-imc")


//validação de dados

let pesoEhValido = true;
let alturaEhValida = true;



//verifica se o peso é valido
if(peso <= 0 || peso >= 3){
    console.log("Peso inválido!");
    tdImc.textContent = "peso inválido!"
    let pesoEhValido = false;
}


//verifica se a altura é valida
if(altura <= 0 || altura >= 3){
    tdImc.textContent = "Altura invalida!";
    let alturaEhValida = false;
}

//verifica se o peso e a altura são validos
if(pesoEhValido && alturaEhValida){
    let imc = peso / (altura*altura); 
    tdImc.textContent = imc;
}else{
    tdImc.textContent = "Altura e/ou peso invalido"
}





}


