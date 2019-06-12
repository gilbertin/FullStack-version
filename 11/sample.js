const conversor = require('./conversor');
let num = 233;

console.log('El valor binario es ' + conversor.toBinary(num));
console.log('El valor hexadecimal es ' + conversor.toHexadecimal(num));
console.log('El valor octal es ' + conversor.toOctal(num));