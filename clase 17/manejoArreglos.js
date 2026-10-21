const personas= [
    {
        nombre :"Andres",
        edad:20
    },
    {
        nombre: "jose",
        edad: 21
    },
    {
        nombre: "camila",
        edad: 25
    },
    
]

//-------------------------------forEach -> no me devuelve nada---------------------------------
/* personas.forEach((persona,indice,arreglo)=>{
    console.log(persona,indice,arreglo)
})
 */

// --------------------------------map-> devuelve un nuevo arreglo------------------------------
/* const nuevoArregloPersonas = personas.map((persona,indice, arreglo)=>{
    const nuevaPersona ={
        ...persona,//Spread
        edad: persona.edad + 1
    }
    return nuevaPersona
})
console.log(nuevoArregloPersonas) */



//--------------------------------- filter -> devuelve un arreglo--------------------------------
//personas.filter()

/* const nuevoArregloPersonas = personas.filter((persona,indice, arreglo)=>{
    return persona.edad > 20
})
console.log(nuevoArregloPersonas) */


// --------------------find ->devuelve el primer elemento que cumple la condicion----------------
//personas.find()
const nuevoArregloPersonas =personas.find((persona,indice, arreglo)=>{
    return persona.edad > 20
})
console.log(nuevoArregloPersonas)

