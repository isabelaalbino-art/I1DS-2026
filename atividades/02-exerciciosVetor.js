/*
    1. Crie um array de frutas com os seguintes elementos: Banana, Maçã,
    Pera, Uva, Morango.
    2. Adicione Tangerina no final.
    3. Adicione Goiaba no início.
    4. Exiba o conteúdo do índice 5.
    5. Exclua o elemento uva.
    6. Crie uma cópia do array apenas com os elementos com índices 2, 3 e 4.
*/

var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.log(frutas);
console.table(frutas);

console.log("O vetor tem", frutas.length, "elementos");

frutas.push("Tangerina");
console.table(frutas);
console.log("Agora o vetor tem", frutas.length, "elementos");

frutas.unshift("Goiaba");
console.table(frutas);
console.log("Agora o vetor tem", frutas.length, "elementos");

console.log(" A 6ª posição é", frutas[5]);

frutas.splice(4, 1);
console.table(frutas);
console.log("Agora o vetor tem", frutas.length, "elementos");

let lista = frutas.slice(2 , 5);
console.table(lista);
console.log("Agora o vetor tem", lista.length, "elementos");
