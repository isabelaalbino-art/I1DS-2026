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

// pop -> Remover um elemento do final do vetor (ultimo elemento)
dinos.pop();
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos");

//shift -> Remove um elemento do inicio do vetor (primeiro elemento)
dinos.shift();
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos");

//splice -> Remove um elemento a partir de um indice, e tambem precisa ser informada a quantidade de registro a ser excluido a partir de um indice
dinos.splice(1, 1); // Remove somente o segundo item da lista
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos");

// Adicionar mais elemento ao vetor
dinos.push("Pterodáctio");
dinos.push("Estegossauro");
dinos.push("Argentinossauro");

//Procurar um elemento a partir do nome (descrição)
//IndexOf (procurado) -> retorna o indice do elementono vetor
let procurado = "Estegossauro";
let indice = dinos.indexOf(procurado);
console.log("O", procurado, "está no indice:", indice);
// indexOf(procurado -> retorna -1 caso não encontre o elemento
    procurado ="Cristianossauro"
indice = dinos.indexOf(procurado);
console.log("O", procurado, "está no indice:", indice);

// Excluir um elemento com base em seu nome
// 1º localizar o indice do elemento a partir do nome 
// 2º excluir o registro com base no indice retornado


procurado = "Estegossauro";
indice = dinos.indexOf(procurado);
console.log("O", procurado, "está no indice:", indice);
dinos.splice (indice, 1);
console.table(dinos);

// Alterar o valor de um elemento a partir do indice 
dinos[1] = "Anquilossauro"
console.table(dinos);



