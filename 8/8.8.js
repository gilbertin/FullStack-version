const alumnos = [{
    nombre: "Pepe Grillo",
    calificaciones: [70, 50, 70, 30, 20, 90]
}];

alumnos.forEach(alumno => {
    let max = 0;
    for (let i = 0; i < alumno.calificaciones.length; i++) {
        if(max < alumno.calificaciones[i]){
            max = alumno.calificaciones[i];
        }
    }
    console.log('La calificación máxima es : ' + max);
});