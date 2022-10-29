//la variable const es utilizada para evitar que se dupliquen
//las funciones que no tiene nombre se llaman anonimas.  y se usan como callbacks 
//dentro un método.

function saludo(){

console.log("Hola curso front end");

}


//const saludoNuevo = function() esto ya no se usa, es redundante.  se intodujo un concepto
//en el 2014 de conceptos de flecha.
//las funciones de flecha => sirve para indicar que es una función.


saludo()

const saludoNuevo = () => {


}