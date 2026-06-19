//============================== Performance no React ==============================
/*
Performance em React é o conjunto de técnicas utilizadas para tornar aplicações
mais rápidas, reduzindo renderizações desnecessárias, carregamentos excessivos
e processamento desnecessário no navegador.

O React utiliza um processo chamado reconciliação, onde compara alterações no
estado da aplicação e decide quais partes da interface precisam ser atualizadas.

Uma boa otimização busca:

- Renderizar somente o necessário
- Carregar recursos apenas quando forem utilizados
- Evitar cálculos repetidos
- Reduzir o tamanho inicial da aplicação
- Melhorar a experiência do usuário

A performance deve ser aplicada quando existe uma necessidade real,
pois otimizações excessivas podem deixar o código mais complexo.
*/


//============================== Renderização no React ==============================
/*
Renderização é o processo onde o React transforma componentes em elementos HTML
que serão exibidos no navegador.

Sempre que um estado ou propriedade muda, o React pode executar novamente
a função do componente para verificar se existe alguma alteração na interface.

Exemplo:

function Usuario() {

    // Quando o estado muda, o componente é renderizado novamente
    return (
        <h1>Nome do usuário</h1>
    )
}


Uma renderização não significa necessariamente que o DOM inteiro foi alterado.

O React utiliza o Virtual DOM:

- Cria uma representação da interface em memória
- Compara a versão antiga com a nova
- Atualiza somente os elementos necessários no navegador
*/


//============================== Renderizações Desnecessárias ==============================
/*
Renderizações desnecessárias acontecem quando um componente é atualizado
mesmo sem nenhuma mudança relevante.

Isso pode causar lentidão principalmente em:

- Listas grandes
- Dashboards
- Sistemas complexos
- Componentes com cálculos pesados


Exemplo:

function App() {

    const usuario = {
        nome: "Orlando"
    }

    return (
        <Perfil usuario={usuario}/>
    )
}


Mesmo contendo os mesmos dados, um novo objeto é criado a cada renderização.

O React entende como um novo valor porque a referência mudou.

Soluções:

- Memorizar valores
- Memorizar componentes
- Organizar melhor o estado da aplicação
*/


//============================== React.memo ==============================
/*
React.memo é utilizado para evitar que um componente seja renderizado novamente
quando suas propriedades continuam iguais.

Ele cria uma comparação das props recebidas.

É muito usado em componentes reutilizáveis.


Exemplo:

const CardUsuario = React.memo(function CardUsuario({ nome }) {

    // Esse componente só renderiza novamente
    // quando a prop nome mudar

    return (
        <div>
            <h2>{nome}</h2>
        </div>
    )
})


Quando usar:

- Componentes grandes
- Componentes repetidos em listas
- Componentes que recebem muitas renderizações do pai


Não é recomendado usar em todos os componentes,
pois adiciona uma comparação extra para verificar mudanças.
*/


//============================== useMemo ==============================
/*
useMemo serve para armazenar o resultado de cálculos pesados.

Ele evita executar novamente uma operação quando as dependências
não sofreram alterações.


Sintaxe:

const valor = useMemo(() => {

    // Código pesado executado somente quando necessário
    return resultado

}, [dependencias])


Exemplo:

const total = useMemo(() => {

    // Evita recalcular toda vez que o componente renderiza
    return produtos.reduce(
        (soma, produto) => soma + produto.preco,
        0
    )

}, [produtos])


Uso comum:

- Cálculos matemáticos
- Filtros grandes
- Ordenações
- Transformações complexas de dados
*/


//============================== useCallback ==============================
/*
useCallback memoriza funções para evitar que uma nova função seja criada
a cada renderização.

Isso é importante quando uma função é enviada como propriedade para
componentes otimizados com React.memo.


Exemplo:

const buscarUsuario = useCallback(() => {

    // A função mantém a mesma referência
    console.log("Buscando usuário")

}, [])


Uso comum:

- Funções passadas para componentes filhos
- Eventos complexos
- Integração com bibliotecas externas
*/


//============================== Lazy Loading ==============================
/*
Lazy Loading significa carregar recursos somente quando eles forem necessários.

Em aplicações React grandes, carregar todos os componentes inicialmente
pode deixar o primeiro carregamento lento.

O React permite carregar componentes sob demanda utilizando React.lazy.


Exemplo:

const PaginaRelatorio = React.lazy(() => 
    import("./PaginaRelatorio")
)


O componente só será baixado quando for utilizado.


Benefícios:

- Menor carregamento inicial
- Aplicação abre mais rápido
- Menor uso de memória
- Melhor experiência em conexões lentas
*/


