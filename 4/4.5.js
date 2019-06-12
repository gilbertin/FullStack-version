const valorTotal  = parseFloat("1000000");
const iva = parseFloat("16");

console.log("Dinero para cada socio: " + ((valorTotal - (valorTotal * (iva/100)))/2));