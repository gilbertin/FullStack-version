const jugadores = [{
    nombre:"John Doe",
    partidas:[true, false, true, true]
}]
let victorias = 0;

jugadores.forEach(jugador => {
    for (let index = 0; index < jugador.partidas.length; index++) {
        if(jugador.partidas[index]){
            victorias ++;
        }
    }
    console.log('El jugador ' + jugador.nombre + ' tiene ' + victorias + ' partidas ganadas');
});