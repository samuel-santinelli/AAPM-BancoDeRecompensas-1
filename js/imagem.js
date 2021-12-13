'use strict'
/**
 * @param {!File} arquivo
 * @return {Promise<string>}
 */
const imageToBase = (arquivo) => {
	return new Promise( (resolve, reject) => {
		const fr = new FileReader();

		fr.onload = function(){
			resolve(this.result);
		}

		fr.onerror = function(){
			reject(undefined)
		}

		fr.readAsDataURL(arquivo)
	});
}