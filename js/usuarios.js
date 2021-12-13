'use strict'

import * as ajax from "./consumo.js"

class Usuario{
	/**
	 * @private
	 * @type {string}
	 */
	static #url = "https://backendleonid.herokuapp.com/aapm/v1/usuarios/"

	/**
	 * @param {number} id
	 * @param {string} nome
	 * @param {string} email
	 * @param {string} senha
	 * @param {number} matricula
	 * @param {number} moedas
	 * @param {number[]} produtosComprados
	 * @constructor
	 */
	constructor(id, nome, email, senha, matricula, moedas, produtosComprados){
		this.id = id;
		this.nome = nome
		this.email = email
		this.senha = senha
		this.matricula = matricula;
		this.moedas = moedas;
		this.produtosComprados = produtosComprados;
	}

	/**
	 * @param {Usuario} usuario 
	 * @returns {Promise<Number>}
	 */
	static gravar(usuario){
		return ajax.doPost(this.#url, usuario)
	}

	/**
	 * @returns {Promise<Usuario[]>}
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