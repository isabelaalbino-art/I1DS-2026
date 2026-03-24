//    laço de repetição -> FOR (PARA)
// O professor te colocou de castigo e e pediu para você escrever mil vezes a frase 
//"Eu vou prestar atenção ás aulas e anotar tudo!"

// primeiro utilizo uma variavel de controle
// 1 < 1000 => condição de repeticão 
// i++ => aumenta a variavel de controle para não travar e somar 
for (let i = 0; i < 1000; i++) { // i++ -> i = i + 1

console.log("Eu vou prestar atenção ás aulas e anotar tudo!");
   
}
console.log("----------------------------------------------------------------")
// Escreva todos os numeros de 1 a 20
for (let i = 1; i <= 20; i++) {
    console.log(i)
    
}
 console.log("-----------------------------------------------------")
// Escreva todos os numeros pares entre o 1 e o 20
for (let i = 0; i < 20; i +=2 ){
    console.log(i)

}
console.log("-------------------------------------------")

// outra solução de numeros pares
for (let i = 1; i  <=20; i++) {
    if (i % 2 == 0 ) console.log (i);
   // $ => resto da divisao
   // i % 2 == 0 => se o resto da divisao de i por 2 for 0, ele mostra i 
    
}
console.log("---------------------------------------------")

// dado um vetor (array), calcule e exiba o somatorio de seus elementos
var numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];
let soma = 0;

console.log(numeros.length);
// numeros.length => Mostra a quantidade de intens do array

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
    
}
console.log(soma);