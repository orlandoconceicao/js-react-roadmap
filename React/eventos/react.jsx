// ============================== EVENTOS (MUITO IMPORTANTE) ==============================

/*
Eventos são ações executadas pelo usuário dentro da aplicação.

Sempre que o usuário interage com algum elemento,
o React pode capturar essa interação e executar uma função.

Os eventos são fundamentais para criar interfaces dinâmicas
e interativas.

Alguns exemplos de eventos:

- Clique em botão
- Digitação em input
- Envio de formulário
- Movimento do mouse
- Teclas pressionadas
- Seleção de opções

Os eventos mais utilizados no React são:

- onClick
- onChange
- onSubmit
*/

/*
onClick
→ Executa quando o usuário clica.

onChange
→ Executa quando o valor de um campo muda.

onSubmit
→ Executa quando um formulário é enviado.

event.target.value
→ Valor digitado pelo usuário.

event.preventDefault()
→ Impede o recarregamento da página.
*/

// ============================== onClick ==============================

/*
onClick é executado quando o usuário clica
em determinado elemento.

É um dos eventos mais utilizados no React.

Normalmente é usado para:

- Abrir modais
- Fechar menus
- Atualizar estados
- Excluir registros
- Enviar ações
*/

Exemplo:

function App() {

    function mostrarMensagem() {

        alert("Botão clicado");

    }

    return (

        <button onClick={mostrarMensagem}>
            Clique Aqui
        </button>

    );

}


// Arrow Function:

function App() {

    return (

        <button
            onClick={() => {
                alert("Botão clicado");
            }}
        >
            Clique Aqui
        </button>

    );

}


// Atualizando estado:

import { useState } from "react";

function App() {

    const [contador, setContador] =
        useState(0);

    return (

        <button
            onClick={() =>
                setContador(contador + 1)
            }
        >
            {contador}
        </button>

    );

}



// ============================== onChange ==============================

/*
onChange é executado sempre que o valor
de um campo muda.

É muito utilizado em:

- Inputs
- Textareas
- Selects
- Formulários

Normalmente ele é combinado com useState.
*/

Exemplo:

import { useState } from "react";

function App() {

    const [nome, setNome] =
        useState("");

    return (

        <>
            <input
                type="text"
                value={nome}
                onChange={(evento) =>
                    setNome(evento.target.value)
                }
            />

            <h2>{nome}</h2>
        </>

    );

}

/*
Fluxo:

txt
Usuário digita
        ↓
onChange dispara
        ↓
Captura valor digitado
        ↓
Atualiza estado
        ↓
React renderiza novamente
*/


// ============================== FORMULÁRIOS ==============================

/*
Formulários são utilizados para coletar
informações dos usuários.

Exemplos:

- Login
- Cadastro
- Contato
- Pesquisa
- Pagamentos

No React normalmente utilizamos:

- useState
- onChange
- onSubmit
*/

// Exemplo completo:

import { useState } from "react";

function App() {

    const [nome, setNome] =
        useState("");

    const [email, setEmail] =
        useState("");

    function enviarFormulario(evento) {

        // Evita recarregar a página

        evento.preventDefault();

        console.log(nome);
        console.log(email);

    }

    return (

        <form onSubmit={enviarFormulario}>

            <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(evento) =>
                    setNome(evento.target.value)
                }
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(evento) =>
                    setEmail(evento.target.value)
                }
            />

            <button type="submit">
                Enviar
            </button>

        </form>

    );

}

/*
Fluxo do formulário:

txt
Usuário preenche campos
            ↓
onChange captura valores
            ↓
useState armazena dados
            ↓
Usuário envia formulário
            ↓
onSubmit executa função
            ↓
Dados são processados
*/


// ============================== EXEMPLO COMPLETO ==============================

import { useState } from "react";

function App() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [usuario, setUsuario] = useState(null);

    // onClick
    function limparFormulario() {
        setNome("");
        setEmail("");
        setUsuario(null);
    }

    // onSubmit
    function enviarFormulario(event) {
        event.preventDefault();

        setUsuario({
            nome: nome,
            email: email
        });
    }

    return (
        <div>
            <h1>Cadastro de Usuário</h1>

            <form onSubmit={enviarFormulario}>
                {/* onChange */}
                <div>
                    <label>Nome</label>
                    <br />
                    <input
                        type="text"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(event) =>
                            setNome(event.target.value)
                        }
                    />
                </div>

                <br />

                {/* onChange */}
                <div>
                    <label>Email</label>
                    <br />
                    <input
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(event) =>
                            setEmail(event.target.value)
                        }
                    />
                </div>

                <br />

                {/* onSubmit */}
                <button type="submit">
                    Cadastrar
                </button>

                {/* onClick */}
                <button
                    type="button"
                    onClick={limparFormulario}
                >
                    Limpar
                </button>
            </form>

            <hr />

            {usuario && (
                <div>
                    <h2>Usuário Cadastrado</h2>

                    <p>
                        <strong>Nome:</strong> {usuario.nome}
                    </p>

                    <p>
                        <strong>Email:</strong> {usuario.email}
                    </p>
                </div>
            )}
        </div>
    );
}

export default App;