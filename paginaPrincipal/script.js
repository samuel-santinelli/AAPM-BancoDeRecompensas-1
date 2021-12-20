import Produto from '../../js/produto.js'
import Usuario from '../../js/usuarios.js'


const produtos = await Produto.listar()

document.getElementById("produtos").replaceChildren(...Produto.listaCards(produtos))