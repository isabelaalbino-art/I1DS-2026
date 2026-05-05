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
    if (i % 2 == 1 ) console.log (i);
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

//Laço de repeticao - While/ Do While
//
//While testa a condiçao antes de entrarv no laço de repeticao
// se a condicao for incialmente falsa, o laco nao é executado nenhuma vezes 

var x = 11;

while (x > 10){
    console.log("Entrei no laco while...")
    x= 0 
}
console.log("terminei")

//somar enquanto (while) meno que 10

var somar = 0;//variavel para armazenar a soma dos numeros
var num = 0//variavel para aumentar 1 em 1
while (somar < 10){
    somar+=num // somo o numeor atual com o que ja existe na variavel
    num++ // variavel de controle para while funcionar
    console.log('somando...',somar)
    console.log('numero...',num)
}