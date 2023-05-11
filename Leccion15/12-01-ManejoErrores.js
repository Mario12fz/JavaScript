/*
'use strict'


try{
   let  x = 10;

    throw 'Mi error';

}catch(error){
    console.log(error);
}

console.log("continuamos...");
*/



// -----------------------------------------------------------------------------------------------------------------
'use strict'

let resultado = 3;

try{
    //x = 10
    if( isNaN(resultado)) throw 'No es un número';
    else if( resultado === '') throw 'es una cadena vacia';
    else if( resultado >= 0 ) throw 'Valor positivo';
    else if (resultado < 0 ) throw 'Valor Negativo';

}catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}