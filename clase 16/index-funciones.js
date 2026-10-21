//------------------FUNCIONES--------------------------


// funciones de declaracion
//function suma (a, b){
    //return a + b;
//}
//let a = 5;
//let b = 2;
//invocar funcion llamar ejeutar
//let resultado = suma(a , b)

//console.log(resultado)


//funciones flecha
/* 
const suma = ( a, b)=>{
    return a + b
}
let resultado = suma(10,5)
console.log(suma)
 */

//callbacks
const a =(cb) =>{
    console.log("Se ejecuto la funcion a")
    cb()
}

const b =() =>{
    console.log("Se ejecuto el callback que es la funcion b")
}

const c =() =>{
    console.log("Se ejecuto el callback que es la funcion c")
}

a(b)