//============================== Estado Global ==============================
/*
Estado global é uma forma de armazenar informações que precisam ser
acessadas por diferentes componentes da aplicação.

Em aplicações pequenas, normalmente o estado fica dentro do próprio componente
usando useState. Porém, quando muitos componentes precisam compartilhar os
mesmos dados, passar informações por várias camadas através de props pode
deixar o código difícil de manter.

O estado global resolve esse problema criando uma fonte central de dados,
permitindo que qualquer componente autorizado possa acessar e modificar essas
informações.

Exemplos comuns de dados globais:

- Usuário autenticado
- Tema da aplicação (dark/light)
- Carrinho de compras
- Permissões de usuário
- Configurações gerais
- Dados temporários compartilhados

Fluxo tradicional:

Componente Pai
      |
      |
      v
Componente Filho
      |
      |
      v
Componente Neto

Quando muitos componentes precisam dos mesmos dados ocorre o chamado
"prop drilling", onde informações são passadas por vários componentes
que nem utilizam esses dados.

O estado global evita esse problema criando um armazenamento compartilhado.
*/


//============================== Context API ==============================
/*
Context API é uma solução nativa do React para compartilhar informações
entre componentes sem precisar passar props manualmente.

Ela funciona através de três conceitos principais:

1 - Context
Cria um espaço onde os dados serão armazenados.

2 - Provider
Componente responsável por disponibilizar os dados para outros componentes.

3 - Consumer
Componente que utiliza os dados armazenados no contexto.

A Context API é muito utilizada para estados simples e globais,
como autenticação, idioma e tema.

Vantagens:

- Já vem integrada ao React
- Não precisa instalar biblioteca externa
- Fácil implementação
- Boa para aplicações pequenas e médias

Desvantagens:

- Pode causar muitas renderizações quando o estado muda frequentemente
- Pode ficar difícil de organizar em aplicações grandes
*/


//============================== Criando um Contexto ==============================
/*
Para criar um contexto utilizamos createContext.

O contexto funciona como um "depósito" onde os dados globais serão guardados.
*/

import { createContext } from "react"

// Criando o contexto global
// Esse objeto será usado para compartilhar informações
const UsuarioContext = createContext()


//============================== Provider do Context ==============================
/*
O Provider é responsável por envolver os componentes que terão acesso
ao estado global.

Tudo que estiver dentro dele poderá consumir os dados.
*/

import { useState } from "react"

function UsuarioProvider({ children }) {

    // Estado que será compartilhado pela aplicação inteira
    const [usuario, setUsuario] = useState({
        nome: "usuario1",
        logado: true
    })


    return (
        <UsuarioContext.Provider value={{ usuario, setUsuario }}>

            {/* 
                children representa todos os componentes
                que estarão dentro desse Provider
            */}
            {children}

        </UsuarioContext.Provider>
    )
}


//============================== Consumindo Context ==============================
/*
Para acessar os valores do contexto usamos o hook useContext.

O componente consegue acessar diretamente os dados globais.
*/

import { useContext } from "react"

function Perfil() {

    // Buscando os dados armazenados no contexto
    const { usuario } = useContext(UsuarioContext)


    return (
        <div>

            {/* Exibindo informação global */}
            <h1>
                Usuário: {usuario.nome}
            </h1>

        </div>
    )
}


//============================== Zustand ==============================
/*
Zustand é uma biblioteca de gerenciamento de estado global
para React.

Ele possui uma abordagem mais simples que Redux, criando stores
(armazenamentos) independentes.

Diferente da Context API, o Zustand não depende de Provider.

O estado fica centralizado em uma store e os componentes acessam
somente os dados que precisam.

Vantagens:

- Código menor
- Fácil aprendizado
- Alta performance
- Não precisa criar muitos arquivos
- Evita problemas de renderização desnecessária

É muito utilizado em aplicações modernas React.
*/


//============================== Criando Store com Zustand ==============================
/*
Uma store guarda:

- Estado inicial
- Funções para alterar o estado
- Regras de negócio relacionadas ao estado
*/

import { create } from "zustand"


