//==================================== Funções ====================================

// function - usado para criar uma função, que é um bloco de código que pode ser reutilizado
function chamada() {
    console.log("Função chamada");
}

chamada(); //chamando a função


// function sem parâmetros - usado para criar uma função que não recebe parâmetros
function saudacao() {
    console.log("Olá, mundo!");
}

saudacao(); //chamando a função sem parâmetros


// function com return - usado para criar uma função que recebe parâmetros, são valores que podem ser passados para a função
function soma(a, b) {
    return a + b; //return - usado para retornar um valor da função
}   
console.log(soma(10, 15)); //chamando a função com parâmetros


// function sem return - usado para criar uma função que recebe parâmetros, mas não retorna um valor
function saudacao(nome) {
    console.log("Olá, " + nome);
}
saudacao("João"); //chamando a função com um parâmetro


// function anônima - usado para criar uma função sem nome, que pode ser atribuída a uma variável
let multiplicacao = function(a, b) {
    return a * b;
}
console.log(multiplicacao(5, 3)); //chamando a função anônima

//==================================== Função Arrow ====================================

// função arrow - usado para criar uma função de forma mais concisa, utilizando a sintaxe de flecha (=>)
let divisao = (a, b) => {
    return a / b;
}
console.log(divisao(10, 2)); //chamando a função arrow


//arrrow resumida
let potencia = (a, b) => a ** b; //função arrow resumida, sem chaves e return implícito
console.log(potencia(2, 3)); //chamando a função arrow resumida

//==================================== Escopo ====================================

// escopo - usado para definir a visibilidade de variáveis e funções, ou seja, onde elas podem ser acessadas
function escopo() {
    let local = "Variável local";
    console.log(local); //variável local, só pode ser acessada dentro da função
}
escopo();//chamando a função para acessar a variável local

// escopo global - variáveis declaradas fora de qualquer função, podem ser acessadas em qualquer parte do código
let global = "Variável global";
function acessarGlobal() {
    console.log (global); //variável global, pode ser acessada dentro da função
}
acessarGlobal(); //chamando a função para acessar a variável global  


//==================================== Callback ====================================

// callback - usado para passar uma função como argumento para outra função, permitindo que a função chamada execute
// a função passada como argumento

function saudacao(nome) {
    console.log("Olá, " + nome);
}
function processarEntrada(callback) {
    let nome = "Maria";
    callback(nome); //chamando a função callback, passando o nome como argumento
}
processarEntrada(saudacao); //chamando a função processarEntrada, passando a função saudacao como argumento


// callback com arrow function
function processarEntrada(callback) {
    let nome = "Carlos";
    callback(nome); //chamando a função callback, passando o nome como argumento
}
processarEntrada((nome) => {
    console.log("Olá, " + nome);
}); //chamando a função processarEntrada, passando uma função arrow como argumento

//==================================== Exemplo Completo ====================================
function calcularMedia(nota1, nota2) {// função para calcular a média de duas notas, recebendo as notas como parâmetros

    let mediaFinal = (nota1 + nota2) / 2// calculando a média final, somando as notas e dividindo por 2

    return mediaFinal// retornando a média final para ser utilizada fora da função

}

let resultadoMedia = calcularMedia(8, 10)// chamando a função calcularMedia, passando as notas 8 e 10 como argumentos

if (resultadoMedia >= 7) {// verificando se a média é maior ou igual a 7, para determinar se o aluno foi aprovado ou reprovado

    console.log(`Aprovado com média ${resultadoMedia}`)// se a média for maior ou igual a 7, exibe a mensagem de aprovado

} else {// se a média for menor que 7, exibe a mensagem de reprovado com a média calculada

    console.log(`Reprovado com média ${resultadoMedia}`)// se a média for menor que 7, exibe a mensagem de reprovado com a média calculada

}
