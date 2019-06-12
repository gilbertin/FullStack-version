const pesosPorDia = parseFloat("17.5");
const pesosTotalesAAhorrar = 10000;
const cantidadDias = 30;
const cantidadQuePuedoAhorrar = 30 * pesosPorDia;
const alcanzanLosAhorros = cantidadQuePuedoAhorrar >= pesosTotalesAAhorrar;

if (alcanzanLosAhorros) {
    console.log("Ya la armaste");
} else {
    console.log("Sigue participando");
}