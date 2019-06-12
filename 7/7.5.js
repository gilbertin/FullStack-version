const Alumnos = [{
    Nombre: 'Gil',
    Materias: [{
        Nombre: 'Quimica',
        Calificacion: 5.6
    },
    {
        Nombre: 'Cálculo',
        Calificacion: 9.6
    },
    {
        Nombre: 'Programación',
        Calificacion: 8.3
    }]
}, 
{
    Nombre: 'Daniel',
    Materias: [{
        Nombre: 'Quimica',
        Calificacion: 6.6
    },
    {
        Nombre: 'Cálculo',
        Calificacion: 4
    },
    {
        Nombre: 'Programación',
        Calificacion: 3
    }]
}, 
{
    Nombre: 'Axel',
    Materias: [{
        Nombre: 'Quimica',
        Calificacion: 7.6
    },
    {
        Nombre: 'Cálculo',
        Calificacion: 9.6
    },
    {
        Nombre: 'Programación',
        Calificacion: 8.3
    }]
}];

var rest = new Array();

for (let i = 0; i < Alumnos.length; i++) {
    var alumno = {
        Nombre: '',
        Materia: ['']
    };
    alumno.Nombre = Alumnos[i].Nombre;
    for (let index = 0; index < Alumnos[i].Materias.length; index++) {
        var materia = {
            Nombre: '',
            Aprobado: false
        };
        materia.Nombre = Alumnos[i].Materias[index].Nombre;
        materia.Aprobado = Alumnos[i].Materias[index].Calificacion > 6 ? true:false;
        if (!materia.Aprobado) {
            alumno.Materia[index] = materia;   
        }
    }
    rest[i] = alumno;
}

rest.forEach(a => {
    console.log(a);
});