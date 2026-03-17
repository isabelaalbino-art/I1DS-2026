/*****************************************************
Lista de Exercícios
*****************************************************/
/*
1. Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa a retorne sua idade.


2. Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Kms ele pode viajar com esse combustível. Considere que o
 veículo faz uma média de 12 Km/L.
*/

function subtracao(anoAtual, anoNascimento){
  let idadeAtual = anoAtual - anoNascimento;
  return idadeAtual;
}

let anoAtual = 2026
let anoNascimento = 1998


console.log("-------------------------------------------------------------------------------");
console.log (" A idade atual de quem nasceu em 1998 é:", subtracao(anoAtual, anoNascimento));
console.log("-------------------------------------------------------------------------------");


