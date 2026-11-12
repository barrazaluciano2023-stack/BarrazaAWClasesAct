
// Buscamos los elementos del HTML
const contador = document.getElementById('contador-carrito');
const botonAgregar = document.getElementById('btn-agregar-carrito');

// Recuperamos la cantidad guardada
let cantidadArticulos = Number(localStorage.getItem('cantidadArticulos')) || 0;

// Mostramos la cantidad al cargar la página
contador.textContent = cantidadArticulos;

// Cuando hacemos click en el botón
botonAgregar.addEventListener('click', () => {

    cantidadArticulos++;

    // Actualizamos el contador
    contador.textContent = cantidadArticulos;

    // Guardamos la cantidad
    localStorage.setItem('cantidadArticulos', cantidadArticulos);

});
