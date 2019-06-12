const personas = [{
    nombre: "Pepe Grillo",
    tarjetas:[
        {
            credito: 19000
        },
        {
            credito: 50000
        }]
}]

personas.forEach(persona => {
    let totalCredito = 0;
    for (let i = 0; i < persona.tarjetas.length; i++) {
        totalCredito += persona.tarjetas[i].credito;
    }
    console.log('El total de credito de ' + persona.name + ' es : ' + totalCredito);
});