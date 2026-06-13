//============================== Rotas no React Router ==============================
/*
React Router é uma biblioteca utilizada para controlar navegação entre páginas
em aplicações React.

Em vez de recarregar a página inteira, o React Router permite navegação
entre componentes de forma dinâmica (SPA - Single Page Application).

Conceitos principais:
- Router: envolve toda a aplicação e habilita o sistema de rotas
- Routes: define o conjunto de rotas disponíveis
- Route: define uma rota específica (caminho + componente)
- Link: substitui <a> para navegação sem reload da página
*/

//============================== Páginas e Navegação ==============================
/*
Em React, cada "página" é na verdade um componente.

A navegação acontece trocando componentes com base na URL.

Elementos principais:
- BrowserRouter: gerencia o histórico da URL no navegador
- Link: navegação declarativa (melhor prática)
- useNavigate: navegação programática via JavaScript

Importante:
- Nunca usar <a href=""> para navegação interna
// isso recarrega a página e perde o estado da aplicação
*/

//============================== Estrutura Básica de Rotas ==============================
/*
A estrutura básica define quais componentes serão renderizados
para cada caminho da URL.
*/

import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            {/* Navegação principal */}
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/dashboard">Dashboard</Link>
            </nav>

            {/* Definição das rotas */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

//============================== Rotas Dinâmicas ==============================
/*
Rotas dinâmicas permitem capturar valores da URL.

Exemplo: /usuario/1, /usuario/2

O parâmetro é acessado com useParams.
*/

import { useParams } from "react-router-dom"

function Usuario() {
    const { id } = useParams()

    return (
        <div>
            {/* Exibe o ID vindo da URL */}
            <h1>Usuário: {id}</h1>
        </div>
    )
}

//============================== Navegação Programática ==============================
/*
Permite mudar de página via lógica JavaScript (botões, validações, etc).
*/

function Login() {
    const navigate = useNavigate()

    function handleLogin() {
        // lógica de login aqui

        // redireciona após login
        navigate("/dashboard")
    }

    return (
        <button onClick={handleLogin}>
            Entrar
        </button>
    )
}

//============================== Rotas Privadas ==============================
/*
Rotas privadas são usadas para proteger páginas que exigem autenticação.

A ideia é verificar se o usuário está logado antes de permitir acesso.
Caso não esteja, redireciona para login.
*/

import { Navigate } from "react-router-dom"

function RotaPrivada({ children }) {
    const isAuthenticated = false // simulação de login

    if (!isAuthenticated) {
        // bloqueia acesso e redireciona
        return <Navigate to="/login" />
    }

    return children
}

//============================== Exemplo Completo ==============================

import { BrowserRouter, Routes, Route, Link, useNavigate, useParams, Navigate } from "react-router-dom"

function Home() {
    return <h1>Home</h1>
}

function Sobre() {
    return <h1>Sobre</h1>
}

function Dashboard() {
    return <h1>Dashboard Protegido</h1>
}

function Usuario() {
    const { id } = useParams()

    return <h1>Usuário {id}</h1>
}

function Login() {
    const navigate = useNavigate()

    function handleLogin() {
        // simulação de autenticação
        const logado = true

        if (logado) {
            navigate("/dashboard")
        }
    }

    return <button onClick={handleLogin}>Entrar</button>
}

function RotaPrivada({ children }) {
    const isAuthenticated = true // controle de autenticação

    // bloqueia acesso se não autenticado
    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return children
}

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/usuario/1">Usuário</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/login" element={<Login />} />

                {/* rota protegida */}
                <Route
                    path="/dashboard"
                    element={
                        <RotaPrivada>
                            <Dashboard />
                        </RotaPrivada>
                    }
                />

                {/* rota dinâmica */}
                <Route path="/usuario/:id" element={<Usuario />} />
            </Routes>
        </BrowserRouter>
    )
}