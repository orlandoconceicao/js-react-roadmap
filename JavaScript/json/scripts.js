//============================== JSON JavaScript ==============================
/*
JSON significa:

JavaScript Object Notation

É um formato usado para:
- trocar dados
- salvar informações
- trabalhar com APIs
*/

//============================== Estrutura JSON ==============================

let usuarioJson = `

{
    "nome": "Carlos",
    "idade": 20,
    "cidade": "São Paulo"
}

`

console.log(usuarioJson)


//============================== Objeto JavaScript ==============================
// diferente do JSON, o objeto JavaScript não tem aspas duplas em volta das chaves e dos valores
let usuario = {

    nome: "Carlos",
    idade: 20

}

console.log(usuario)


//============================== JSON String ==============================
// JSON usa aspas nas propriedades.
let usuarioJson2 = `

{
    "nome": "Carlos",
    "idade": 20
}

`

console.log(usuarioJson2)


//============================== JSON.parse() ==============================
// JSON.parse() é usado para converter uma string JSON em um objeto JavaScript
//JSON
let produtoJson = `

{
    "nome": "Notebook",
    "preco": 5000
}

`


//convertendo JSON para objeto
let produto = JSON.parse(produtoJson)

console.log(produto)

console.log(produto.nome)

console.log(produto.preco)


//============================== JSON.stringify() ==============================
// JSON.stringify() é usado para converter um objeto JavaScript em uma string JSON
//objeto JavaScript
let usuario2 = {

    nome: "Ana",
    idade: 25

}


//convertendo para JSON
let usuarioJson3 = JSON.stringify(usuario2)

console.log(usuarioJson3)


//============================== Array para JSON ==============================

//array JavaScript
let usuarios = [

    "Carlos",
    "Ana",
    "Pedro"

]


//convertendo array para JSON
let usuariosJson4 = JSON.stringify(usuarios)

console.log(usuariosJson4)


//============================== JSON para Array ==============================

//JSON array
let produtosJson5 = `

[
    {
        "nome": "Notebook",
        "preco": 5000
    },

    {
        "nome": "Mouse",
        "preco": 100
    }
]

`


//convertendo JSON para array
let produtos = JSON.parse(produtosJson5)

console.log(produtos)

console.log(produtos[0].nome)

console.log(produtos[1].preco)


//============================== Salvando no localStorage JSON ==============================

let usuario3 = {

    nome: "Carlos",
    idade: 20

}


//convertendo objeto para JSON
let usuarioJson4 = JSON.stringify(usuario3)


//salvando no navegador
localStorage.setItem("usuario", usuarioJson4)


//============================== Recuperando JSON ==============================

//pegando JSON salvo
let usuarioSalvo = localStorage.getItem("usuario")


//convertendo JSON para objeto
let usuarioConvertido = JSON.parse(usuarioSalvo)

console.log(usuarioConvertido)

console.log(usuarioConvertido.nome)


//============================== Exemplo Completo JSON ==============================

//objeto JavaScript
let empresa = {

    nome: "StackWeb Agency",
    clientes: 50,
    ativo: true

}


//convertendo objeto para JSON
let empresaJson = JSON.stringify(empresa)

console.log(empresaJson)


//convertendo JSON para objeto novamente
let empresaObjeto = JSON.parse(empresaJson)

console.log(empresaObjeto)

console.log(empresaObjeto.nome)

console.log(empresaObjeto.clientes)