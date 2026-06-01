//============================== Instalação Node.js ==============================
/*
Node.js é um ambiente de execução JavaScript.

Ele permite executar JavaScript fora do navegador.

O Node.js é necessário para instalar e executar projetos React.
*/


//============================== Download Node.js ==============================
// acessar o site oficial

https://nodejs.org


//============================== Versão Recomendada ==============================
// instalar sempre a versão LTS

//LTS (Long Term Support)


//============================== Verificar Instalação ==============================
// após instalar, abrir o terminal

node -v

// exemplo de saída

//v24.2.0


//============================== Verificar NPM ==============================
// npm é o gerenciador de pacotes do Node.js

npm -v

// exemplo

//11.4.2


//============================== O que é NPM ==============================
/*
NPM significa Node Package Manager.

Ele é responsável por instalar bibliotecas e dependências.

Exemplos:

- React
- Axios
- Express
- React Router
*/


//============================== Criando Projeto React ==============================
/*
Atualmente o método mais utilizado para criar projetos React
é utilizando o Vite.
*/


//============================== Criar Projeto ==============================

//npm create vite@latest


//============================== Nome do Projeto ==============================

meu-projeto-react


//============================== Escolher Framework ==============================

React


//============================== Escolher Linguagem ==============================

JavaScript


//============================== Entrar na Pasta ==============================

//cd meu-projeto-react


//============================== Instalar Dependências ==============================

//npm install


//============================== Iniciar Projeto ==============================

//npm run dev


//============================== Endereço Local ==============================
// após iniciar o projeto

http://localhost:5173


//============================== Estrutura Inicial React ==============================
/*
meu-projeto-react/

│
├── node_modules/
│
├── public/
│
├── src/
│
├── package.json
│
├── vite.config.js
│
└── index.html
*/

//============================== Pasta src ==============================
/*
A maior parte do desenvolvimento React
acontece dentro da pasta src.



src/

│
├── assets/
│
├── App.jsx
│
├── main.jsx
│
└── index.css
*/

//============================== Arquivo main.jsx ==============================
/*
main.jsx é o ponto inicial da aplicação.

Ele renderiza o componente App.
*/


import React from "react"

import ReactDOM from "react-dom/client"

import App from "./App"

ReactDOM.createRoot(

    document.getElementById("root")

).render(

    <App />

)


//============================== Arquivo App.jsx ==============================
/*
App.jsx é o componente principal do sistema.
*/


function App() {

    return (

        <h1>Meu Primeiro Projeto React</h1>

    )

}

export default App


//============================== Criando Pasta Components ==============================
/*
Os componentes normalmente ficam
dentro da pasta components.



src/

│
├── components/
│
│   └── Header.jsx
│
├── App.jsx
│
└── main.jsx
*/

//============================== Criando Componente ==============================

function HeaderSistema() {

    return (

        <header>

            <h1>StackWeb Agency</h1>

        </header>

    )

}

export default HeaderSistema


//============================== Importando Componente ==============================

import HeaderSistema from "./components/HeaderSistema"

function App() {

    return (

        <div>

            <HeaderSistema />

        </div>

    )

}

export default App


//============================== Como Funciona o Fluxo React ==============================

/*
main.jsx

↓

App.jsx

↓

Componentes

↓

Tela do Usuário
*/


//============================== Criando Pasta Pages ==============================
/*
Pages representam telas completas.



src/

│
├── pages/
│
│   ├── Home.jsx
│
│   └── Contato.jsx
│
├── components/
│
└── App.jsx
*/

//============================== Exemplo Home.jsx ==============================

function HomeSistema() {

    return (

        <h1>Página Inicial</h1>

    )

}

export default HomeSistema


//============================== Importando Página ==============================

import HomeSistema from "./pages/HomeSistema"

function App() {

    return (

        <HomeSistema />

    )

}

export default App


//============================== Criando Pasta Services ==============================
/*
Services normalmente armazenam
conexões com APIs.



src/

│
├── services/
│
│   └── api.js
│
└── App.jsx
*/

//============================== Instalando Axios ==============================
/*
Axios é uma biblioteca para comunicação
com APIs e Backends.



npm install axios

*/
//============================== Criando api.js ==============================

import axios from "axios"

const apiSistema = axios.create({

    baseURL: "http://localhost:3000"

})

export default apiSistema


//============================== Estrutura Profissional ==============================
/*
src/

│
├── assets/
│
├── components/
│
├── pages/
│
├── services/
│
├── hooks/
│
├── context/
│
├── routes/
│
├── utils/
│
├── App.jsx
│
└── main.jsx
*/

//============================== Conexão React com Backend ==============================
/*
O React normalmente conversa
com APIs através de requisições HTTP.
*/

/*
React

↓

Axios

↓

API Backend

↓

Banco de Dados

↓

API Backend

↓

Axios

↓

React

*/
//============================== Exemplo Backend Node.js ==============================

const express = require("express")

const appServidor = express()

appServidor.get(

    "/usuarios",

    (requestServidor, responseServidor) => {

        responseServidor.json([

            {

                idUsuario: 1,

                nomeUsuario: "Carlos"

            },

            {

                idUsuario: 2,

                nomeUsuario: "Ana"

            }

        ])

    }

)

appServidor.listen(3000)


//============================== Consumindo API no React ==============================

import { useEffect } from "react"

import apiSistema from "./services/api"

function App() {

    useEffect(() => {

        buscarUsuariosSistema()

    }, [])

    async function buscarUsuariosSistema() {

        const respostaUsuariosSistema = await apiSistema.get(

            "/usuarios"

        )

        console.log(

            respostaUsuariosSistema.data

        )

    }

    return (

        <h1>Sistema React Conectado</h1>

    )

}

export default App


//============================== Exemplo Completo React ==============================
/*
Fluxo completo de funcionamento.

Node.js

↓

NPM

↓

Vite

↓

React

↓

main.jsx

↓

App.jsx

↓

Pages

↓

Components

↓

Axios

↓

Backend

↓

Banco de Dados

↓

Resposta JSON

↓

React Atualiza Interface
*/