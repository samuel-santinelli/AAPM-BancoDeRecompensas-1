'use strict'

import * as ajax from "./consumo.js"

class Usuario{
	/**
	 * @private
	 * @type {string}
	 */
	static #url = "https://backendleonid.herokuapp.com/aapm/v1/usuarios/"

	constructor(){
		this.id = 0;
		this.nome = '';
		this.email = '';
		this.senha = '';
		this.matricula = 0;
		this.moedas = 0;
		/**
		 * @type {Array<Number>}
		 */
		this.produtosComprados = []
	}

	/**
	 * @param {Usuario} usuario 
	 * @returns {Promise<Number>}
	 */
	static gravar(usuario){
		return ajax.doPost(this.#url, usuario)
	}

	/**
	 * @returns {Promise<Array<Usuario>>}
	 */
	static listar(){
		return ajax.doGet(this.#url)
	}

	/**
	 * 
	 * @param {number} id 
	 * @returns {Promise<Usuario>}
	 */
	static buscar(id){
		return this.listar().then( usuarios => usuarios.find(val => val.id === id))
	}
}

export default Usuario;