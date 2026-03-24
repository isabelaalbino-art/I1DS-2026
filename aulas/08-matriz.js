// Criando uma matriz

var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [6, 2, 8],
  [1, 3, 9],
];

console.table(matriz);

//Obtemos elementos com base e seus indices

console.log(matriz[(0, 1)]);
console.log(matriz[2][0]);
console.log(matriz[1][2]);

console.log("-------------------------------------------------------");

// ****************************************************************************8
//                                  EXERCICO
/*
1. crie uma matri 3x3
2. imprima os valores da diagonal pricipais ]
3. Altere os valores do item matriz [1][2] para 20 e matriz [2][0] para 30
*/

var mattriz = [
  [9, 6, 7],
  [3, 1, 4],
  [5, 8, 2],
];

console.table(mattriz);

console.log("Primeira diagonal:");
console.log(mattriz[0][0]);
console.log(mattriz[1][1]);
console.log(mattriz[2][2]);

console.log("Segunda diagonal:");
console.log(mattriz[0][2]);
console.log(mattriz[1][1]);
console.log(mattriz[2][0]);


mattriz[1][2] = 20
mattriz[2][0] = 30

console.table(mattriz)