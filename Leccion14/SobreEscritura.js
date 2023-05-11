class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: ${this._nombre} | Sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo,departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} | depto: ${this._departamento};`
    }
}

function determinarTipo(tipo){
   console.log( tipo.obtenerDetalles());


   if( tipo instanceof Gerente){
        console.log("Es un Objeto de tipo Gerente");
        console.log(tipo._departamento);

   }else if(tipo instanceof Empleado){
      console.log("Es un Objeto de tipo empleado");
        console.log(tipo._departamento);

   }else if(tipo instanceof Object){

        console.log("Es un tipo Object");
   }
}

let empleado1 = new Empleado('Juan', 3000);
let gerente1 = new Gerente("Mario", 500, "El Salvador");

determinarTipo(empleado1);
determinarTipo(gerente1);

// Polimorfismo es aquel codigo que se utiliza de multiples formas
