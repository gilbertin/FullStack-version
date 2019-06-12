function promedio(calificaciones) {
    let promedio = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        promedio += calificaciones[i];   
    }
    return promedio/calificaciones.length;
}

const conjunto = [
    {
        cal: [7, 8, 9, 7, 8]
    },
    {
        cal: [10, 8, 9, 1, 8, 10]
    },
    {
        cal: [10, 10, 10]
    }
]

conjunto.forEach(c => {
    let prom = promedio(c.cal);
    if (prom >= 8) {
        console.log('Felicidades tienes una beca por tu promedio de ' + prom);
    } else {
        console.log('Suerte para la proxima tu promedio de ' + prom + ' no es suficiente');
    }
});