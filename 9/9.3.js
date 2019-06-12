function contar_examenes_repetir(examenes) {
    let numExamenRepetir = 0;
    for (let i = 0; i < examenes.length; i++) {
        if (examenes[i] < 6) {
            numExamenRepetir += 1;
        }        
    }
    return numExamenRepetir;
}

const exam1 = [4, 6, 7, 8, 9, 1];
const exam2 = [10, 9, 7, 8, 9, 8];
const exam3 = [4, 5, 1, 3, 9, 1];

console.log('El numero total de examenes a repetir es : ' + contar_examenes_repetir(exam1));
console.log('El numero total de examenes a repetir es : ' + contar_examenes_repetir(exam2));
console.log('El numero total de examenes a repetir es : ' + contar_examenes_repetir(exam3));