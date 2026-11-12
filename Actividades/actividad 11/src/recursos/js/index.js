

// a. Función sin retorno de valor
function saludar() {
    console.log("¡Hola, bienvenido!");
}

saludar();


// b. Función que recibe un parámetro
function saludarPersona(nombre) {
    console.log(`¡Hola ${nombre}, bienvenido!`);
}

saludarPersona("Luciano");


// c. Función con retorno de valor
function esMayorDeEdad(edad) {

    if (edad >= 18) {
        return true;
    } else {
        return false;
    }

}

const resultadoEdad = esMayorDeEdad(20);

console.log(resultadoEdad);


/* 2. FUNCIONES DE FLECHA */

// a. Función flecha para determinar si es mayor de edad
const esMayorDeEdadFlecha = (edad) => {

    if (edad >= 18) {
        return true;
    } else {
        return false;
    }

};

const resultadoEdadFlecha = esMayorDeEdadFlecha(17);

console.log(resultadoEdadFlecha);


// b. Función flecha para comparar dos números
const compararNumeros = (numero1, numero2) => {

    if (numero1 < numero2) {
        console.log(`El número ${numero1} es menor que ${numero2}`);
    } else if (numero1 === numero2) {
        console.log(`El número ${numero1} es igual que ${numero2}`);
    } else {
        console.log(`El número ${numero1} es mayor que ${numero2}`);
    }

};

// Utilizamos la función dentro de un bucle
for (let i = 1; i <= 5; i++) {
    compararNumeros(i, 3);
}


/* 3. FUNCIONES CALLBACK */

// Declaramos primero las funciones que utilizaremos como callback

// Función para sumar
function suma(numero1, numero2) {
    const resultado = numero1 + numero2;
    console.log(`El resultado de la suma es ${resultado}`);
}

// Función para restar
function resta(numero1, numero2) {
    const resultado = numero1 - numero2;
    console.log(`El resultado de la resta es ${resultado}`);
}


// a. Función que recibe dos números y un callback
const operacion = (numero1, numero2, callback) => {
    callback(numero1, numero2);
};

// Llamadas a la función
operacion(10, 5, suma);
operacion(10, 5, resta);


// b. Función con validación de números
const operacionValidada = (numero1, numero2, callback) => {

    if (typeof numero1 === "number" && typeof numero2 === "number") {
        callback(numero1, numero2);
    } else {
        console.log("Debe ingresar solo números.");
    }

};

// Probamos con números
operacionValidada(20, 10, suma);
operacionValidada(20, 10, resta);

// Probamos con un valor que no es numérico
operacionValidada("20", 10, suma);
