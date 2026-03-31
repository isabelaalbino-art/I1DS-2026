/*PARTE 3 – Switch Case (21 a 25)
21. Dado um número de 1 a 7, exiba o dia da semana.
22. Dado um mês (1 a 12), exiba o nome do mês.
23. Dado um mês, informe o trimestre.
24. Crie um menu simples:
       1: Somar
       2: Subtrair
       3: Multiplicar
       4: Dividir
25. Sistema de avaliação:
       A → Excelente
       B → Bom
       C → Regular
       D → Ruim
       /
       */

let dia = 3;

switch (dia) {
  case 1:
    console.log("Segunda-feira");
    break;

  case 2:
    console.log("Terça-feira");
    break;

  case 3:
    console.log("Quarta-feira");
    break;

  case 4:
    console.log("Quinta-feira");
    break;

  case 5:
    console.log("Sexta-feira");
    break;

  case 6:
    console.log("Sabado");
    break;

  case 7:
    console.log("Domingo");
    break;

  default:
    console.log("Dia não válido");
    break;
}

console.log(
  "==================================================================================================",
);

let mes = 5;

switch (mes) {
  case 1:
    console.log("Janeiro");
    break;

  case 2:
    console.log("Fevereiro");
    break;

  case 3:
    console.log("Março");
    break;

  case 4:
    console.log("Abril");
    break;

  case 5:
    console.log("Maio");
    break;

  case 6:
    console.log("Junho");
    break;

  case 7:
    console.log("Julho");
    break;

  case 8:
    console.log("Agosto");
    break;

  case 9:
    console.log("Setembro");
    break;

  case 10:
    console.log("Outubro");
    break;

  case 11:
    console.log("Novembro");
    break;

  case 12:
    console.log("Dezembro");
    break;

  default:
    console.log("Mês não encontrado");
    break;
}

let Mes = 5;
switch (Mes) {
  case 1:
  case 2:
  case 3:
    console.log("Primeiro trimestre");
    break;

  case 4:
  case 5:
  case 6:
    console.log("Segundo trimestre");
    break;

  case 7:
  case 8:
  case 9:
    console.log("Terceiro trimestre");
    break;

  case 10:
  case 11:
  case 12:
    console.log("Quarto trimestre");
    break;

  default:
    console.log("Erro");
    break;
}

console.log(
  "====================================================================================",
);

let conta = 1;
let n1 = 10;
let n2 = 5;
let resultado;

switch (conta) {
  case 1:
    resultado = n1 + n2;
    console.log("Resultado da Soma: ", resultado);
    break;

  case 2:
    resultado = n1 - n2;
    console.log("Resultado da Subtração: ", resultado);
    break;

  case 3:
    resultado = n1 * n2;
    console.log("Resultado da Multiplicação: ", resultado);
    break;

  case 4:
    if (n2 !== 0) {
      resultado = n1 / n2;
      console.log("Resultado da Divisão: ", resultado);
    }
    break;

  default:
    console.log("Opção inválida!");
    break;
}

console.log(
  "==========================================================================",
);

let notas = "B";

switch (notas) {
  case "A":
    console.log("Exelente");
    break;

  case "B":
    console.log("Bom");
    break;

  case "C":
    console.log("Regular");
    break;

  case "D":
    console.log("Ruim");
    break;

  default:
    console.log("Nota não válida!");
    break;
}
