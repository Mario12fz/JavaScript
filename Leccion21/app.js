function sumar(){
    const formulario = document.getElementById('formulario');
    let operandoA = formulario['operandoA'];
    let operandoB = formulario['operandoB'];

    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operacion no incluye numeros';
    }
    document.getElementById('resultado').innerHTML = `<strong>Resultado Suma: </strong> ${resultado}`;
}

function restar(){
    const formulario = document.getElementById('formulario');
    let operandoA = formulario['operandoA'];
    let operandoB = formulario['operandoB'];

    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operacion no incluye numeros';
    }
    document.getElementById('resultado').innerHTML = `<strong> Resultado Resta  : </strong> ${resultado}`;

}

function multiplicar(){
    const formulario = document.getElementById('formulario');
    let operandoA = formulario['operandoA'];
    let operandoB = formulario['operandoB'];

    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operacion no incluye numeros';
    }
    document.getElementById('resultado').innerHTML = `<strong> Resultado al Multiplicar : </strong> ${resultado}`;
}



// Estilos a botones

document.getElementById('btnSuma').addEventListener('mouseover',  (evento) => {
    evento.target.style.background = 'navy';
});

document.getElementById('btnSuma').addEventListener('mouseout', (evento) =>{
    evento.target.style.background = '';
});

document.getElementById('btnRestar').addEventListener('mouseover', (evento) =>{
    evento.target.style.background = 'goldenrod';
});

document.getElementById('btnRestar').addEventListener('mouseover', (evento) =>{
    evento.target.style.background = 'goldenrod';
});

document.getElementById('btnRestar').addEventListener('mouseout', (evento) =>{
    evento.target.style.background = '';
});

document.getElementById('btnMulti').addEventListener('mouseover', (evento) =>{
    evento.target.style.background = 'darkgreen';
});

document.getElementById('btnMulti').addEventListener('mouseout', (evento) =>{
    evento.target.style.background = '';
});
