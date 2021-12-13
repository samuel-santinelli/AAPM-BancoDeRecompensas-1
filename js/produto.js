'use strict'

import * as ajax from "./consumo.js"

class Produto{
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
	constructor(id, nome, valor, descricao, imagembase64, avaliacao){
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
	static gravar(produto){
		return ajax.doPost(this.#url, produto)
	}

	/**
	 * @returns {Promise<Produto[]>}
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