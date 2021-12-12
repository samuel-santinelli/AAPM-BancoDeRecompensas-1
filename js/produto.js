'use strict'

import * as ajax from "./consumo.js"

class Produto{
	/**
	 * @private
	 * @type {string}
	 */
	static #url = "https://backendleonid.herokuapp.com/aapm/v1/produtos/"

	constructor(){
		this.id = 0;
		this.nome = '';
		this.valor = 0.0;
		this.descricao = '';
		this.imagem = '';
		this.avaliacao = 0;
	}

	/**
	 * @param {Produto} produto 
	 * @returns {Promise<Number>}
	 */
	static gravar(produto){
		return ajax.doPost(this.#url, produto)
	}

	/**
	 * @returns {Promise<Array<Produto>>}
	 */
	static listar(){
		return ajax.doGet(this.#url)
	}

	/**
	 * 
	 * @param {number} id 
	 * @returns {Promise<Produto>}
	 */
	static buscar(id){
		return this.listar().then( produtos => produtos.find(val => val.id === id))
	}
}

export default Produto;