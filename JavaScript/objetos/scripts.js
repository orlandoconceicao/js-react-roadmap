//============================== Objetos JavaScript ==============================

// Criando um objeto
let pessoa = {
    nome: 'João',
    idade: 30,
    profissao: 'Desenvolvedor'
}
console.log(pessoa)


// acessando propriedades do objeto 
// notação de ponto
console.log(pessoa.nome) //acessa a propriedade 'nome' do objeto 'pessoa'
console.log(pessoa.idade) //acessa a propriedade 'idade' do objeto 'pessoa'
console.log(pessoa.profissao) //acessa a propriedade 'profissao' do objeto 'pessoa'

// notação de colchetes
console.log(pessoa['nome']) //acessa a propriedade 'nome' do objeto 'pessoa'
console.log(pessoa['idade']) //acessa a propriedade 'idade' do objeto 'pessoa'
console.log(pessoa['profissao']) //acessa a propriedade 'profissao' do objeto 'pessoa'


//============================== Alterar Propriedades do Objeto ==============================

let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020
}
console.log(carro)

// Alterando propriedades do objeto
carro.marca = 'Honda'
carro.modelo = 'Civic'
carro.ano = 2021

console.log(carro)

// Adicionando novas propriedades ao objeto
carro.cor = 'Preto'
carro.preco = 80000
console.log(carro)

//============================== Métodos de Array com Objetos ==============================

let nomes = ['Alice', 'Bob', 'Charlie', 'David']
//find() - retorna o primeiro elemento do array que satisfaz a condição
let nomeEncontrado = nomes.find((nome) => {//procura o primeiro nome que começa com a letra 'C'
    return nome.startsWith('C');//startsWith() - verifica se a string começa com a letra 'C'
});
console.log(nomeEncontrado);


//============================== Destructuring com Objetos ==============================
//Permite retirar valores do objeto facilmente

let casa = {
    endereco: 'Rua das Flores, 123',
    cidade: 'São Paulo',
    estado: 'SP'
}
//Destructuring - retirando valores do objeto
let { endereco, cidade, estado } = casa
console.log(endereco) //imprime o valor da propriedade 'endereco' do objeto 'casa'
console.log(cidade) //imprime o valor da propriedade 'cidade' do objeto 'casa'
console.log(estado) //imprime o valor da propriedade 'estado' do objeto 'casa'


// ============================== Destructuring Renomeando Variáveis ==============================
let { endereco: end, cidade: cid, estado: est } = casa
console.log(end) //imprime o valor da propriedade 'endereco' do objeto 'casa'
console.log(cid) //imprime o valor da propriedade 'cidade' do objeto 'casa'
console.log(est) //imprime o valor da propriedade 'estado' do objeto 'casa'


//============================== Spread Operator (...) com Objetos ==============================
//Permite copiar as propriedades de um objeto para outro

let notebok = {
    marca: 'Dell',
    modelo: 'Inspiron',
    ano: 2022
}
//Criando um novo objeto copiando as propriedades do objeto 'notebook' e adicionando novas propriedades
let notebookNovo = {
    ...notebok, //spread operator - copia as propriedades do objeto 'notebook'
    cor: 'Prata',
    preco: 5000
}
console.log(notebookNovo)


//============================== Copiando Objetos ==============================
let celular = {
    marca: 'Samsung',
    modelo: 'Galaxy S21',
    ano: 2021
}
//Criando um novo objeto copiando as propriedades do objeto 'celular'
let celularNovo = { ...celular }
console.log(celularNovo)


//============================== Object Methods ==============================
//Métodos são funções dentro de objetos.

let animal = {
    nome: 'Leão',
    especie: 'Panthera leo',    
    cadeiaAlimentar: function() { //método do objeto 'animal'
        console.log('Rei da selva!') 
    }
}
console.log(animal.nome) //imprime o valor da propriedade 'nome' do objeto 'animal'
console.log(animal.especie) //imprime o valor da propriedade 'especie' do objeto 'animal'
animal.cadeiaAlimentar() //chama o método 'cadeiaAlimentar' do objeto 'animal' para exibir a cadeia alimentar do leão


//============================== Método com Arrow Function ==============================
let tv = {
    marca: 'LG',
    modelo: 'OLED',
    ligar: () => { //método do objeto 'tv' usando arrow function
        console.log('TV ligada!') 
    }
}
console.log(tv.marca) //imprime o valor da propriedade 'marca' do objeto 'tv'
console.log(tv.modelo) //imprime o valor da propriedade 'modelo' do objeto 'tv'
tv.ligar() //chama o método 'ligar' do objeto 'tv' para ligar a TV


//============================== Exemplo completo ==============================
let empresa = {

    nome: "StackWeb Agency",
    clientes: 5,
    ativo: true,

    mostrarInformacoes: function () {

        console.log(`Empresa: ${this.nome}`)
        console.log(`Clientes: ${this.clientes}`)
        console.log(`Ativa: ${this.ativo}`)

    }

}

let { nome, clientes } = empresa

console.log(nome)
console.log(clientes)

empresa.mostrarInformacoes()

