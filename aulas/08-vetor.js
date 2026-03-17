//Criando variaveis do tipo Array (Vetor)

var dinos = ["Tiranosauro Rex", "Estegossauro", "Brontosauro", "Ticeráptops "];

//Imprimindo os dados em forma de linha
console.log(dinos);
//Imprimindo os dados em froma de tabela
console.table(dinos);

// lenght -> "Tamanho" de Array (Quantidade de elementos)
console.log("O Vetor tem", dinos.length, "elementos");

//Imprimir Elemento a partir do indice
console.log(dinos[2]);

//push -> Adiciona um novo elemento no final da fila
dinos.push("Anquilossauro");
console.table(dinos);
console.log("O Vetor agora tem", dinos.length, "elementos");

//unshift -> Adicona um novo elemento no inicio da final
dinos.unshift("Velociraptor");
console.table(dinos);
console.log("O Vetor agora tem", dinos.length, "elementos");

//Obter um elemento a partir do indice
console.log("1ª posição:", dinos[0]);
console.log("4ª posição:", dinos[3]);
console.log("20ª posição: (não existe);", dinos[20]);
