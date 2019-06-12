const examenesArray = [20, 100, 90, 66, 10, 0];
var examenesReprobados = 0;
var calificacionMinima = 60;

for (let index = 0; index < examenesArray.length; index++) {
    if (examenesArray[index] < calificacionMinima) {
        examenesReprobados += 1;
    }
}

console.log('El numero de examenes a repetir son : ' + examenesReprobados);