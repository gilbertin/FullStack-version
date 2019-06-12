function asistencia(asistencias) {
    let totalAsistencias = 0;
    for (let i = 0; i < asistencias.length; i++) {
        if (asistencias[i]) {
            totalAsistencias += 1;
        }
    }
    return totalAsistencias;
}

const asis1 = [true, true, true, true];
const asis2 = [true, false, false, false, true];
const asis3 = [true, false, true, false, true];

console.log('El numero total de aistencias es : ' + asistencia(asis1));
console.log('El numero total de aistencias es : ' + asistencia(asis2));
console.log('El numero total de aistencias es : ' + asistencia(asis3));