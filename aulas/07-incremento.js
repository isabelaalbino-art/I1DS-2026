//Operadores de incremento e decremento | pré e pós incremnetos 
// Incremneto => somar algo a alguma variavel
// Decremento => subtrair algo de alguma variavel 

let idade = 16;
console.log(idade);

//idade = idade + 1; // Somei 1 na idade
idade++;
console.log(idade);
idade++
console.log(idade);
console.log("-------------------------------");


//idade = idade - 1; // Somei 1 na idade
idade--;
console.log(idade);
idade--;
console.log(idade);
console.log("-------------------------------");


let novaIdade = idade + 1; // Idade ++ soma na mesma variavel 
console.log("idade:", idade, " | Nova Idade:", novaIdade);

novaIdade = ++idade;
console.log("idade:", idade, " | Nova Idade:", novaIdade);