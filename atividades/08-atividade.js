/*
 Desenvolva um programa em JavaScript que:
Armazene a matriz em uma variável (array bidimensional)
Utilize laço for para percorrer a matriz
Imprima somente os elementos da diagonal principal
*/
var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];

console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++)
  for (let coluna = 0; coluna < matriz[linha].length; coluna++)
    if (linha === coluna)
      console.log("Matriz[", linha, ",", coluna, "] =", matriz[linha][coluna]);

console.log(
  "===================================================================================",
);
/*

Considere a matriz:
| 8 1 3 |
| 2 9 1 |
| 4 6 2 |

👉 Desenvolva um programa em JavaScript que:
Armazene a matriz
Defina um valor x (ex: let x = 2)
Imprima a matriz original usando for
Utilize laços for para multiplicar todos os elementos por x
Imprima a matriz após a multiplicação
 */

let matriz2 = [
  [8, 1, 3],
  [2, 9, 1],
  [4, 6, 2],
];

for (let linha = 0; linha < matriz.length; linha++)
  for (let coluna = 0; coluna < matriz[0].length; coluna++)
    console.log("Matriz[", linha, ",", coluna, "] =", matriz[linha][coluna]);



