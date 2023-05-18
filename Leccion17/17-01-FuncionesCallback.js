function miFuncion1 (){
    console.log("Funcion 1");
}

function miFuncion2 (){
    console.log("Funcion 2");
}


// Fumcion Callback

function imprimirMensaje(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let resultado = op1 + op2;
    funcionCallback( `Resultado: ${resultado}`);
}

sumar(5,3, imprimirMensaje);


// Llamadas asincronas con uso de setTimeout

function miFuncionCallback(){
    console.log('Saludo asincrono despues de 3 seg');
}

setTimeout(miFuncionCallback, 3000); // Despues de 3 segundos

setTimeout( function(){ console.log('Saludo asincrono 2')}, 4000);


setTimeout( () => console.log('Saludo Asincrono despues de 10s'), 10000);


// Funcion setInterval 

let reloj = () => {
    let fecha = new Date();
    console.log(`${ fecha.getHours() } : ${fecha.getMinutes()} : ${fecha.getSeconds()}`);
}

setInterval(reloj, 1000); // cada 1s
