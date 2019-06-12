const Alumnos = [{
    Nombre: 'Gil',
    Calificaciones: [60, 60, 20, 60, 60]
}, 
{
    Nombre: 'Daniel',
    Calificaciones: [10, 100, 10, 100, 100]
}, 
{
    Nombre: 'Axel',
    Calificaciones: [100, 100, 100, 100, 100]
}];

var rest = new Array(Alumnos.length);

for (let i = 0; i < Alumnos.length; i++) {
    var alumno = {
        Nombre: '',
        promedio: 0
    };

    let prom = 0;
    alumno.Nombre = Alumnos[i].Nombre;
    for (let index = 0; index < Alumnos[i].Calificaciones.length; index++) {
        prom += Alumnos[i].Calificaciones[index];
    }
    alumno.promedio = prom / Alumnos[i].Calificaciones.length;
    rest[i] = alumno;
}
console.log(rest);

