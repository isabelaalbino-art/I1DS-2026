/*PARTE 1 – Variáveis, Operações e Lógica (1 a 10)
1. Crie variáveis para nome, idade e cidade. Exiba uma frase completa.
2. Crie duas variáveis numéricas e exiba:
      soma
      subtração
      multiplicação
      divisão
      resto da divisão
3. Calcule a área de um retângulo.
4. Calcule o volume de um paralelepípedo.
5. Dado o valor de um produto, calcule: 10% de desconto | valor final
6. Converta temperatura de Celsius para Fahrenheit.
7. Calcule o IMC e exiba o valor.
8. Calcule a média de 3 notas.
9. Calcule o delta de uma equação de 2º grau.
10. Dado um valor em horas, converta para minutos e segundos.
*/





let nome = "Isabela"; 
let idade = 16; 
let cidade = "Itapui"; 
console.log("Olá, meu nome é ", nome,  ", tenho ", idade, " anos e moro em ", cidade , "."); 
 
console.log("--------------------------------------------------------------------------------------------------------------------------------")

let num1 = 10; 
let num2 = 5; 
console.log("Soma:", num1 + num2); 
console.log("Subtração:", num1 - num2); 
console.log("Multiplicação:", num1 * num2); 
console.log("Divisão:", num1 / num2); 
console.log("Resto da divisão:", num1 % num2); 
 


console.log("--------------------------------------------------------------------------------------------------------------------------------")


let base = 10; 
let altura = 5; 
let areaRetangulo = base * altura; 
console.log("Área do Retângulo:", areaRetangulo); 
 

console.log("--------------------------------------------------------------------------------------------------------------------------------")


//  (Comprimento * Largura * Altura) 
let comprimento = 10; 
let largura = 5; 
let altParal = 2; 
let volume = comprimento * largura * altParal; 
console.log("Volume do Paralelepípedo:", volume); 
 
console.log("--------------------------------------------------------------------------------------------------------------------------------")


let precoOriginal = 100; 
let desconto = precoOriginal * 0.10; 
let valorFinal = precoOriginal - desconto; 
console.log("Desconto de 10%:", desconto); 
console.log("Valor Final com desconto:", valorFinal); 
 


console.log("--------------------------------------------------------------------------------------------------------------------------------")


//  Celsius para Fahrenheit (C * 1.8 + 32) 

let celsius = 30; 
let fahrenheit = (celsius * 1.8) + 32; 
console.log(celsius + "°C equivalem a " + fahrenheit + "°F"); 
 

console.log("--------------------------------------------------------------------------------------------------------------------------------")

// Cálculo de IMC (Peso / Altura²) 
let peso = 60; 
let alturaPessoa = 1.65; 
let imc = peso / (alturaPessoa * alturaPessoa); 
console.log("O valor do IMC é:", imc.toFixed(2)); 
 

console.log("--------------------------------------------------------------------------------------------------------------------------------")

let nota1 = 8; 
let nota2 = 7; 
let nota3 = 9; 
let media = (nota1 + nota2 + nota3) / 3; 
console.log("A média das notas é:", media.toFixed(1)); 
 

console.log("--------------------------------------------------------------------------------------------------------------------------------")


// Delta (b² - 4ac)


let a = 1; 
let b = -5; 
let c = 6; 
let delta = (b * b) - (4 * a * c); 
console.log("O valor de Delta é:", delta); 

console.log("--------------------------------------------------------------------------------------------------------------------------------")

let horas = 2; 
let minutos = horas * 60; 
let segundos = minutos * 60; 
console.log(horas + " horas são " + minutos + " minutos e " + segundos + " segundos."); 
