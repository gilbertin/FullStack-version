// const customMath = require('./custom-math');

// console.log(customMath.suma(1, 2));
// console.log(customMath.resta(10, 2));
// console.log(customMath.multiplicacion(5, 5));
// console.log(customMath.division(10, 2));

const customMathSuma = require('./custom-math/suma');
const customMathResta = require('./custom-math/resta');
const customMathMultiplicacion = require('./custom-math/multiplicacion');
const customMathDivision = require('./custom-math/division');

console.log(customMathSuma.suma([1, 2, 3, 4]));
console.log(customMathResta.resta([1, 2, 3, 4]));
console.log(customMathMultiplicacion.multiplicacion([1, 2, 3, 4]));
console.log(customMathDivision.division([1, 2, 3, 4]));