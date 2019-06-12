const precioCompu  = parseFloat(75000);
const iva = parseFloat("16");

console.log("Total a pagar " + (precioCompu + (precioCompu * (iva/100))));