//============================== Suspense ==============================
/*
Suspense é utilizado junto com React.lazy para mostrar uma interface temporária
enquanto o componente está sendo carregado.


Exemplo:

<Suspense fallback={<p>Carregando...</p>}>

    <PaginaRelatorio/>

</Suspense>


O fallback pode ser:

- Texto de carregamento
- Spinner
- Skeleton screen
- Tela temporária
*/


//============================== Code Splitting ==============================
/*
Code Splitting é a divisão do código JavaScript em pequenos arquivos.

Ao invés do navegador baixar toda aplicação de uma vez,
ele carrega somente os módulos necessários.


Exemplo:

Uma aplicação possui:

- Página inicial
- Área administrativa
- Perfil
- Relatórios


Sem Code Splitting:

Baixa tudo no primeiro acesso.


Com Code Splitting:

Baixa somente a página atual.


Normalmente é aplicado com:

- React.lazy()
- Dynamic import()
- React Router
*/


//============================== Otimização de Renderização ==============================
/*
A otimização de renderização busca controlar quando componentes
devem ser atualizados.


Principais técnicas:


1. Manter estados próximos de onde são usados

Evite colocar todo estado no componente principal.


2. Dividir componentes grandes

Componentes menores permitem atualizações mais específicas.


3. Evitar criar valores novos sem necessidade

Exemplo:

// Cria novo objeto em toda renderização
const configuracao = {
    tema: "dark"
}


Pode causar renderizações extras.


4. Usar chaves corretamente em listas

O React utiliza keys para identificar elementos.


Exemplo:

usuarios.map(usuario => (

    <Usuario
        key={usuario.id}
        nome={usuario.nome}
    />

))


A key deve ser um valor único e estável.
*/


//============================== Virtualização de Listas ==============================
/*
Quando uma lista possui milhares de elementos,
renderizar todos de uma vez pode causar lentidão.

A virtualização renderiza somente os itens visíveis na tela.


Exemplo:

Lista com 10.000 usuários:

Sem virtualização:
- Cria 10.000 elementos HTML


Com virtualização:
- Cria somente os elementos atualmente visíveis


Bibliotecas utilizadas:

- react-window
- react-virtualized
*/


//============================== Otimização de Imagens e Recursos ==============================
/*
Imagens e arquivos grandes podem prejudicar a performance.


Boas práticas:

- Usar formatos modernos como WebP
- Redimensionar imagens antes do upload
- Aplicar carregamento atrasado
- Comprimir arquivos


Exemplo:

<img 
    src="imagem.webp"
    loading="lazy"
/>


O navegador carrega a imagem somente quando ela estiver próxima
da área visual do usuário.
*/


//============================== Ferramentas de Análise ==============================
/*
Para melhorar performance é necessário medir o comportamento da aplicação.


Ferramentas importantes:

React DevTools Profiler:

- Mostra componentes renderizados
- Mede tempo de renderização
- Identifica componentes lentos


Chrome DevTools:

- Analisa memória
- Mede carregamento
- Mostra problemas de rede


Performance API:

Permite medir tempos diretamente pelo código.
*/


//============================== Exemplo Completo ==============================

import React, { 
    useMemo, 
    useCallback, 
    Suspense 
} from "react"


// Carregamento sob demanda do componente
const Relatorio = React.lazy(() => import("./Relatorio"))


const ListaUsuarios = React.memo(function ListaUsuarios({ usuarios }) {

    // Componente protegido contra renderizações desnecessárias
    return (
        <div>

            {usuarios.map(usuario => (

                // Key ajuda o React a identificar cada elemento
                <p key={usuario.id}>
                    {usuario.nome}
                </p>

            ))}

        </div>
    )
})


function Dashboard() {

    const usuarios = [
        {
            id: 1,
            nome: "Usuario1"
        },
        {
            id: 2,
            nome: "Usuario2"
        }
    ]


    const totalUsuarios = useMemo(() => {

        // Evita recalcular valores quando os dados não mudam
        return usuarios.length

    }, [usuarios])


    const atualizarUsuarios = useCallback(() => {

        // Função mantém a mesma referência entre renderizações
        console.log("Atualizando usuários")

    }, [])


    return (

        <div>

            {/* Exibe um valor calculado utilizando memoização */}
            <h1>
                Total: {totalUsuarios}
            </h1>


            {/* Componente otimizado com React.memo */}
            <ListaUsuarios
                usuarios={usuarios}
            />


            {/* 
                Suspense mostra uma tela temporária
                enquanto o componente é carregado
            */}
            <Suspense fallback={<p>Carregando relatório...</p>}>

                <Relatorio/>

            </Suspense>


            <button onClick={atualizarUsuarios}>
                Atualizar
            </button>

        </div>

    )
}


export default Dashboard