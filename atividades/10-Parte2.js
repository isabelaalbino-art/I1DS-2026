/*
PARTE 2 – Condicionais (IF) (11 a 20)
11. Verifique se um número é positivo, negativo ou zero.
12. Verifique se um número é par ou ímpar.
13. Dado um número, verifique se é múltiplo de 3.
14. Verifique se um aluno foi:
       Aprovado (≥ 7)
       Recuperação (≥ 5 e < 7)
       Reprovado (< 5)
15. Verifique se uma pessoa pode votar (use regras reais).
16. Verifique se um número está entre 10 e 50.
17. Crie um sistema de login simples (usuário e senha).
18. Verifique o maior entre dois números.
19. Verifique o maior entre três números.
20. Classifique a idade:
       Criança
       Adolescente
       Adulto
       Idoso
       */

console.log(
  "====================================================================================================================",
);
let numero = -8;
if (numero > 0) {
  console.log("O numero é positivo!");
}
if (numero < 0) {
  console.log("O numero é negativo!");
}
if (numero == 0) {
  console.log("O numero é zero!");
}

console.log(
  "====================================================================================================================",
);

let num = 9;
if (num % 2 == 0) {
  console.log("O numero é par!");
}
if (num % 2 == 1) {
  console.log(" O numero é impar!");
}

console.log(
  "====================================================================================================================",
);

let valor = 30;
if (valor % 3 == 0) {
  console.log("O numero é multiplo de 3!");
} else {
  console.log("O numero não é multiplo de 3!");
}

console.log(
  "====================================================================================================================",
);

function notaAluno(nota) {
  let frase;
  if (nota < 5) {
    frase = "Você está reprovado!";
  } else if (nota >= 5 && nota < 6.9) {
    frase = "Você está de recuperação!";
  } else if (nota >= 7) {
    frase = "Você está aprovado!";
  }
  return frase;
}

let nota = 2;

console.log("Sua nota foi:", nota, "-", notaAluno(nota));

console.log(
  "====================================================================================================================",
);

let idade = 80;
if (idade < 16) {
  console.log("Não pode votar");
}

if (idade >= 18 && idade < 70) {
  console.log("Pode votar, e é obrigatório!");
} else {
  console.log("Voto opcional, e não é obrigatório!");
}

console.log(
  "====================================================================================================================",
);

let n = 5;
if (n >= 10 && n <= 50) {
  console.log("O numero está entre 10 e 50");
} else {
  console.log("O numero não esta entre 10 e 50");
}

console.log(
  "====================================================================================================================",
);

const login = "isa";
const senha = 1234;

let loginUser = "isa";
let senhaUser = 1234;

if (login === loginUser && senha === senhaUser) {
  console.log("Login bem sucedido!");
} else {
  console.log("Você não tem acesso!");
}

console.log(
  "====================================================================================================================",
);

let nm = 9;
let nm2 = 10;

if (nm > nm2) {
  console.log("O numero", nm, "é maior que o", nm2);
} else {
  console.log("O numero", nm2, "é maior que o", nm);
}
if (nm === nm2) {
  console.log("Os numeros sao iguais!");
}
console.log(
  "====================================================================================================================",
);

let nn = 17;
let nn2 = 17;
let nn3 = 17;

if (nn > nn2 && nn > nn3) {
  console.log("O numero", nn, " é o maior numero");
}
if (nn2 > nn && nn2 > nn3) {
  console.log("O numero", nn2, "é o maior!");
} else {
  console.log("O numero", nn3, "é o maior!");
}

console.log(
  "====================================================================================================================",
);

let i = 50;

if (i < 12) {
  console.log("É criança!");
}
if (i >= 12 && i < 18) {
  console.log("É Adolescente!");
}
if (i >= 18 && i < 65) {
  console.log("É adulto!");
}
if (i > 65) {
  console.log("É idoso!");
}
