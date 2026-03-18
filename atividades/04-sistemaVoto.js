/*****************************************************
            Atividade / Desafiadora
*****************************************************/
/*
    Crie uma função que receba a idade de uma pessoa e
    retorne uma frase dizendo se ela pode votar ou não, 
    e se o voto é obrigatório ou opcional.
*/

function podeVotar(idade) {
  if (idade < 16) {
    return "Não pode votar";
  }

  if (idade >= 18 && idade < 70) {
    return "Pode votar, e é obrigatório!";
  }

  return "Voto opcional, e não é obrigatório!";
}

let idade = 40;

console.log("Idade:", idade, "anos e você:", podeVotar(idade));

