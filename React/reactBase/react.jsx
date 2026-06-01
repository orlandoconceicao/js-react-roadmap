//============================== Base do React ==============================
/*
React é uma biblioteca JavaScript criada para construir interfaces.

Tudo no React é baseado em componentes.

Os componentes são blocos reutilizáveis que formam a aplicação.

React trabalha com:
- Componentes
- JSX
- Props
- Estado
- Renderização
*/

//============================== Componentes ==============================
/*
Componentes são funções que retornam interface.

Cada componente representa uma parte da tela.

Exemplos:
- Navbar
- Footer
- Card
- Botão
- Formulário
*/


function MensagemBoasVindas() {

    return (

        <h1>Bem-vindo ao React!</h1>
    )
}

export default MensagemBoasVindas

//============================== Utilizando o Componentes ==============================
/*
Um componente pode ser chamado  dentro de outro componente.

Assim criamos interfaces reutilizaveis e organizadas.
*/

function TituloSistema(){
    return (
        <h1>Sistema de Usuários</h1>
    )
}

function PaginaInicialSistema() {
    return (
        <div>
            <TituloSistema/>  
        </div>
        )
}

//============================== JSX ==============================
/*
JSX significa JavaScript XML.

É uma sintaxe que permite escrever HTML dentro do JavaScript.

O navegador não entende JSX diretamente.

O React converte JSX para JavaScript.
*/

function ComponenteJSX() {
    return (
        <div>
            <h1>Componente com JSX</h1>
            <p>Aprendendo react</p>
        </div>
    )
}

//============================== JSX com Variáveis ==============================
/*
Podemos exibir variáveis dentro do JSX usando chaves {}.
*/

function UsuarioSistema() {
    let NomeusuarioSistema = 'João'

    return (
        <div>
            <h1>{NomeusuarioSistema}</h1>
        </div>
    )
}

//============================== JSX com Variáveis ==============================
/*
Também podemos usar expressões JavaScript dentro de chaves {}.
*/

function CalculoSistema() {

    let ValorProdutoSistema = 100

    let ValorFreteSistema = 20

    return (
        <div>
            <h1>Valor Total: {ValorProdutoSistema + ValorFreteSistema}</h1>
        </div>
    )
}

//============================== Props ==============================
/*
Props significa Properties.

Props são informações enviadas de um componente pai
para um componente filho.

As props permitem reutilizar componentes
com dados diferentes.
*/

function CardUsuarioSistema(props) {
    return (
        <div>
            <h2>{props.nomeUsuario}</h2>
            <p>{props.idadeUsuario}</p>
        </div>
    )
}

//============================== Utilizando Props ==============================
//Cada Componente pode receber props diferentes

function SistemaUsuarios() {
    return (
        <div>
            <CardUsuarioSistema
            nomeUsuario="Carlos"
            idadeUsuario={20}
            />

            <CardUsuarioSistema
                nomeUsuario="Ana"
                idadeUsuario={18}
            />
        </div>
    )
}

//============================== Destructuring nas Props ==============================
//Podemos extrair os valores das props diretamente.

function CardProdutoSistema({
    nomeProdutoSistema,
    ValorProdutosistema
}) {
    return (
        <div>
            <h2>{nomeProdutoSistema}</h2>
            <p>{ValorProdutosistema}</p>
        </div>
    )
}

//============================== Renderização ==============================
/*
Props significa Properties.

Props são informações enviadas de um componente pai
para um componente filho.

As props permitem reutilizar componentes
com dados diferentes.
*/

function MensagemRenderizadaSistema() {
    return (
        <h1>Componente Renderizado</h1>
    )
}

//============================== Renderização de lista ==============================
//Podemos renderizar listas usando o método map().

function ListaUsuariosSistema() {
    let ListaUsuariosSistema = [
        "Carlos",
        "Ana",
        "João"
    ]

    return (  
        <div>
            {
                ListaUsuariosSistema.map((nomeUsuarioSistema, indiceUsuarioSistema) => (
                    <p key={indiceUsuarioSistema}>
                        {nomeUsuarioSistema}
                    </p>
                )) 
            }
        </div>
    )
}

//============================== Renderização Condicional ==============================
//Podemos renderizar componentes com base em condições.

function StatusUsuarioSistema() {
    let usuarioLogadoSistema = true

    return (
        <div> 
            {
                usuarioLogadoSistema
                ? <h1>Usuário Logado</h1>
                : <h1>Faça login</h1>
            }
        </div>
    )
}

//============================== Exemplo Completo ==============================
/*
Exemplo com:
- Componentes
- JSX
- Props
- Renderização
*/

function CarcPerfilSistema({
    NomePerfilsistema,
    cargoPerfilSistema
}) {
    return (
        <dev>
            <h2>{NomePerfilsistema}</h2>
            <p>{cargoPerfilSistema}</p>
        </dev>
    )
}

function AplicacaoSistema() {
    let listaFuncionariosSistema = [
        {
            nomePerfilSistema: "Carlos",
            cargoPerfilSistema: "Desenvolvedor"
        },

        {
            nomePerfilSistema: "Ana",
            cargoPerfilSistema: "Designer"
        },

        {
            nomePerfilSistema: "Pedro",
            cargoPerfilSistema: "Gerente"
        }
        
    ]


    return (
        <div>
            <h1>Sistema Empresarial</h1>
            {
                listaFuncionariosSistema.map(
                    (
                        funcionarioSistema,
                        indiceFuncionarioSistema
                    ) => (
                        <CArdPerfilSistema
                            key={indiceFuncionariosSistema}
                            nomePerfilSistema={FuncionarioSistema.nomePerfilSistema}
                            cargoPerfilSistema={FuncionarioSistema.cargoPerfilSistema}
                        />
                    )
                )
            }
        </div>
    )
}

export default AplicacaoSistema