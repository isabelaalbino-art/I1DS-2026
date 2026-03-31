/*
PARTE 4 – Laço FOR (26 a 35) 🚨
(TODOS DEVEM USAR for)
26. Exiba números de 1 a 100.
27. Exiba números de 100 até 1.
28. Exiba apenas números pares de 1 a 50.
29. Exiba apenas números ímpares de 1 a 50.
30. Calcule a soma de 1 até 100.
31. Calcule o fatorial de um número.
32. Exiba a tabuada de um número.
33. Conte quantos números pares existem entre 1 e 100.
34. Exiba todos os múltiplos de 5 entre 0 e 100.
35. Crie um programa que desenhe no console:
       *
       **
       ***
       ****
       *****

       */

//26
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

console.log(
  "==================================================================================",
);
//27
for (let i = 100; i >= 1; i--) {
  console.log(i);
}

console.log(
  "================================================================================",
);
//28
for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}

console.log(
  "================================================================================",
);
//29
for (let i = 1; i <= 50; i += 2) {
  console.log(i);
}

console.log(
  "================================================================================",
);
//30

let soma = 0;

for (let i = 1; i <= 100; i++) {
  soma = soma + i;
}

console.log(soma);

console.log(
  "================================================================================",
);
//31

function fatorial(n) {
  let resultado = 1;

  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
}

let Numero = 5;
console.log("Fatorial:", fatorial(Numero));

console.log(
  "================================================================================",
);
//32

let numTabuada = 5;

for (let i = 1; i <= 10; i++) {
  numTabuada * i;

  console.log(`${numTabuada} x ${i} = ${numTabuada * i}`);
}

console.log(
  "================================================================================",
);
//33

let total = 0;
for (let i = 2; i <= 100; i += 2) {
  total++;
}
console.log(total);

console.log(
  "================================================================================",
);
//34

for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
console.log(
  "================================================================================",
);
//35

for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

// PARTE 5
// ATIVIDADE 5 // 

 
//36
for (let i = 1; i <= 10; i++) { 

console.log(i); 

} 

console.log("================================================="); 

 //37

let sequencia3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

let somaA = 0 

 

for (let i = 0; i < sequencia3.length; i++) { 

somaA += sequencia3[i] 

 

} 

console.log("soma dos elementos é:", somaA); 

 //38

console.log("================================================="); 

 

let sequencia4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

let soma4 = 0 

 

for (let i = 0; i < sequencia4.length; i++) { 

soma4 += sequencia4[i] 

} 

let media = soma4 / sequencia4.length 

console.log("A média da sequencia é:", media) 

 

console.log("================================================="); 

 //39

let vetor3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

let maior = vetor3[0] 

for (let i = 1; i < vetor3.length; i++) { 

if (vetor3[i] > maior) { 

maior = vetor3[i]; 

} 

} 

 

console.log(maior) 

 

console.log("================================================="); 

 //40

let vetor4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
let menor = vetor4[0] 
for (let i = 1; i > vetor3.length; i++) { 
if (vetor4[i] < maior) { 
maior = vetor4[i];

} 

} 

console.log(menor) 

 

console.log("================================================="); 
//41
 
let nume3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
let pares = 0; 
let impares = 0; 


for (let i = 0; i < nume3.length; i++) { 
if (nume3[i] % 2 === 0) { 
pares++; 
} else { 
impares++; 

} 

} 

 

console.log("Quantidade de números pares:", pares); 

console.log("Quantidade de números ímpares:", impares); 

 

console.log("================================================="); 
//42
 

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

let resultado = []; 

 

for (let i = 0; i < vetor.length; i++) { 

if (vetor[i] !== undefined) { 

resultado[i] = vetor[i] * 2; 

} 

} 

 

console.log(resultado); 

 
// PARTE 6!!!!!!!

/*
PARTE 6 – Matrizes (43 a 50) 🚨
(USAR for ANINHADO)
43. Crie uma matriz 3x3 e exiba todos os valores.
44. Exiba a diagonal principal de uma matriz.
45. Exiba a diagonal secundária.
46. Some todos os elementos da matriz.
47. Encontre o maior valor da matriz.
48. Multiplique todos os valores por um número X.
49. Conte quantos valores são maiores que 10.
50. Crie uma matriz e exiba no formato:
[ 1 2 3 ]
[ 4 5 6 ]
[ 7 8 9 ]
*/

console.log("PARTE 6!");

//43
var mattriz = [
  [9, 6, 7],
  [3, 1, 4],
  [5, 8, 2],
];

console.table(mattriz);
//44
console.log("Primeira diagonal:");
console.log(mattriz[0][0]);
console.log(mattriz[1][1]);
console.log(mattriz[2][2]);
//45
console.log("Segunda diagonal");
console.log(mattriz[0][2]);
console.log(mattriz[1][1]);
console.log(mattriz[2][0]);

//46
let soma2 =0

for (let linha = 0; linha < mattriz.length; linha++)
  for (let coluna = 0; coluna < mattriz[0].length; coluna++)
    soma2 += mattriz[linha][coluna]

console.log("A soma é:", soma2)