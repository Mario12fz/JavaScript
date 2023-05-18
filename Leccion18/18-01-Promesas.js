let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion){
        resolver('Resolvio correctamente')
    }else{
        rechazar('Se produjo un error');
    }
});

/*miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);*/

miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error));

let promesa = new Promise((resolver) => {
    setTimeout( () => resolver('Saludos  con promesa y timeout'), 5000);
});

promesa
.then(valor => console.log(valor));

// ------------------------------------------------------------------------------------

// async indica que una funcion regresa una promesa

async function miFuncionConPromesa(){
    return 'Saludos con Promesa y async';
}

//miFuncionConPromesa().then( valor => console.log(valor));

// ------------------------------------------------------------------------------------

async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolver => {
        resolver('Promesa con await');
    });

    console.log( await miPromesa);
}

//funcionConPromesaYAwait();

// ------------------------------------------------------------------------------------

// promesas, await, async y setTimeout

async function funcionConPromesaAwaitTimeout(){
    let miPromesa = new  Promise(resolver => {
        setTimeout(() => resolver('Promesa con await y timeout'), 3000);
    });

    console.log( await miPromesa);
}

funcionConPromesaAwaitTimeout();
