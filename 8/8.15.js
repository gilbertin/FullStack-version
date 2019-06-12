const balance = [
    { 
        propietario: 'Pepe Grillo',
        ingresos: [5000, 5000, 2000],
        gastos: [
            {
                gasto: 1000,
                concepto: "Fiesta"
            },
            {
                gasto: 200,
                concepto: "Cine"
            },
            {
                gasto: 1000,
                concepto: "Salud"
            },
            {
                gasto: 10,
                concepto: "Cafe"
            },
            {
                gasto: 1000,
                concepto: "Salud"
            },
        ]
    }
]

balance.forEach(persona => {
    let rest = {
        propietario: '',
        totalIngresos:0,
        totalGastosDedusibles:0
    }
     for (let i = 0; i < persona.ingresos.length; i++) {
         rest.totalIngresos += persona.ingresos[i];
     }

     for (let index = 0; index < persona.gastos.length; index++) {
        if (persona.gastos[index].concepto == 'Salud') {
            rest.totalGastosDedusibles +=  persona.gastos[index].gasto;
        } 
     }
     console.log(rest);
     console.log('El contribuyente ' + rest.propietario + ' tiene que pagar un total de impuestos de : $' + ((rest.totalIngresos - rest.totalGastosDedusibles) * 0.16 ));
});
