var peso = parseFloat(process.argv[2]);
const peso_ideal = parseFloat(process.argv[3]);
var kilos_max_semana = parseFloat(process.argv[4]);

for (var semanas = 0; peso >= peso_ideal; semanas++) {
    peso = peso - (Math.floor(Math.random() * Math.floor(kilos_max_semana)));
    console.log('Animo tu peso es : ' + peso);
}

console.log('Felicidades te costo ' + semanas + ' semanas');