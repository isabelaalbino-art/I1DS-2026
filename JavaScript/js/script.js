//Variavel para armazenar o elemento <p> com id=contador 
let contador = document.getElementById("contador")

const aumentar = () =>{
    //variavel para armazenar o valor atual
    let valorAtual = parseInt(contador.innerHTML);
    //aumenta o valor atual em +1
    valorAtual++;
    //atualizar o valor do elemento <p> com id=contador 
    contador.innerHTML = valorAtual

}

const diminuir = () =>{
    //variavel para armazenar o valor atual
    let valorAtual = parseInt(contador.innerHTML);
  
    valorAtual--;
    //atualizar o valor do elemento <p> com id=contador 
    contador.innerHTML = valorAtual

}

const zerar = () =>{
    //variavel para armazenar o valor atual
    let valorAtual = 0
 
    contador.innerHTML = valorAtual
    
}

//=================================================================EXERCICIO 2===========================================================

const mudarCor = () => {
    // Capturar a cor selecionada pelo usuário
    let cor = document.getElementById("colorPicker").value;

    //Buscar o elemento-alvo (quadrado)
    let quadrado = document.getElementById("quadrado");

    //Aplicar a cor ao element. (alterar o estilo(css) do background-color)
    quadrado.style.backgroundColor = cor;
}

//=================================================================EXERCICIO 3===========================================================

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let resultado = document.getElementById("resultado");

const somar = () => {
    let valor = parseFloat(num1.value) + parseFloat(num2.value);
    resultado.innerText = valor;

}

const subtracao = () => {
    let valor = parseFloat(num1.value) - parseFloat(num2.value);
    resultado.innerText = valor;

}

const multiplicacao = () => {
    let valor = parseFloat(num1.value) * parseFloat(num2.value);
    resultado.innerText = valor;

}
