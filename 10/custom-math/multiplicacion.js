function multiplicacion(elementos) {
	let total = 0;
    for (let i = 0; i < elementos.length; i++) {
        if (i == 0){
            total = elementos[i];   
        } else {
            total *= elementos[i];   
        }
    }
	return total;
}
module.exports.multiplicacion = multiplicacion;