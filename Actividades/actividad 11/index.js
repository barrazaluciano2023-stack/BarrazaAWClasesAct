// ------------------------1.a------------------------------------
/* function suma (){
    console.log("hola, bienvenido")
}

let resultado = suma() */

//-------------------------1.b---------------------------------

/* function saludarPersona(nombre){
    console.log(`{hola ${nombre}, bienvenido`)
}
let nombre = "Andres"

let resultado= saludarPersona(nombre) */

//-------------------------1.c---------------------------------


//let guardado 
function esMayorDeEdad(edad){
    if (edad >= 18){
        return true
    }
    else {
        return false
    }

}

let edad = 15
let resultado = esMayorDeEdad(edad)
console.log(resultado)