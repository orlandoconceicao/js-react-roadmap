//============================== Autenticação ==============================
/*
Autenticação é o processo responsável por identificar quem é o usuário dentro
de uma aplicação.

No React, normalmente a autenticação acontece através da comunicação com uma API
backend, onde o usuário envia suas credenciais (como email e senha) e recebe uma
confirmação de acesso.

O fluxo mais comum funciona assim:

1 - Usuário informa seus dados no formulário de login.
2 - React envia os dados para o backend através de uma requisição HTTP.
3 - Backend valida as informações.
4 - Backend retorna um token de acesso.
5 - React armazena esse token e utiliza nas próximas requisições protegidas.

O React não deve ser responsável por validar senhas ou criar usuários.
Essa responsabilidade pertence ao backend.

A aplicação frontend apenas controla:
- estado do usuário autenticado;
- armazenamento do token;
- redirecionamento de páginas;
- bloqueio de conteúdos privados.
*/


//============================== JWT (JSON Web Token) ==============================
/*
JWT é um padrão utilizado para criar tokens de autenticação.

O token funciona como uma identificação temporária do usuário.

Após o login, o backend gera um JWT contendo informações necessárias para
identificar o usuário.

Exemplo de fluxo:

Usuário:
email: usuario@email.com
senha: 123456

        |
        v

Backend valida os dados

        |
        v

Retorna:

{
    token: "eyJhbGciOiJIUzI1..."
}

O React guarda esse token e envia ele em chamadas futuras:

Authorization: Bearer TOKEN

O backend verifica o token antes de liberar informações protegidas.

Um JWT possui três partes:

Header:
Define informações do token, como algoritmo utilizado.

Payload:
Contém dados do usuário.

Signature:
Garante que o token não foi alterado.


Exemplo:

xxxxx.yyyyy.zzzzz

//
// Parte 1: Header
// Parte 2: Dados do usuário
// Parte 3: Assinatura de segurança
//

No React, o token geralmente é armazenado em:

localStorage:
- Fácil de usar.
- Persiste após fechar o navegador.
- Deve ser usado com cuidado por riscos de XSS.

Cookies HttpOnly:
- Mais seguro.
- Gerenciado pelo navegador.
- Muito utilizado em aplicações profissionais.
*/


//============================== Login ==============================
/*
O login é responsável por enviar as credenciais do usuário para o backend
e armazenar a sessão criada.

Normalmente utiliza:
- useState para controlar campos;
- fetch ou axios para comunicação;
- Context API para compartilhar usuário autenticado.

Exemplo de estado:

const [email, setEmail] = useState("")

O estado guarda o valor digitado pelo usuário.

Após sucesso:

localStorage.setItem("token", resposta.token)

O token fica disponível para autenticar próximas requisições.
*/


//============================== Logout ==============================
/*
Logout é o processo de remover a autenticação atual.

Normalmente envolve:

- remover o token armazenado;
- limpar dados do usuário;
- redirecionar para a tela de login.


Exemplo:

localStorage.removeItem("token")

//
// Remove a identificação do usuário.
// A aplicação entende que ele saiu.
//

Depois do logout, páginas privadas devem deixar de ser acessíveis.
*/


//============================== Context API para Autenticação ==============================
/*
Em aplicações React maiores, o estado de autenticação geralmente é centralizado.

O Context API evita passar informações manualmente entre vários componentes.

Exemplo:

Sem Context:

App
 |
 Header
 |
 Menu
 |
 Perfil


Cada componente precisaria receber o usuário.


Com Context:

AuthProvider
 |
 ----------------
 |      |       |
Header Menu  Perfil


Todos conseguem acessar:

- usuário atual;
- função login;
- função logout;
- estado autenticado.


O Context normalmente possui:

user:
Guarda os dados do usuário.

login():
Executa autenticação.

logout():
Remove autenticação.

isAuthenticated:
Indica se existe usuário conectado.
*/


