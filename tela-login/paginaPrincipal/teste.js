import Produto from '../../js/produto.js'
import Usuario from '../../js/usuarios.js'


const produtos = await Produto.listar()

console.log(produtos)