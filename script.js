//la variable const es utilizada para evitar que se dupliquen
//las funciones que no tiene nombre se llaman anonimas.  y se usan como callbacks 
//dentro un método.
//const saludoNuevo = function() esto ya no se usa, es redundante.  se intodujo un concepto
//en el 2014 de conceptos de flecha.
//las funciones de flecha => sirve para indicar que es una función.

//tarea 4

//saludo()
const n = 1

const saludoNuevo = (numero) => {
    //condicion de salida 
    if(numero === 101)
    console.log("Este es el numero" + numero);
    saludoNuevo(numero+1)
}

saludoNuevo(n)

//Condicionales
//Operadores e comparación (Type Coertion ==> COnversión de tipos)
// == igualdad
// === igualdad estricta (Comprueba el tipo de datos y valor)