// Desvio Condicional - IF-ELSE

/* Condoção simples com IF
Sintaxe if( condição ){
    coigo a ser executado, se verdadeiro
}
*/

let anoNascimento = 2003;

if (anoNascimento > 2003) {
  console.log("A pesssoa nasceu depois de 2003.");
}

if (anoNascimento < 2003) {
  console.log(" A pessoa nasceu antes de 2003.");
}

if (anoNascimento == 2003) {
  console.log(" A pessoa nasceu em 2003.");
}

// Condicional IF - ELSE
anoNascimento = 2000;
if (anoNascimento > 2000) {
  console.log(" A pessoa nasceu depois de 2000.");
} else {
  console.log(" A pessoa nasceu antes de 2000.");
}

//Condicional composta com IF

const login = "admin";
const senha = "12345";

let loginUser = "admin";
let senhaUser = "12345";

if (loginUser == login && senhaUser == senha) {
  console.log(" Login realizado com sucesso!");
} else {
  console.log("Acesso negado!");
}

// Desvios aninhados - IF-ELSE-IF-ELSE ...

let semafaro = "vermelho";

if (semafaro == "vermelho") {
  console.log(" PARE ");
} else if (semafaro == "amarelo") {
  console.log("ATENÇÃO");
} else if (semafaro == "verde") {
  console.log(" SIGA");
} else {
  console.log("Opção Incorreta");
}

// Crindo variaveis locais ( so existem dentro do bloco onde foram criadas )

let mes = "agosto";
let dia = 15;

if (dia == 15 && mes == "agosto") {
  let mensagem = "Hoje é dia 15 de agosto!";
  console.log(mensagem);
}
console.log(
  "Tentando acessar variavel 'mensagem' fora do espaço do IF, vai dar erro!!!",
);
//console.log(mensagem)

/******************************************************************* */
// IF Ternario (IF Inline)

let preco = 500;
let resultado = preco <= 100 ? "Ta barato" : "Vish, ta caro!";
console.log("Preço:", preco, "-", resultado);

//O codigo de cima faz examenete a mesma coisa que o de baixo

if (preco <= 100) {
  resultado = "Ta barato";
} else {
  resultado = "Vish, ta caro!";
}
//console.log(first);
console.log("Preço:", preco, "-", resultado);