//============================== Rotas Protegidas ==============================
/*
Rotas protegidas são páginas que somente usuários autenticados podem acessar.

Exemplos:

Página pública:

/login

Qualquer pessoa pode acessar.


Página privada:

/dashboard

Somente usuários autenticados entram.


A proteção acontece criando um componente que verifica
se existe autenticação.

Fluxo:

Usuário tenta acessar:

/dashboard

        |
        v

Existe token?

        |
   -------------
   |           |
 Sim          Não

 Entra     Vai para login


Esse padrão evita que usuários não autenticados visualizem páginas privadas.
*/


//============================== Controle de Sessão ==============================
/*
Ao carregar a aplicação, o React precisa verificar se existe uma sessão ativa.

Normalmente:

1 - Busca o token salvo.
2 - Valida se ele existe.
3 - Recupera informações do usuário.
4 - Atualiza o estado global.


Exemplo:

const token = localStorage.getItem("token")

//
// Verifica se existe uma autenticação salva.
//

Se existir:

Usuário continua conectado.

Se não existir:

Usuário precisa fazer login novamente.
*/


//============================== Interceptor de Requisições ==============================
/*
Em projetos profissionais, normalmente todas as requisições precisam enviar
automaticamente o token.

Um interceptor adiciona o JWT automaticamente.

Exemplo usando Axios:

axios.interceptors.request.use(config => {

    const token = localStorage.getItem("token")

    config.headers.Authorization = `Bearer ${token}`

    return config
})


Assim não é necessário repetir o código em todas as chamadas da API.
*/


//============================== Exemplo Completo ==============================

import { createContext, useContext, useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"


// Criando o contexto global de autenticação
const AuthContext = createContext()


function AuthProvider({ children }) {

    // Guarda o usuário autenticado
    const [usuario, setUsuario] = useState(null)


    function login(email, senha) {

        // Simulação de resposta do backend
        const respostaAPI = {
            nome: "usuario1",
            token: "token_exemplo_123"
        }


        // Salva o token recebido
        localStorage.setItem(
            "token",
            respostaAPI.token
        )


        // Atualiza usuário logado
        setUsuario({
            nome: respostaAPI.nome,
            email
        })
    }


    function logout() {

        // Remove o token salvo
        localStorage.removeItem("token")


        // Limpa usuário atual
        setUsuario(null)
    }


    return (
        <AuthContext.Provider
            value={{
                usuario,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}


// Hook personalizado para acessar autenticação
function useAuth() {

    return useContext(AuthContext)

}


// Componente responsável por proteger páginas
function RotaProtegida({ children }) {

    const { usuario } = useAuth()


    // Caso não exista usuário,
    // redireciona para login
    if (!usuario) {
        return <Navigate to="/login" />
    }


    return children
}


// Página de login
function Login() {

    const { login } = useAuth()


    function entrar() {

        login(
            "usuario@email.com",
            "123456"
        )
    }


    return (
        <div>

            {/* Botão que executa autenticação */}
            <button onClick={entrar}>
                Entrar
            </button>

        </div>
    )
}


// Página privada
function Dashboard() {

    const { logout } = useAuth()


    return (
        <div>

            {/* Área acessível apenas autenticada */}
            <h1>
                Dashboard privado
            </h1>


            {/* Encerra sessão */}
            <button onClick={logout}>
                Sair
            </button>

        </div>
    )
}


// Arquivo principal da aplicação
function App() {

    return (

        <BrowserRouter>

            <AuthProvider>

                <Routes>

                    {/* Página pública */}
                    <Route
                        path="/login"
                        element={<Login />}
                    />


                    {/* Página protegida */}
                    <Route
                        path="/dashboard"
                        element={
                            <RotaProtegida>
                                <Dashboard />
                            </RotaProtegida>
                        }
                    />

                </Routes>

            </AuthProvider>

        </BrowserRouter>

    )
}

export default App