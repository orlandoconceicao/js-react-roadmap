//============================== ES6+ JavaScript ==============================
/*
ES6+ são versões modernas do JavaScript.

Trouxeram recursos importantes para:
- escrever menos código
- deixar o código mais limpo
- facilitar desenvolvimento moderno
- React
- Node.js
- APIs
*/

//============================== Arrow Functions ==============================
// Arrow Function é uma forma moderna de criar funções.


//============================== function normal ==============================

function calcularSoma(valorA, valorB) {

    return valorA + valorB

}

console.log(calcularSoma(10, 5))


//============================== arrow function ==============================

const calcularSomaArrow = (valorC, valorD) => {

    return valorC + valorD

}

console.log(calcularSomaArrow(10, 5))


//============================== arrow resumida ==============================
// quando a função tem apenas uma expressão, podemos omitir as chaves e o return.
const calcularMultiplicacao = (valorE, valorF) => valorE * valorF

console.log(calcularMultiplicacao(5, 5))


//============================== spread array ==============================
// spread junta ou copia os elementos de um array em outro array.

let numerosBaseLista = [1, 2, 3]

let numerosNovaLista = [...numerosBaseLista, 4, 5, 6]

console.log(numerosNovaLista)


//============================== spread objeto ==============================
// spread também pode ser usado para objetos.

let clientePrincipal = {

    nomeCliente: "Carlos",
    idadeCliente: 20

}

let clienteCompletoSistema = {

    ...clientePrincipal,
    cidadeCliente: "São Paulo"

}

console.log(clienteCompletoSistema)


//============================== destructuring objeto ==============================
// destructuring extrai valores de um objeto.

let usuarioPainel = {

    nomePainelUsuario: "Ana",
    idadePainelUsuario: 18

}

let {
    nomePainelUsuario: nomePainel,
    idadePainelUsuario: idadePainel
} = usuarioPainel

console.log(nomePainel)

console.log(idadePainel)


//============================== destructuring renomeando ==============================
// também é possível renomear as variáveis ao extrair os valores do objeto.
let produtoEstoque = {

    nomeProdutoEstoque: "Notebook",
    valorProdutoEstoque: 5000

}

let {
    nomeProdutoEstoque: tituloProduto,
    valorProdutoEstoque: precoProduto
} = produtoEstoque

console.log(tituloProduto)

console.log(precoProduto)


//============================== destructuring array ==============================
// destructuring também pode ser usado para arrays, onde os valores são extraídos com base na posição.
let listaCoresProjeto = ["Azul", "Verde", "Vermelho"]

let [corAzul, corVerde, corVermelha] = listaCoresProjeto

console.log(corAzul)

console.log(corVerde)

console.log(corVermelha)


//============================== optional chaining ==============================
// optional chaining é um recurso que permite acessar propriedades de objetos de forma segura, evitando erros quando uma propriedade não existe.
let clienteSemEndereco1 = {}

console.log(clienteSemEndereco1?.endereco?.cidade)


//============================== sem optional chaining ==============================
// sem optional chaining, acessar uma propriedade inexistente resultaria em um erro.
let cadastroSemEndereco = {}

console.log(cadastroSemEndereco.endereco)


//============================== if else ==============================
// estrutura de controle de fluxo que permite executar diferentes blocos de código com base em uma condição.
let idadeSistemaPessoa = 18

if (idadeSistemaPessoa >= 18) {

    console.log("Maior de idade")

} else {

    console.log("Menor de idade")

}


//============================== ternário ==============================
// operador ternário é uma forma mais concisa de escrever um if else, onde a expressão é avaliada e retorna um valor com base na condição.
let idadeUsuarioCadastro = 18

let resultadoSistemaIdade = idadeUsuarioCadastro >= 18
    ? "Maior de idade"
    : "Menor de idade"

console.log(resultadoSistemaIdade)


//============================== ternário HTML ==============================
// o operador ternário também pode ser usado para criar estruturas HTML com base em uma condição.
let acessoUsuarioSistema = true

let estruturaMensagemHTML = acessoUsuarioSistema
    ? "<h1>Bem-vindo</h1>"
    : "<h1>Faça login</h1>"

console.log(estruturaMensagemHTML)


//============================== Exemplo Completo ES6+ ==============================
// vamos criar um exemplo completo utilizando vários recursos do ES6+ para demonstrar como eles podem ser usados juntos.
//objeto
let perfilUsuarioSistema = {

    nomePerfilUsuario: "Carlos",
    idadePerfilUsuario: 20,

    enderecoPerfilUsuario: {
        cidadePerfilUsuario: "São Paulo"
    }

}


//destructuring
let {
    nomePerfilUsuario: usuarioPerfilNome,
    idadePerfilUsuario: usuarioPerfilIdade
} = perfilUsuarioSistema


//spread
let dadosContaSistema = {

    ...perfilUsuarioSistema,
    statusContaSistema: true

}


//arrow function
const mostrarPerfilSistema = () => {

    //ternário
    let mensagemContaSistema = dadosContaSistema.statusContaSistema
        ? "Usuário ativo"
        : "Usuário inativo"


    console.log(usuarioPerfilNome)

    console.log(usuarioPerfilIdade)

    //optional chaining
    console.log(dadosContaSistema?.enderecoPerfilUsuario?.cidadePerfilUsuario)

    console.log(mensagemContaSistema)

}

mostrarPerfilSistema()