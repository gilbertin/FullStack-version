const alumnos = [
    {
        nombre: 'Pepe Grillo',
        materias: [
            {
                nombre: 'Cálculo',
                calificacion: 10
            },
            {
                nombre: 'Literatura',
                calificacion: 50
            },
            {
                nombre: 'Español',
                calificacion: 90
            }
        ]
    },
    {
        nombre: 'Gil Morales',
        materias: [
            {
                nombre: 'Cálculo',
                calificacion: 80
            },
            {
                nombre: 'Literatura',
                calificacion: 80
            },
            // {
            //     nombre: 'Español',
            //     calificacion: 90
            // }
        ]
    }
]

let rest = {
    nombre: "",
    promedio: 0
}

alumnos.forEach(alumno => {
    let prom = 0;
    for (let i = 0; i < alumno.materias.length; i++) {
        prom += alumno.materias[i].calificacion;
    }
    prom = prom/alumno.materias.length;
    if (rest.promedio < prom || rest.promedio == 0) {
        rest.nombre = alumno.nombre;
        rest.promedio = prom;
    }
});

console.log('El mejor alumno es : ' + rest.nombre + ' con un promedio de ' + rest.promedio);