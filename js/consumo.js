'use strict';

/**
 * @param {string} url 
 * @return {Promise<any>}
 */
const doGet = (url) => {
	return fetch(url).then( (response) => new Promise( (success, error) => response.ok ? success(response.json()) : error(response.status) ))
}

/**
 * @param {string} url 
 * @param {Object|Array} object 
 * @return {Promise<Number>}
 */
const doPost = (url, object) => {
	return fetch(url, {
		method: 'post', 
		body: object, 
		headers: {'content-type': 'application/json'}
	}).then( (response) => new Promise( (success, error) => response.ok ? success(response.status) : error(response.status) ))
}

/**
 * @param {string} url 
 * @param {Object|Array} object 
 * @return {Promise<Number>}
 */
const doPut = (url, object) => {
	return fetch(url, {
		method: 'put', 
		body: object, 
		headers: {'content-type': 'application/json'}
	}).then( (response) => new Promise( (success, error) => response.ok ? success(response.status) : error(response.status) ))
}

/**
 * @param {string} url 
 * @return {Promise<Number>}
 */
const doDelete = (url) => {
	return fetch(url, {method: 'delete'}).then( (response) => (success, error) => response.ok ? success(response.status) : error(response.status) )
}

export {doGet, doPost, doPut, doDelete}