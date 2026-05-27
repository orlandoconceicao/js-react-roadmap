//============================== DOM JavaScript ==============================
// DOM significa Document Object Model.
// O JavaScript usa o DOM para acessar, alterar e controlar elementos do HTML.


//============================== querySelector() ==============================
//Seleciona o primeiro elemento encontrado

// HTML
// <h1 class="titulo">Olá Mundo</h1>

//Selecionando elemento pela classe
let titulo = document.querySelector(".titulo")

//Mostrando elemento no console
console.log(titulo)



//============================== querySelector com ID ==============================
//Seleciona elemento pelo ID

// HTML
// <h1 id="tituloPrincipal">StackWeb</h1>

//Selecionando elemento pelo ID
let tituloPrincipal = document.querySelector("#tituloPrincipal")

//Mostrando no console
console.log(tituloPrincipal)



//============================== querySelectorAll() ==============================
//Seleciona vários elementos

// HTML
/*
<li class="item">Item 1</li>
<li class="item">Item 2</li>
<li class="item">Item 3</li>
*/

//Selecionando todos os elementos
let itens = document.querySelectorAll(".item")

//Mostrando NodeList
console.log(itens)

//Percorrendo elementos
itens.forEach((item) => {//Mostrando cada item

    console.log(item)

})



//============================== getElementById() ==============================
//Seleciona elemento usando ID

// HTML
// <h1 id="tituloSite">Meu Site</h1>

//Selecionando elemento
let tituloSite = document.getElementById("tituloSite")

console.log(tituloSite)



//============================== innerHTML ==============================
//Permite adicionar HTML

// HTML
// <div class="mensagem"></div>

//Selecionando elemento
let mensagem = document.querySelector(".mensagem")

//Adicionando HTML
mensagem.innerHTML = `
    <h2>Bem-vindo</h2>
    <p>JavaScript DOM</p>
`

console.log(mensagem)



//============================== textContent ==============================
//Altera apenas texto

//Selecionando elemento
let textoTitulo = document.querySelector(".titulo")

//Alterando texto
textoTitulo.textContent = "Login"

//Mostrando no console
console.log(textoTitulo)


//============================== value ==============================
//Captura valor digitado

// HTML
// <input type="text" class="campoNome">

//Selecionando input
let campoNome = document.querySelector(".campoNome")

//Mostrando valor
console.log(campoNome.value)



//============================== Eventos ==============================
//Eventos executam ações

// HTML
// <button class="botao">Clique</button>

//Selecionando botão
let botao = document.querySelector(".botao")

//Evento de clique
botao.addEventListener("click", () => {

    console.log("Botão clicado")

})



//============================== Evento de Input ==============================
//Executa enquanto usuário digita

//Evento input
campoNome.addEventListener("input", () => {

    console.log(campoNome.value)

})



//============================== Evento de Mouse ==============================
//Eventos do mouse

//Evento mouseover
botao.addEventListener("mouseover", () => {

    console.log("Mouse passou no botão")

})

//Evento mouseout
botao.addEventListener("mouseout", () => {

    console.log("Mouse saiu do botão")

})



//============================== classList.add() ==============================
//Adiciona classe CSS

// HTML
// <div class="caixa"></div>

//Selecionando elemento
let caixa = document.querySelector(".caixa")

//Adicionando classe
caixa.classList.add("ativo")

console.log(caixa)



//============================== classList.remove() ==============================
//Remove classe CSS

//Removendo classe
caixa.classList.remove("ativo")

console.log(caixa)



//============================== classList.toggle() ==============================
//Adiciona ou remove automaticamente

//Alternando classe
caixa.classList.toggle("ativo")

console.log(caixa)



//============================== classList.contains() ==============================
//Verifica se possui classe

//Verificando classe
let possuiClasse = caixa.classList.contains("ativo")

console.log(possuiClasse)



//============================== setAttribute() ==============================
//Adiciona atributos

// HTML
// <img class="imagem">

//Selecionando imagem
let imagem = document.querySelector(".imagem")

//Adicionando atributo
imagem.setAttribute("src", "imagem.png")



//============================== getAttribute() ==============================
//Captura atributo

//Pegando atributo
let caminhoImagem = imagem.getAttribute("src")

console.log(caminhoImagem)



//============================== removeAttribute() ==============================
//Remove atributo

//Removendo atributo
imagem.removeAttribute("src")



//============================== createElement() ==============================
//Cria elemento HTML

//Criando elemento
let novoItem = document.createElement("li")

//Adicionando texto
novoItem.textContent = "Novo usuário"

console.log(novoItem)



//============================== appendChild() ==============================
//Adiciona elemento no HTML

//Selecionando lista
let listaUsuarios = document.querySelector(".listaUsuarios")

//Adicionando item na lista
listaUsuarios.appendChild(novoItem)



//============================== remove() ==============================
//Remove elemento

//Removendo item
novoItem.remove()



//============================== Formulários ==============================

//Selecionando formulário
let formulario = document.querySelector(".formulario")

console.log(formulario)



//============================== submit ==============================
//Evento de envio

formulario.addEventListener("submit", (evento) => {

    //Impede recarregar página
    evento.preventDefault()

    //Mostrando valor digitado
    console.log(campoNome.value)

})



//============================== style ==============================
//Alterando CSS via JavaScript

//Selecionando título
let tituloCss = document.querySelector(".titulo")

//Alterando estilos
tituloCss.style.color = "cyan"
tituloCss.style.fontSize = "40px"
tituloCss.style.textAlign = "center"



//============================== Tema Claro e Escuro ==============================

//Selecionando botão
let botaoTema = document.querySelector(".botaoTema")

//Evento clique
botaoTema.addEventListener("click", () => {

    //Alternando classe light no body
    document.body.classList.toggle("light")

})



//============================== Limpar Lista ==============================

//Selecionando botão
let botaoLimpar = document.querySelector(".botaoLimpar")

//Evento clique
botaoLimpar.addEventListener("click", () => {

    //Limpando HTML da lista
    listaUsuarios.innerHTML = ""

})



//============================== Sistema Completo ==============================

//Evento envio formulário
formulario.addEventListener("submit", (evento) => {

    //Impede reload
    evento.preventDefault()

    //Pegando valor digitado
    let nomeUsuario = campoNome.value

    //Verificando campo vazio
    if(nomeUsuario === "") {

        alert("Digite um nome")

        return

    }

    //Criando li
    let usuario = document.createElement("li")

    //Adicionando classe
    usuario.classList.add("usuario")

    //Adicionando HTML
    usuario.innerHTML = `
    
        <span>${nomeUsuario}</span>

        <button class="remover">
            Remover
        </button>

    `

    //Adicionando na lista
    listaUsuarios.appendChild(usuario)

    //Selecionando botão remover
    let botaoRemover = usuario.querySelector(".remover")

    //Evento remover
    botaoRemover.addEventListener("click", () => {

        usuario.remove()

    })

    //Limpando input
    campoNome.value = ""

})