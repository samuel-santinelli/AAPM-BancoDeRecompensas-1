'use strict'

import * as ajax from "./consumo.js"

class Produto {
	/**
	 * @private
	 * @type {string}
	 */
	static #url = "https://backendleonid.herokuapp.com/aapm/v1/produtos/"

	/**
	 * @param {number} id
	 * @param {string} nome
	 * @param {number} valor
	 * @param {string} descricao
	 * @param {string} imagembase64 Uma imagem depois que passou em FileReader()
	 * @param {number} avaliacao
	 * @constructor
	 */
	constructor(id, nome, valor, descricao, imagembase64, avaliacao) {
		this.id = id;
		this.nome = nome
		this.valor = valor;
		this.descricao = descricao;
		this.imagem = imagembase64;
		this.avaliacao = avaliacao;
	}

	/**
	 * @param {Produto} produto 
	 * @returns {Promise<Number>}
	 */
	static gravar(produto) {
		return ajax.doPost(this.#url, produto)
	}

	/**
	 * @returns {Promise<Produto[]>}
	 */
	static listar() {
		return ajax.doGet(this.#url)
	}

	/**
	 * @param {Produto} produto
	 * @returns {Promise<Number>}
	 */
	static atualizar(produto){
		return ajax.doPut(`${this.#url}/${produto.id}`)
	}

	/**
	 * @param {number} id
	 * @returns {Promise<Number>}
	 */
	static deletar(id){
		return ajax.doDelete(`${this.#url}/${id}`)
	}

	/**
	 * 
	 * @param {number} id 
	 * @returns {Promise<Produto>}
	 */
	static buscar(id) {
		return this.listar().then(produtos => produtos.find(val => val.id === id))
	}

	/**
	 * @param {Produto[]} produtos
	 * @return {Element[]}
	 */
	static listaCards(produtos) {
		return produtos.map(
			(vs) => {
				const element = document.createElement("div");

				element.innerHTML =
				`<div class="imgCard">
                    <img class="imagemCards" alt="${vs.nome}">
                </div>
                <div class="adicionar">
                    <input type="button" value="+Adicionar" class="btnAdicionar">
                </div>
                <div class="preco">
                    <div class="moeda">
                        <img src="img/moeda.PNG" class="imgMoeda"> 
                    </div>
                    <div class="precoMoeda">
						${vs.valor.toFixed(2)}
                    </div>
                </div>
                <div class="nomeProduto">
                    <h3>${vs.nome}</h3>
                </div> 
                <div class="estrelinha">
                    <img src="img/estrelinha.PNG">
                </div>`

				element.class = "cards"
				element.querySelector(".imagemCards").src = vs.imagem

				return element;
			}


		)
	}
}

export default Produto;