//--------------Operaciones con arreglos-----------------------


//.........................for each......................
//foreach, reccore y aplica la funcion a 
// cada elemetno del arreglo


//en este for each imprimo los valores de eun arreglo
/* const numeros = [5,20,1,8,9]

numeros.forEach((numero) =>{
    console.log(numero)
}) 
 */

//en este agrego un valor a los valores de un 
// arreglo y los paso a otro arreglo

/*     const numeros = [5,20,1,8,9]
    const numerosMasUno = []
    numeros.forEach((numero) =>{
        numerosMasUno.push(numero + 1)
    }) 
    console.log(numerosMasUno) */

//...........................map()..............................
//Mas -> .map()
//map devuelve un nuevo arreglo
/* const numeros = [5,20,1,8,9]

const numeroMasUno = numeros.map((numero)=>{
    return numero + 1
})
console.log(numeroMasUno)
 */

//........................ filter y find..........................
