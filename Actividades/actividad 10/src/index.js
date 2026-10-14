//PARTE 1
//a
const edad = 16
console.log("EJERCICIO 1.a:")
if (edad < 18) {
    console.log("Es menor de edad")
} 
else{
    console.log("Es mayor de edad")
}

//ejercicio b
const num = 17
console.log("EJERCICIO 1.b:")
if(num % 2 === 0){
    console.log("Es par")
}
else{
    console.log("Es impar")
}
//ejercicio c
console.log("Ejercicio 1.c")
const nota = 2
if (nota < 4 ) {
    console.log("Reprobado")
}
else if (nota <= 7 && nota >= 4) {
    console.log("Aprobado")
}
else if(nota > 7){
    console.log("Excelente")
}


//PARTE 2
console.log("PARTE 2")

//ejercicio 2.a
const numeros = [1,2,3,4,5,6,7,8,9,10]
console.log("ejercicio 2.a")
for(let i = 0; i < 10; i ++){
    console.log(numeros[i])
}

//ejercicio 2.b
console.log("ejercicio 2.b")
for(let i = 10; i >= 0; i --){
    console.log(numeros[i])
}

//ejercicio 2.c
console.log("ejercicio 2.c")
for(i=0;i < 20; i++){
    if(i % 2 === 0){
    console.log("Es par")
    }
    else{
        console.log("Es impar")
    }
}

//ejercicio 2.d
console.log("Ejercicio 2.d")
for(i=0;i < 20; i++){
    if(i % 2 === 0){
    console.log("el numero",i,"Es par")
    } 
    else{
        console.log("el numero",i,"Es impar")
    }
}