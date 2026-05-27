//======================================== VARIAVEIS ========================================

//let - usado para criar variaveis que podem ser alteradas depois
let username = "Orlando";

username = "Maria";

console.log(username);

//const - usado para criar variaveis que não podem ser alteradas depois
const password = "123456";
//password = "654321"; // isso vai dar erro

console.log(password);

//var - forma antiga de criar variaveis, não recomendado usar
var numero = 3;

console.log(numero);

//======================================== TIPO DE DADOS ========================================

//string - texto
let name = "Orlando";

console.log(name);

//number - numeros
let numero2 = 30;

console.log(numero2);

//boolean - true ou false
let isstudent = true;//let isstudent = false;

console.log(isstudent);

//null - valor nulo ou sem valor
let idade = null;

console.log(idade);

//undefined - valor indefinido
let endereco;

console.log(endereco);

//object - objeto
let pessoa = {
    name: "orlando",
    idade: 17,
    estudante: "engenharia de software"
}

console.log(pessoa);

//array - lista de valores 
let frutas = ["maça", "banana", "laranja"];

console.log(frutas);

//======================================== OPERADORES ========================================

//operadores aritmeticos
let a = 10;
let b = 15;

console.log(a + b); //soma
console.log(a - b); //subtração
console.log(a * b); //multiplicação
console.log(a / b); //divisão
console.log(a % b); //resto da divisão

//operadores de comparação
console.log(a > b); //maior que
console.log(a < b); //menor que
console.log(a >= b); //maior ou igual
console.log(a <= b); //menor ou igual
console.log(a === b); //igual
console.log(a !== b); //diferente
console.log(a ** b); //potenciação

//operadores lógicos
let c = true;
let d = false;

console.log(c && d); //e
console.log(c || d); //ou
console.log(!c); //não

//======================================== if e else e ========================================

//if - usado para executar um bloco de código se uma condição for verdadeira
let idade2 = 18;

if (idade2 >= 18) {
    console.log("Você é maior de idade");
}

//else - usado para executar um bloco de código se a condição do if for falsa
else {
    console.log("Você não é maior de idade");
}

//else if - usado para executar um bloco de código se uma condição for verdadeira, caso contrário, verifica outra condição
let nota = 7;

if (nota >= 7) {
    console.log("Aprovado");
}
else if (nota >= 5) {
    console.log("Recuperação");
}
else {
    console.log("Reprovado");
}

//======================================== switch case ========================================

//switch case - usado para varias condições, onde cada condição é verificada e um bloco de código é executado
let semafaro = "verde";

switch (semafaro) {
    case "vermelho":
        console.log("Pare");
        break;

    case "amarelo":
        console.log("Atenção");
        break;

    case "verde":
        console.log("Siga");
        break;
}

//======================================== loop for ========================================

//for - usado para repetir um bloco de código um número específico de vezes
for (let numero = 1; numero <= 5; numero++) {

    console.log(numero);
}

//======================================== loop while ========================================

//while - usado para repetir um bloco de código enquanto uma condição for verdadeira
let j = 0;

while (j <= 10) {
    console.log(j);
    j++;
}

///======================================== template String ========================================

//template String - usado para criar strings com variáveis e expressões
let nome = "Orlando";
let idade3 = 17;
let mensagem = `Meu nome é ${nome} e minha idade é de ${idade3} anos.`;

console.log(mensagem);