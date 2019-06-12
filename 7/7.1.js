const calificacionesArray = [8, 6, 8];
const promedio_minimo = 8;
var promedio = 0;

for (let index = 0; index < calificacionesArray.length; index++) {
    promedio += calificacionesArray[index];
}
promedio = promedio / calificacionesArray.length;

if (promedio >= promedio_minimo) {
    console.log('Felicidades tienes la beca');
} else {
    console.log('Suerte para la proxima');
}
console.log(promedio);