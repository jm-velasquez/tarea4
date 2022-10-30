//la variable const es utilizada para evitar que se dupliquen
//las funciones que no tiene nombre se llaman anonimas.  y se usan como callbacks 
//dentro un método.
//const saludoNuevo = function() esto ya no se usa, es redundante.  se intodujo un concepto
//en el 2014 de conceptos de flecha.
//las funciones de flecha => sirve para indicar que es una función.
//tarea 4
console.log("TAREA Nº4");
console.log("========================================================");
console.log("a. Mostrar en consola los números del 1 al 100 de 1 en 1");


const contar = (numero) => {
    //condicion de salida
        if(numero < 101){
        console.log("Este es el numero " + numero);
        contar(numero + 1)
        
           
        }
}
const n = 1
contar(n)

console.log("========================================================");
console.log("b. Mostrar en consola los números del 1000 al 500 de 2 en 2.");

const contarInverso = (numero) => {
    //condicion de salida
        if(numero > 499){
        console.log("Este es el numero " + numero);
        contarInverso(numero - 2)
        
           
        }
}
const m = 1000
contarInverso(m)
console.log("========================================================");
console.log("a. Obtener el promedio de notas de un alumno considerando que ");
console.log("la suma de notas debe ser el retorno de una función y el promedio");
console.log("el retorno de otra función. Las notas son: 6,8,9,2,5,10.");

let notas = [6,8,9,2,5,10];
console.log("Las notas son : ", notas);

let suma = 0;

for (let x of notas) {
	suma += x;
}


console.log("La suma es : ",suma);
console.log("========================================================");
console.log("La cantidad de elementos del arreglo es ; ",notas.length)

promedio = suma/notas.length;


console.log("El promedio de notas es : ", promedio);
console.log("========================================================");