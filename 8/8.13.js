const alumnos = [
    {
        nombre: 'Pepe Grillo',
        edad: 70
    },
    {
        nombre: 'Joel Aldana',
        edad: 14
    },
    {
        nombre: 'Diego Castillo',
        edad: 28
    },
    {
        nombre: 'Michael',
        edad: 30
    }
]

let rest = {
    nombre: "",
    edad: 0
}

alumnos.forEach(alumno => {
    if (rest.edad < alumno.edad || rest.edad === 0) {
        rest.edad = alumno.edad;
    }
});

console.log('El alumno mayor es : ' + rest.nombre + ' con ' + rest.edad);