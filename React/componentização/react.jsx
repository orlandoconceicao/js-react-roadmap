// ============================== COMPONENTIZAÇÃO ==============================

/*
Componentização é a técnica de dividir a interface
em pequenas partes independentes chamadas componentes.

Cada componente possui uma responsabilidade específica.

Exemplos:

- Header
- Navbar
- Card
- Button
- Modal
- Footer

A ideia é evitar que toda a aplicação fique
em um único arquivo.

Benefícios:

- Organização
- Reutilização
- Escalabilidade
- Manutenção facilitada
- Código mais limpo
*/


// ============================== O QUE É UM COMPONENTE ==============================

/*
Um componente é uma função JavaScript
que retorna JSX.

Ele representa uma parte da interface.

Exemplo:
*/

function Header() {

    return (
        <h1>StackWeb Agency</h1>
    );

}

/*
Fluxo:

1. React executa a função

2. A função retorna JSX

3. React renderiza na tela

Resultado:

StackWeb Agency
*/


// ============================== SEPARAR COMPONENTES ==============================

/*
Separar componentes significa criar arquivos
independentes para cada parte da interface.

Em vez de colocar tudo dentro do App,
criamos arquivos específicos.

Exemplo:

Header.jsx
Card.jsx
Footer.jsx
*/


// Exemplo sem separação

function App() {

    return (

        <div>

            <header>
                Header
            </header>

            <main>
                Conteúdo
            </main>

            <footer>
                Footer
            </footer>

        </div>

    );

}


/*
Problema:

Conforme o projeto cresce,
o arquivo fica enorme.
*/


// Exemplo com separação

// Header.jsx

function Header() {

    return (
        <header>Header</header>
    );

}

export default Header;


// Footer.jsx

function Footer() {

    return (
        <footer>Footer</footer>
    );

}

export default Footer;


/*
Vantagens:

- Melhor organização
- Arquivos menores
- Mais fácil encontrar código
- Manutenção simplificada
*/


// ============================== RESPONSABILIDADE ÚNICA ==============================

/*
Cada componente deve possuir
apenas uma responsabilidade.

Errado:

Um componente que faz:

- Login
- Cadastro
- Dashboard
- Relatórios

Tudo junto.

Correto:

Login.jsx
Cadastro.jsx
Dashboard.jsx
Relatorio.jsx

Cada componente cuida apenas
da sua função.
*/


// ============================== REUTILIZAÇÃO ==============================

/*
Reutilização significa criar uma vez
e utilizar várias vezes.

Isso evita repetição de código.
*/


function Button() {

    return (
        <button>
            Comprar
        </button>
    );

}


/*
Podemos utilizar:

<Button />
<Button />
<Button />
<Button />

sem duplicar código.
*/


/*
Fluxo:

1. Criamos o componente

2. Importamos onde necessário

3. Reutilizamos várias vezes
*/


// ============================== PROPS ==============================

/*
Props são informações enviadas
de um componente pai para um componente filho.

Elas permitem personalizar componentes.
*/


// Componente

function Card(props) {

    return (

        <div>

            <h3>{props.nome}</h3>

        </div>

    );

}


// Utilização
/*
<Card nome="Notebook" />

<Card nome="Mouse" />

<Card nome="Teclado" />
*/

/*
Resultado:

Notebook

Mouse

Teclado
*/


/*
Fluxo:

1. Pai envia props

2. Filho recebe props

3. JSX exibe os dados

4. Mesmo componente
   mostra conteúdos diferentes
*/


// ============================== CHILDREN ==============================

/*
Children é uma prop especial.

Ela representa tudo que fica
entre as tags de abertura
e fechamento do componente.
*/


function Container({ children }) {

    return (

        <div>

            {children}

        </div>

    );

}


// Utilização

<Container>

    <h1>Título</h1>

    <p>Conteúdo</p>

</Container>


/*
Resultado:

Título

Conteúdo
*/


// ============================== EXPORTAÇÃO ==============================

/*
Para utilizar componentes em outros arquivos,
precisamos exportar.

Existem dois tipos principais.
*/


// Export Default

function Header() {

    return <h1>Header</h1>;

}

export default Header;


/*
Importação:

import Header from "./Header";
*/


// Export Named

export function Footer() {

    return <h1>Footer</h1>;

}


/*
Importação:

import { Footer } from "./Footer";
*/


// ============================== IMPORTAÇÃO ==============================

/*
Import permite utilizar componentes
criados em outros arquivos.
*/


import Header from "./components/Header";

import Footer from "./components/Footer";


