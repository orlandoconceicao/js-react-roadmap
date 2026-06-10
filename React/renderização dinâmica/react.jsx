// ============================== RENDERIZAÇÃO DINÂMICA (MUITO IMPORTANTE) ==============================

/*
Renderização dinâmica é a capacidade do React de exibir
conteúdo na tela com base em dados, estados e condições.

Ao invés de escrever vários elementos manualmente,
o React permite gerar componentes automaticamente.

Os conceitos mais importantes são:

- map
- listas
- keys
- condicionais
*/


// ============================== map ==============================

/*
map é um método do JavaScript utilizado para percorrer
arrays e retornar um novo array.

No React ele é muito utilizado para transformar dados
em elementos JSX.
*/

// Exemplo:

const usuarios = [
    "João",
    "Maria",
    "Pedro"
];

{
    usuarios.map(usuario => (
        <p>{usuario}</p>
    ));
}

/*
Fluxo:

1. map percorre o array
2. Cada item é processado
3. JSX é gerado
4. React renderiza na tela
*/


// ============================== LISTAS ==============================

/*
Listas são conjuntos de dados exibidos dinamicamente.

Na maioria dos projetos, os dados das listas vêm de:

- APIs
- Bancos de dados
- Estados (useState)
- Arquivos JSON

O React normalmente utiliza listas para armazenar
e organizar informações que serão exibidas na interface.
*/


// Exemplo de Lista Simples:

const nomes = [
    "João",
    "Maria",
    "Pedro",
    "Ana"
];

/*
A lista contém:

[
    "João",
    "Maria",
    "Pedro",
    "Ana"
]
*/


// Exemplo de Lista com Objetos:

const produtos = [

    {
        id: 1,
        nome: "Notebook"
    },

    {
        id: 2,
        nome: "Mouse"
    },

    {
        id: 3,
        nome: "Teclado"
    }

];

/*
A lista contém vários objetos:

[
    { id: 1, nome: "Notebook" },
    { id: 2, nome: "Mouse" },
    { id: 3, nome: "Teclado" }
]
]


Fluxo:

1. A lista armazena os dados
2. React recebe a lista
3. map percorre os itens
4. Os itens são exibidos na tela
*/


// ============================== KEYS ==============================

/*
Keys são identificadores únicos utilizados pelo React
para reconhecer elementos dentro de listas.

Elas ajudam o React a identificar:

- Itens adicionados
- Itens removidos
- Itens atualizados

Sem keys o React exibirá avisos no console.
*/

// Exemplo:

const usuarios = [

    {
        id: 1,
        nome: "João"
    },

    {
        id: 2,
        nome: "Maria"
    }

];

{
    usuarios.map(usuario => (

        <p key={usuario.id}>
            {usuario.nome}
        </p>

    ));
}

/*
Boa prática:

key={usuario.id}

Evite:

key={index}
*/


// ============================== CONDICIONAIS ==============================

/*
Condicionais permitem exibir ou ocultar elementos
dependendo de uma condição.

São muito utilizadas para:

- Login
- Permissões
- Carregamento
- Mensagens
- Exibição de componentes
*/


// Operador &&

const logado = true;

{
    logado && (
        <h1>Bem-vindo</h1>
    );
}

/*
Se logado for true:

Bem-vindo

Se logado for false:

Nada aparece
*/


// Operador Ternário

{
    logado
        ? <h1>Usuário Logado</h1>
        : <h1>Faça Login</h1>;
}

/*
true  -> Usuário Logado

false -> Faça Login
*/


// ============================== EXEMPLO FUNCIONAL ==============================

/*
Exemplo utilizando:

✓ Listas
✓ map
✓ keys
✓ condicionais
*/

import { useState } from "react";

function App() {

    const [logado] = useState(true);

    // LISTA DE DADOS

    const [usuarios] = useState([

        {
            id: 1,
            nome: "João"
        },

        {
            id: 2,
            nome: "Maria"
        },

        {
            id: 3,
            nome: "Pedro"
        },

        {
            id: 4,
            nome: "Ana"
        }

    ]);

    return (

        <div>

            <h1>Sistema de Usuários</h1>

            <hr />

            {/* CONDICIONAL */}

            {
                logado
                    ? <h2>Usuário Logado</h2>
                    : <h2>Faça Login</h2>
            }

            <hr />

            <h2>Lista de Usuários</h2>

            <ul>

                {/* MAP + KEY */}

                {
                    usuarios.map(usuario => (

                        <li key={usuario.id}>

                            {usuario.nome}

                        </li>

                    ))
                }

            </ul>

        </div>

    );

}

export default App;


/*
Fluxo do exemplo:

1. usuarios é uma lista

2. map percorre todos os itens

3. Cada item gera um <li>

4. key identifica cada usuário

5. A condição verifica se o usuário
   está logado

6. React renderiza a interface

Resultado:

Sistema de Usuários

Usuário Logado

• João
• Maria
• Pedro
• Ana
*/


// ============================== RESUMO ==============================

/*
LISTAS
→ Armazenam os dados.

MAP
→ Percorre os dados.

KEYS
→ Identificam cada item.

CONDICIONAIS
→ Decidem o que será exibido.

Fluxo Geral:

LISTA
 ↓
MAP
 ↓
KEY
 ↓
REACT RENDERIZA
 ↓
CONDICIONAL DEFINE O QUE APARECE
*/