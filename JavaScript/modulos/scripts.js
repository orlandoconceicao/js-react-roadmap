//============================== import variável ==============================

//importando variáveis
import { nomeEmpresa, totalClientes } from "./dados.js"

console.log(nomeEmpresa)

console.log(totalClientes)


//============================== import function ==============================

//importando função
import { somar } from "./funcoes.js"

let resultado = somar(10, 5)

console.log(resultado)


//============================== import default ==============================

//importando export default
import mostrarMensagem from "./usuarios.js"

mostrarMensagem()


//============================== import objeto ==============================

//importando objeto
import { produto } from "./produto.js"

console.log(produto.nome)

console.log(produto.preco)

//============================== import * ==============================

//importando tudo
import * as sistema from "./sistemas.js"

console.log(sistema.nomeSistema)

console.log(sistema.versaoSistema)

sistema.iniciarSistema()


//============================== import usuários ==============================

//importando array
import { usuarios } from "./usuarios.js"

//percorrendo usuários
usuarios.forEach((usuario) => {

    console.log(usuario)

})