//Criando funcao para gerar frases aleatorias 

function falar(){
    //Criando vetor de frases
    const frases = [
"Hoje esta um dia bonito!",
"Falta muito para sexta-feira",
"Qual o cardapio de hoje no almoco?",
"Vish, tem prova de matematica"

    ];


//Criando uma variavel para armazenar a DIV COM ID "tagarela"
let tagarela= document.getElementById("tagarela");

//variavel de controle para frase exibida
let controle = 0;

//gerando numero aleatorio entre 0 e 1  (lembrando que o 1 nao entra na contagem)
let numero = Math.random()

//obtendo indice de frase a ser usada
if (numero > 0.75) controle = 3;
 else if( numero >0.5) controle = 2;
else if(numero > 0.25) controle = 1;

//alterando conteudo da DIV "tagarela"
tagarela.innerHTML = frases[controle]; 
}