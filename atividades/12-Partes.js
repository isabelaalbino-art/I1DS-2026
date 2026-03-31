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

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

console.log(
  "==================================================================================",
);

for (let i = 100; i >= 1; i--) {
  console.log(i);
}

console.log("================================================================================")

for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}
    
console.log("================================================================================")

for (let i = 1; i <= 50; i += 2) {
  console.log(i);
}


console.log("================================================================================")


let soma = 0;

for (let i = 1; i <= 100; i++) {
  soma = soma + i; 
}

console.log(soma);

console.log("================================================================================")

function fatorial(n) {
let resultado = 1;

for (let i = 1; i <= n; i++) {
resultado *= i;
}

return resultado;
}

let Numero = 5;
console.log("Fatorial:", fatorial(Numero));


console.log("================================================================================")


let numTabuada = 5;

for (let i = 1; i <= 10; i++) {
  numTabuada *i; 

console.log(`${numTabuada} x ${i} = ${numTabuada * i}`);
}