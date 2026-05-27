//============================== Async JavaScript ==============================
/*JavaScript assíncrono permite executar tarefas que demoram um tempo sem travar o sistema.

Exemplo:
- buscar dados de API
- carregar imagens
- login
- banco de dados
*/

//============================== Promises ==============================
//Promise representa uma operação futura.
//Exemplo de Promise
//============================== Promise ==============================

let carregarSistema = new Promise((resolve, reject) => {//Simulando carregamento de sistema

    let sistemaOnline = true

    //verifica se sistema está online

    if (sistemaOnline) {

        resolve("Sistema carregado com sucesso")

    } else {

        reject("Erro ao carregar sistema")

    }
})

//============================== Consumindo Promise ==============================

carregarSistema
    .then((resultado) => {//Se a Promise for resolvida com sucesso, executa o código dentro do then

        console.log(resultado)//resultado é o valor passado para resolve

    })

    .catch((erro) => {//Se a Promise for rejeitada, executa o código dentro do catch

        console.log(erro)//erro é o valor passado para reject

    })


//============================== async/await ==============================

//função assíncrona
async function carregarDados() {

    return "Dados carregados"

}

//executando função

carregarDados().then((resultado) => {

    console.log(resultado)//resultado é o valor passado para resolve

})


//============================== try/catch ==============================

async function carregarSistema2() {

    try {//try tenta executar o código dentro do bloco

        let resposta = await Promise.resolve("Sistema online")//Simulando carregamento de sistema

        console.log(resposta)//resposta é o valor passado para resolve

    } catch (erro) {//Se a Promise for rejeitada, executa o código dentro do catch =  captura o erro e executa o código dentro do bloco
        
        console.log("Erro encontrado")//erro é o valor passado para reject

    }
}

carregarSistema2()


//============================== fetch() =============================
//O fetch() faz requisições HTTP.
//Usado para consumir APIs.

//============================== fetch API ==============================

async function buscarUsuarios() {
    //requisição da API
    //fetch() retorna uma Promise, por isso usamos await para esperar a resposta da API
    let resposta = await fetch("https://jsonplaceholder.typicode.com/users")

    //convertendo para JSON
    //resposta.json() também retorna uma Promise, por isso usamos await para esperar a conversão
    let dados = await resposta.json()

    //exibindo dados
    //dados é o resultado da conversão para JSON, ou seja, os dados da API
    console.log(dados)
}
buscarUsuarios()


//============================== consumir api - fetch com try/catch ==============================

async function carregarPosts() {

    try {//try tenta executar o código dentro do bloco

        //fazendo requisição
        //fetch() retorna uma Promise, por isso usamos await para esperar a resposta da API
        let resposta = await fetch("https://jsonplaceholder.typicode.com/posts")

        //convertendo JSON
        //resposta.json() também retorna uma Promise, por isso usamos await para esperar a conversão
        let posts = await resposta.json()

        console.log(posts)
    //se a API estiver offline ou ocorrer algum erro, o código dentro do catch será executado
    } catch (erro) {//Se a Promise for rejeitada, executa o código dentro do catch = captura o erro e executa o código dentro do bloco

        console.log("Erro ao buscar API")

    }

}

carregarPosts()

//============================== Exibir API no HTML ==============================

//selecionando elemento
let usuariosDiv = document.querySelector(".usuarios")


//função assíncrona
async function buscarUsuarios2() {

    //requisição API
    //fetch() retorna uma Promise, por isso usamos await para esperar a resposta da API
    let resposta = await fetch("https://jsonplaceholder.typicode.com/users")

    //convertendo JSON
    //resposta.json() também retorna uma Promise, por isso usamos await para esperar a conversão
    let usuarios = await resposta.json()


    //percorrendo usuários
    //usuarios é o resultado da conversão para JSON, ou seja, os dados da API
    usuarios.forEach((usuario) => {

        //innerHTML é usado para inserir conteúdo HTML dentro de um elemento
        usuariosDiv.innerHTML += `

            <div class="usuario">

                <h2>${usuario.name}</h2>

                <p>${usuario.email}</p>

            </div>

        `

    })

}

buscarUsuarios2()

//============================== POST fetch ==============================

async function criarPost() {

    //fazendo requisição POST
    let resposta = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {

            //especificando o método da requisição
            method: "POST",

            //especificando o tipo de conteúdo da requisição
            headers: {
                "Content-Type": "application/json"
            },

            //especificando o corpo da requisição, ou seja, os dados que queremos enviar para a API
            body: JSON.stringify({

                title: "Novo Post",
                body: "Conteúdo do post",
                userId: 1

            })

        }
    )

    //convertendo resposta para JSON
    let dados = await resposta.json()

    console.log(dados)

}

criarPost()


//============================== Exemplo Completo Async ==============================

//seletores
let botaoCarregar = document.querySelector(".botaoCarregar")

let listaUsuarios = document.querySelector(".listaUsuarios")


//evento botão
botaoCarregar.addEventListener("click", async () => {

    try {//try tenta executar o código dentro do bloco

        //requisição API
        //fetch() retorna uma Promise, por isso usamos await para esperar a resposta da API
        let resposta = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        )

        //convertendo JSON
        //resposta.json() também retorna uma Promise, por isso usamos await para esperar a conversão
        let usuarios = await resposta.json()


        //limpando lista
        //innerHTML é usado para inserir conteúdo HTML dentro de um elemento
        listaUsuarios.innerHTML = ""

        //percorrendo usuários
        //usuarios é o resultado da conversão para JSON, ou seja, os dados da API
        usuarios.forEach((usuario) => {

            listaUsuarios.innerHTML += `

                <div class="usuario">

                    <h3>${usuario.name}</h3>

                    <p>${usuario.email}</p>

                </div>

            `

        })

    } catch (erro) {//Se a Promise for rejeitada, executa o código dentro do catch = captura o erro e executa o código dentro do bloco

        console.log("Erro ao carregar usuários")

    }

})