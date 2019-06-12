const personas = [{
    nombre: "Pepe Grillo",
    bonos: [100, 500, 1300]
}]

personas.forEach(persona => {
    let suma = 0;
    for (let i = 0; i < persona.bonos.length; i++) {
        suma += persona.bonos[i];
    }
    console.log('El total de bonos de ' + persona.name + ' es : ' + suma);
});