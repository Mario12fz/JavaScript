

function miFuncion(){
    console.log("Saludos desde mi funcion");
}

miFuncion();


let funcionFlecha = (x,y) =>{

    let resultado = x + y;
    console.log(resultado);

}

funcionFlecha(10,10);


const crearFecha = () =>{
    return Date();
}

console.log(crearFecha());

const regresarObjeto = () => ({nombre: 'Mario', apellido: 'Fuentes'});
console.log(regresarObjeto());

