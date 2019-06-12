const stores = [{
        name: "Amazon",
        stock: [
                { marca: 'Huawei', modelo: 'P30', precio: 11999 },
                { marca: 'Apple', modelo: 'iPhone x', precio: 18000 },
                { marca: 'Motorola', modelo: 'Moto X', precio: 9000 }
            ]
    },
    {
        name: 'Liverpool',
        stock: [
                { marca: 'Huawei', modelo: 'P30', precio: 13500 },
                { marca: 'Apple', modelo: 'iPhone x', precio: 20000 },
                { marca: 'Motorola', modelo: 'Moto X', precio: 10000 }
        ]
    }       
]

let rest = {
    tienda:"",
    marca:'',
    modelo:'',
    precio: 0
}

stores.forEach(store => {
    for (let i = 0; i < store.stock.length; i++) {
        if (rest.precio > store.stock[i].precio || rest.precio === 0) {
            rest.tienda = store.name;
            rest.marca = store.stock[i].marca;
            rest.modelo = store.stock[i].modelo;
            rest.precio = store.stock[i].precio;
        }
    }
});

console.log(rest);