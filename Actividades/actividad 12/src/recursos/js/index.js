
// a. Cargar 5 números utilizando prompt() y push()

const numeros = [];

for (let i = 0; i < 5; i++) {

    const numero = Number(prompt("Ingrese un número:"));

    numeros.push(numero);

}

console.log("Arreglo de números:", numeros);


// b. Guardar solamente los números impares

const numerosImpares = [];

for (let i = 0; i < 5; i++) {

    const numero = Number(prompt("Ingrese un número:"));

    if (numero % 2 !== 0) {
        numerosImpares.push(numero);
    }

}

console.log("Números impares:", numerosImpares);


// c. Convertir frutas a mayúsculas utilizando forEach()

const frutas = ["pera", "manzana", "banana", "durazno"];

frutas.forEach((fruta, indice) => {
    frutas[indice] = fruta.toUpperCase();
});

console.log("Frutas en mayúsculas:", frutas);


// d. Crear un nuevo arreglo utilizando map()

const frutasOriginales = ["pera", "manzana", "banana", "durazno"];

const frutasMayusculas = frutasOriginales.map(fruta =>
    fruta.toUpperCase()
);

console.log("Nuevo arreglo:", frutasMayusculas);


// e. Filtrar frutas que contengan "na"

const frutasFiltradas = frutasOriginales.filter(fruta =>
    fruta.includes("na")
);

console.log("Frutas que contienen na:", frutasFiltradas);


/* 2. OBJETOS */

// a. Crear un objeto con datos de un producto

const producto = {
    nombre: "Remera",
    precio: 15000,
    stock: 8,
    talles: ["s", "m", "l"]
};

console.log("Producto:", producto);


// b. Crear un arreglo de 4 objetos y mostrar
// solamente los productos con stock menor a 5

const productos = [
    {
        nombre: "Remera",
        precio: 15000,
        stock: 3,
        talles: ["s", "m", "l"]
    },
    {
        nombre: "Pantalón",
        precio: 25000,
        stock: 12,
        talles: ["s", "m", "l"]
    },
    {
        nombre: "Buzo",
        precio: 30000,
        stock: 2,
        talles: ["s", "m", "l"]
    },
    {
        nombre: "Campera",
        precio: 45000,
        stock: 15,
        talles: ["s", "m", "l"]
    }
];

productos.forEach(producto => {

    if (producto.stock < 5) {
        console.log("Producto con poco stock:", producto);
    }

});


// c. Crear un nuevo arreglo con descuento del 10% utilizando map()

const productosConDescuento = productos.map(producto => {

    return {
        nombre: producto.nombre,
        precio: producto.precio * 0.90,
        stock: producto.stock,
        talles: producto.talles
    };

});

console.log("Productos con descuento:", productosConDescuento);


// d. Crear un nuevo arreglo con productos cuyo stock sea mayor a 10

const productosConStock = productos.filter(producto =>
    producto.stock > 10
);

console.log("Productos con stock mayor a 10:", productosConStock);

