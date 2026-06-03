// ============================== HOOKS (MUITO IMPORTANTE) ==============================

/*
Hooks são funções especiais do React que permitem utilizar recursos
como estado, ciclo de vida, referências e compartilhamento de dados
dentro de componentes funcionais.

Antes dos Hooks, muitos desses recursos só podiam ser utilizados
em componentes de classe.

Atualmente praticamente todos os projetos React modernos utilizam Hooks.

Os Hooks mais importantes para começar são:

- useState
- useEffect
- useRef
- useContext
*/


// ============================== useState ==============================

/*
useState é utilizado para criar e controlar estados dentro
de um componente.

Estado é qualquer informação que pode mudar durante a execução
da aplicação.

Sempre que o estado é alterado, o React renderiza novamente
o componente com os novos dados.
*/

// Importação:

import { useState } from "react";

// Exemplo:

function Contador() {

    const [contador, setContador] = useState(0);

    return (
        <div>
            <p>{contador}</p>

            <button
                onClick={() => setContador(contador + 1)}
            >
                Incrementar
            </button>
        </div>
    );
}

/*
Fluxo:

1. Estado inicia com 0
2. Usuário clica no botão
3. Estado é atualizado
4. React renderiza novamente
5. Novo valor aparece na tela
*/

// ============================== useEffect ==============================

/*
useEffect é utilizado para executar ações quando o componente
é renderizado ou quando determinados valores mudam.

É muito utilizado para:

- Consumir APIs
- Buscar dados
- Manipular eventos
- Executar códigos automáticos
- Trabalhar com timers
*/

// Importação:

import { useEffect } from "react";

// Executa apenas uma vez:

useEffect(() => {

    console.log("Componente carregado");

}, []);

// Executa quando uma variável muda:

useEffect(() => {

    console.log("Contador atualizado");

}, [contador]);

// Exemplo consumindo API:

useEffect(() => {

    fetch("/api/usuarios")
        .then(resposta => resposta.json())
        .then(dados => console.log(dados));

}, []);

/*
Fluxo:

1. Componente renderiza
2. useEffect é executado
3. Código interno roda
4. React continua funcionando normalmente
*/

// ============================== useRef ==============================

/*
useRef cria uma referência que permanece armazenada durante
todo o ciclo de vida do componente.

Ele é muito utilizado para acessar elementos HTML diretamente
sem provocar novas renderizações.
*/

// Importação:

import { useRef } from "react";

// Exemplo:

function Formulario() {

    const inputRef = useRef();

    function focarInput() {

        inputRef.current.focus();

    }

    return (
        <>
            <input ref={inputRef} />

            <button onClick={focarInput}>
                Focar Input
            </button>
        </>
    );
}

/*
Casos de uso:

- Focar campos
- Controlar vídeos
- Controlar scroll
- Armazenar valores persistentes
- Integração com bibliotecas externas
*/

// ============================== useContext ==============================

/*
useContext é utilizado para compartilhar informações entre
vários componentes sem precisar passar props manualmente.

Ele resolve o problema conhecido como Prop Drilling,
quando informações precisam atravessar diversos componentes.
*/

// Importação:

import {
    createContext,
    useContext
} from "react";

// Criando contexto:

const UsuarioContext = createContext();

Fornecedor:

<UsuarioContext.Provider
    value={{ nome: "João" }}
>
    <App />
</UsuarioContext.Provider>

// Consumindo contexto:

function Perfil() {

    const usuario =
        useContext(UsuarioContext);

    return (
        <h1>{usuario.nome}</h1>
    );
}

/*
Casos de uso:

- Usuário logado
- Tema escuro e claro
- Idioma da aplicação
- Carrinho de compras
- Configurações globais
*/

// ============================== RESUMO GERAL ==============================

// ============================== IMPORTAÇÕES ==============================

// Importamos os Hooks necessários do React
import {
    useState,
    useEffect,
    useRef,
    useContext,
    createContext
} from "react";


// ============================== CONTEXTO GLOBAL ==============================

// Criamos um contexto para compartilhar dados
// entre vários componentes da aplicação
const UsuarioContext = createContext();


// ============================== COMPONENTE APP ==============================

export default function App() {

    // useState
    // Cria um estado chamado usuario
    // Valor inicial: { nome: "João" }
    const [usuario, setUsuario] = useState({
        nome: "João"
    });

    return (

        // Provider disponibiliza os dados
        // para todos os componentes filhos
        <UsuarioContext.Provider value={usuario}>

            <Dashboard />

        </UsuarioContext.Provider>

    );
}


// ============================== COMPONENTE DASHBOARD ==============================

function Dashboard() {

    // ==============================
    // useState
    // ==============================

    // contador = valor atual
    // setContador = função para alterar o valor

    const [contador, setContador] = useState(0);


    // ==============================
    // useRef
    // ==============================

    // Cria uma referência para o input

    const inputRef = useRef(null);


    // ==============================
    // useContext
    // ==============================

    // Recebe os dados compartilhados
    // pelo UsuarioContext

    const usuario =
        useContext(UsuarioContext);


    // ==============================
    // useEffect
    // ==============================

    // Executa sempre que o contador mudar

    useEffect(() => {

        console.log(
            "Contador atualizado:",
            contador
        );

    }, [contador]);


    // ==============================
    // FUNÇÃO PARA FOCAR INPUT
    // ==============================

    function focarInput() {

        // current representa o elemento HTML

        inputRef.current.focus();

    }


    // ==============================
    // INTERFACE
    // ==============================

    return (

        <div>

            {/* Nome vindo do Context */}

            <h1>
                Usuário: {usuario.nome}
            </h1>


            <hr />


            {/* Valor do contador */}

            <h2>
                Contador: {contador}
            </h2>


            {/* Incrementa +1 */}

            <button
                onClick={() =>
                    setContador(contador + 1)
                }
            >
                Incrementar
            </button>


            {/* Decrementa -1 */}

            <button
                onClick={() =>
                    setContador(contador - 1)
                }
            >
                Decrementar
            </button>


            <hr />


            {/* Input conectado ao useRef */}

            <input
                ref={inputRef}
                placeholder="Digite algo"
            />


            {/* Ao clicar foca no input */}

            <button
                onClick={focarInput}
            >
                Focar Input
            </button>

        </div>

    );
}