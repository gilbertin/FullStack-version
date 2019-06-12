const stock = [
    {
        marca:'Huawei',
        modelo: 'P30',
        precio: 13500
    },
    {
        marca:'Apple',
        modelo: 'iPhone x',
        precio: 20000
    },
    {
        marca:'Motorola',
        modelo: 'X',
        precio: 10000
    },
]

let rest = {
    nombre:'',
    precio: 0
}

stock.forEach(phone => {
    if (rest.precio > phone.precio || rest.precio === 0) {
        rest.nombre = phone.marca;
        rest.precio = phone.precio;
    }
});
console.log('El telefono más barato es : ' + rest.nombre + ' en $' + rest.precio);