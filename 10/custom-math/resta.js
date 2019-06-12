function resta(elementos) {
	let total = 0;
    for (let i = 0; i < elementos.length; i++) {
        total -= elementos[i];   
    }
	return total;
}
module.exports.resta = resta;