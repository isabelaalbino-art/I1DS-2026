//Criando uma variavel para armazenar a DIV com id="lampada"
let lampada = document.getElementById("lampada");

//Criando funcao para a criacao da DIV "lampada" para verde

function acenderVerde(){
    lampada.style.backgroundColor = "green"
}

//Criando funcao para a criacao da DIV "lampada" para vermelho

function acenderVermelho(){
    lampada.style.backgroundColor = "red"
}

// Criando funcao (arrow function) para trocar cor de acordo com o parametro 
const acender = (cor) =>{
    lampada.style.backgroundColor = cor;
}