const useUsuarioStore = create((set) => ({

    // Estado inicial
    usuario: {
        nome: "usuario1",
        logado: false
    },


    // Função responsável por alterar o estado
    login: () => {

        set({

            usuario: {
                nome: "usuario1",
                logado: true
            }

        })

    },


    // Função para remover usuário
    logout: () => {

        set({

            usuario: {
                nome: "",
                logado: false
            }

        })

    }

}))


//============================== Usando Zustand no Componente ==============================
/*
O componente acessa diretamente a store.

Não é necessário criar Provider ou passar propriedades.
*/

function PerfilUsuario() {


    // Pegando somente os dados necessários da store
    const usuario = useUsuarioStore(
        (state) => state.usuario
    )


    return (

        <div>

            <h1>
                Nome: {usuario.nome}
            </h1>

        </div>

    )

}


//============================== Redux ==============================
/*
Redux é uma biblioteca avançada para gerenciamento de estado global.

É muito utilizada em aplicações grandes que precisam de:

- Grande controle de estado
- Histórico de alterações
- Debug avançado
- Organização complexa de dados

O Redux trabalha seguindo o padrão:

Component
    |
    |
    v
Dispatch Action
    |
    |
    v
Reducer
    |
    |
    v
Store Atualizada


Principais conceitos:

Store:
Local único onde todo estado global fica armazenado.

Action:
Objeto que descreve uma ação que aconteceu.

Reducer:
Função responsável por decidir como o estado será alterado.

Dispatch:
Função usada para enviar ações para o Redux.

Selector:
Função usada para buscar dados específicos da store.
*/


//============================== Redux Toolkit ==============================
/*
Atualmente o padrão recomendado é utilizar Redux Toolkit.

Ele simplifica o Redux tradicional reduzindo bastante código repetitivo.

Principais recursos:

createSlice:
Cria reducers e actions automaticamente.

configureStore:
Configura a store da aplicação.

Hooks:
useSelector e useDispatch facilitam o uso dentro dos componentes.
*/


//============================== Comparação entre as soluções ==============================
/*
Context API:

Indicado para:
- Tema
- Autenticação
- Idioma
- Estados simples

Possui:
- Menos configuração
- Recurso nativo do React


Zustand:

Indicado para:
- Aplicações médias
- Estados compartilhados frequentes
- Projetos que precisam de simplicidade

Possui:
- Pouco código
- Boa performance


Redux:

Indicado para:
- Sistemas grandes
- Estados complexos
- Equipes grandes

Possui:
- Arquitetura mais rígida
- Ferramentas avançadas de debug
*/


//============================== Exemplo Completo ==============================

import { createContext, useContext, useState } from "react"
import { create } from "zustand"


// ==============================
// Context API
// ==============================

const TemaContext = createContext()


function TemaProvider({ children }) {

    const [tema, setTema] = useState("dark")


    return (

        <TemaContext.Provider
            value={{ tema, setTema }}
        >

            {/* Componentes recebem acesso ao tema global */}
            {children}

        </TemaContext.Provider>

    )
}


// ==============================
// Zustand
// ==============================

const useCarrinhoStore = create((set) => ({

    produtos: [],


    adicionarProduto: (produto) => {

        set((state) => ({

            // Mantém produtos existentes e adiciona novo item
            produtos: [
                ...state.produtos,
                produto
            ]

        }))

    }

}))



// ==============================
// Componente Principal
// ==============================

function App() {


    return (

        <TemaProvider>

            <Painel />

        </TemaProvider>

    )

}



// ==============================
// Componente consumindo estados
// ==============================

function Painel() {


    const { tema } = useContext(TemaContext)


    const produtos = useCarrinhoStore(
        (state) => state.produtos
    )


    const adicionarProduto =
        useCarrinhoStore(
            (state) => state.adicionarProduto
        )


    return (

        <div>

            {/* Estado vindo do Context API */}
            <h1>
                Tema atual: {tema}
            </h1>


            {/* Estado vindo do Zustand */}
            <h2>
                Produtos: {produtos.length}
            </h2>


            <button

                onClick={() =>
                    adicionarProduto(
                        "Produto novo"
                    )
                }

            >

                {/* Botão altera o estado global */}
                Adicionar produto

            </button>


        </div>

    )

}