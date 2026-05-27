//====================================== Arrays JavaScript ======================================

// map() - percorre um array e cria um novo array
let numeros = [1, 2, 3, 4]
let numerosDobrados = numeros.map((numero) => {//percorre cada número do array e retorna o dobro
    return numero * 2
})

console.log(numerosDobrados)
//let numerosDobrados = numeros.map(numero => numero * 2) - forma resumida do map


// filter() - filtra valores do array
let idadesUsuarios = [12, 18, 20, 15, 30]
let maioresDeIdade = idadesUsuarios.filter((idadeUsuario) => { //filtra as idades maiores ou iguais a 18
    return idadeUsuario >= 18
})
console.log(maioresDeIdade)
//let maioresDeIdade = idadesUsuarios.filter(idadeUsuario => idadeUsuario >= 18) - forma resumida do filter


//find() - encontra o primeiro elemento que satisfaz a condição
let nomes = ['Ana', 'Bruno', 'Carlos', 'Diana']
let nomeEncontrado = nomes.find((nome) => {//encontra o primeiro nome que começa com a letra 'C'
    return nome.startsWith('C')//startsWith() - verifica se a string começa com a letra 'C'
})

console.log(nomeEncontrado)
//let nomeEncontrado = nomes.find(nome => nome.startsWith('C')) - forma resumida do find


//forEach() - percorre um array e executa uma função para cada elemento
let frutas = ['Maçã', 'Banana', 'Laranja']
frutas.forEach((fruta) => {//percorre cada fruta do array e imprime no console
    console.log(fruta)//imprime cada fruta do array
})
//frutas.forEach(fruta => console.log(fruta)) - forma resumida do forEach


//some() - verifica se pelo menos um elemento do array satisfaz a condição
let numeros2 = [1, 3, 5, 7, 8]
let temPar = numeros2.some((numero) => {//verifica se tem pelo menos um número par no array
    return numero % 2 === 0//verifica se o número é par
})
console.log(temPar)
//let temPar = numeros2.some(numero => numero % 2 === 0) - forma resumida do some


//every() - verifica se todos os elementos do array satisfazem a condição
let numeros3 = [2, 4, 6, 8]
let todosPares = numeros3.every((numero) => {//verifica se todos os números do array são pares
    return numero % 2 === 0//verifica se o número é par
})
console.log(todosPares)
//let todosPares = numeros3.every(numero => numero % 2 === 0) - forma resumida do every


//reduce() - reduz um array a um único valor
let numeros4 = [1, 2, 3, 4]
let soma = numeros4.reduce((acumulador, numero) => {//soma todos os números do array
    return acumulador + numero//retorna a soma do acumulador com o número atual
}, 0)//0 é o valor inicial do acumulador
console.log(soma)
//let soma = numeros4.reduce((acumulador, numero) => acumulador + numero, 0) - forma resumida do reduce


//============================== Exemplo Completo ==============================
let produtos = [
    { nome: 'Camiseta', preco: 50 },
    { nome: 'Calça', preco: 100 },
    { nome: 'Tênis', preco: 150 },
    { nome: 'Boné', preco: 30 }
]
//filtra os produtos com preço maior que 50, depois mapeia para obter apenas os nomes dos produtos
let produtosCaros = produtos.filter((produto) => {//filtra os produtos com preço maior que 50

    return produto.preco > 50//filtra os produtos com preço maior que 50

}).map((produto) => {//mapeia para obter apenas os nomes dos produtos
    
    return produto.nome//retorna apenas o nome do produto
})

console.log(produtosCaros)