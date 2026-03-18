/*****************************************************
Lista de Exercícios
****************************************************/
/*
Crie uma função que receba a nota de um aluno e
retorne uma mensagem informando sua situação.


    Considere as seguintes regras:


        Nota menor que 5: reprovado
        Nota entre 5 e 6.9: recuperação
        Nota igual ou maior que 7: aprovado


    A função deve retornar uma frase indicando a situação do aluno.
*/

function nota(notaAluno) {
  let frase;

  if (notaAluno < 5) {
    frase = "Você está reprovado!";
  } else if (notaAluno >= 5 && notaAluno < 7) {
    frase = "Você está de recuperação!";
  } else if (notaAluno >= 7) {
    frase = " Você está aprovado!";
  }

  return frase;
}

let notas = 5;
console.log("Nota", notas, nota(notas));

function situacaoFinal(n1, n2, n3, n4) {
  let media = (n1 + n2 + n3 + n4) / 4;
  let situacao;

  if (media < 5) situacao = "Reprovado";
  else if (media < 7) situacao = "Recuperação";
  else situacao = "Aprovado";

  return "Media:" + media + " - Situação:" + situacao;
}

console.log(situacaoFinal(7, 8, 6, 5));
