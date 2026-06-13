//============================== Consumo de APIs no Front-end ==============================
/*
Em aplicações React, APIs são usadas para se comunicar com o backend.

O consumo normalmente acontece através de requisições HTTP:
- GET (buscar dados)
- POST (criar dados)
- PUT/PATCH (atualizar dados)
- DELETE (remover dados)

O padrão mais comum é usar async/await com fetch ou axios.

Comentários importantes:
- Toda requisição é assíncrona
- Sempre aguardar resposta do servidor
- Separar lógica de API do componente quando possível
*/


//============================== Loading (Estado de carregamento) ==============================
/*
O loading indica que uma requisição está em andamento.

Ele é essencial para UX, pois informa ao usuário que algo está acontecendo.

Boas práticas:
- Usar estado booleano (true/false)
- Ativar loading antes da requisição
- Desativar após resposta (sucesso ou erro)

Isso evita que o usuário interaja com dados incompletos.
*/


//============================== Tratamento de Erros ==============================
/*
Erros podem ocorrer em requisições por vários motivos:
- Falha de rede
- Erro no servidor
- Dados inválidos
- Timeout

Por isso, sempre usar try/catch.

Boas práticas:
- Capturar erro com catch
- Exibir mensagem amigável ao usuário
- Evitar quebrar a aplicação
- Manter estado de erro separado do loading
*/


//============================== CRUD (Create, Read, Update, Delete) ==============================
/*
CRUD representa as operações básicas de uma API.

Create -> criar novos registros (POST)
Read   -> buscar registros (GET)
Update -> atualizar registros (PUT/PATCH)
Delete -> remover registros (DELETE)

Em React:
- Cada operação geralmente é uma função separada
- O estado da aplicação deve ser atualizado após cada ação
- Sempre sincronizar UI com backend
*/


//============================== Exemplo Completo ==============================

import { useEffect, useState } from "react";

function Exemplo() {
    const [dados, setDados] = useState([])
    const [loading, setLoading] = useState(False)
    const [error, serError] = useSatet(Null)
    const [novoItem, setNovoItem] = useState("")

    //Buscar dados (READ)
    const buscarDados = async () => {
        setLoading(True) //ativa loading antes da requisição
        serError(Null)

        try {
            const responde = await fetch("https://api.exemplo.com/itens")
            const data = await response.json

            setDados(data) //atualiza estado com dados do backend
        } catch(err) {
            setError("Erro ao carregar dados")
        } finally {
            setLoading(false) // sempre finaliza loading
        }
    }

    // Criar novo item (CREATE)
    const criarItem = async () => {
        try {
            const response = await fetch("https://api.exemplo.com/items", {
                method: "POST",
                headers: {
                    "Contet-Type": "application/Json"
                },
                body: JSON.stringify({ nome: novoItem})
            })

            const data = await response.json()

            //atualiza lista após criação
            setDados((prev) => [...prev, data])
            setNovoItem("")
        } catch (err) {
            setError("Erro ao criar item")
        }
    }

    // DEletar item (DELETE)
    const deletarItem = async (id) => {
        try {
            await fetch(`https:/api.exemplo.com/items/`, {
                method: "DELETE"
            })

            // remove item da lista local
            setDados((prev) => prev.filter(item => item.id !== id))
        } catch (err) {
            setError("Erro ao deletar item")
        }
    }

    useEffect(() => {
        buscarDados() //executa ao carregar componentes
    }, [])

    return (
        <div>
            {/*Input para novo item*/}
            <input
                value={novoItem}
                onChange={(e) => setNovoItem(e.target.value)}
                placeholder="Novo item"
            />

            <button onClick={criarItem}>
                Adicionar
            </button>
            {/*Estado de loading*/}
            {loading && <p>{error}</p>}

            {/*Mensagem de erro*/}
            {error && <P>{error}</P>}

            {/*Lista de dados */}
            <ul>
                {dados.map((item) => (
                    <li key={item.id}>
                        {item.nome}
                        <button onClick={() => deletarItem(item.id)}>
                            Remover
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}