function App() {

    return (

        <div>

            <Header />

            <Footer />

        </div>

    );

}


/*
Fluxo:

1. Arquivo exporta

2. Outro arquivo importa

3. Componente pode ser utilizado
*/


// ============================== ORGANIZAÇÃO DE PASTAS ==============================

/*
A organização das pastas melhora
a estrutura do projeto.

Exemplo:
*/

/*
src

├── assets
│
├── components
│
│   ├── Header.jsx
│   ├── Card.jsx
│   ├── Button.jsx
│   └── Footer.jsx
│
├── pages
│
│   ├── Home.jsx
│   ├── Produtos.jsx
│   └── Contato.jsx
│
├── services
│
├── hooks
│
├── styles
│
└── App.jsx
*/

/*
Funções:

assets
→ Imagens

components
→ Componentes reutilizáveis

pages
→ Páginas

services
→ APIs

hooks
→ Hooks personalizados

styles
→ Arquivos CSS
*/


// ============================== BOAS PRÁTICAS ==============================

/*
1. Um componente por arquivo

2. Nomes em PascalCase

Correto:

Header.jsx
ProductCard.jsx

Errado:

header.jsx
productcard.jsx

3. Componentes pequenos

4. Evitar duplicação de código

5. Criar componentes reutilizáveis

6. Organizar em pastas
*/


// ============================== EXEMPLO FUNCIONAL COMPLETO ==============================

/*
Exemplo utilizando:

✓ Componentização

✓ Separação de componentes

✓ Reutilização

✓ Props

✓ Children

✓ Export

✓ Import

✓ Organização

✓ Responsabilidade única
*/


// ============================== Header.jsx ==============================

function Header() {

    return (

        <header>

            <h1>Loja Virtual</h1>

        </header>

    );

}

export default Header;


// ============================== Button.jsx ==============================

function Button({ texto }) {

    return (

        <button>

            {texto}

        </button>

    );

}

export default Button;


// ============================== Card.jsx ==============================

import Button from "./Button";

function Card({ nome, preco }) {

    return (

        <div>

            <h2>{nome}</h2>

            <p>{preco}</p>

            <Button texto="Comprar" />

        </div>

    );

}

export default Card;


// ============================== Container.jsx ==============================

function Container({ children }) {

    return (

        <section>

            {children}

        </section>

    );

}

export default Container;


// ============================== Footer.jsx ==============================

export function Footer() {

    return (

        <footer>

            Todos os direitos reservados

        </footer>

    );

}


// ============================== App.jsx ==============================

import Header from "./components/Header";

import Card from "./components/Card";

import Container from "./components/Container";

import { Footer } from "./components/Footer";

function App() {

    return (

        <div>

            <Header />

            <Container>

                <Card
                    nome="Notebook"
                    preco="R$ 3500"
                />

                <Card
                    nome="Mouse"
                    preco="R$ 100"
                />

                <Card
                    nome="Teclado"
                    preco="R$ 250"
                />

            </Container>

            <Footer />

        </div>

    );

}

export default App;


/*
Fluxo Completo:

1. App importa componentes

2. Header exibe o topo

3. Container recebe children

4. Card recebe props

5. Button é reutilizado
   dentro dos Cards

6. Footer exibe o rodapé

7. React monta toda a interface

Estrutura:

App
│
├── Header
│
├── Container
│   │
│   ├── Card
│   │   └── Button
│   │
│   ├── Card
│   │   └── Button
│   │
│   └── Card
│       └── Button
│
└── Footer

Resultado:

Loja Virtual

Notebook
R$ 3500
[Comprar]

Mouse
R$ 100
[Comprar]

Teclado
R$ 250
[Comprar]

Todos os direitos reservados
*/


// ============================== RESUMO ==============================

/*
COMPONENTE
→ Parte da interface.

SEPARAÇÃO
→ Componentes em arquivos próprios.

RESPONSABILIDADE ÚNICA
→ Cada componente faz apenas uma coisa.

REUTILIZAÇÃO
→ Criar uma vez e usar várias.

PROPS
→ Enviar dados para componentes.

CHILDREN
→ Conteúdo dentro das tags.

EXPORT
→ Disponibiliza componentes.

IMPORT
→ Utiliza componentes.

ORGANIZAÇÃO DE PASTAS
→ Estrutura limpa e escalável.

Fluxo Geral:

COMPONENTE
      ↓
SEPARAÇÃO
      ↓
EXPORT
      ↓
IMPORT
      ↓
PROPS
      ↓
CHILDREN
      ↓
REUTILIZAÇÃO
      ↓
REACT RENDERIZA
*/