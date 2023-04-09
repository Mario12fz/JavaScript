// menu , comanda 

class Menu{

    static contadorMenu = 0;

    constructor(nombre,precio, bebida, precioBebida){
        
        this._idMenu = ++Menu.contadorMenu;
        this._nombre = nombre;
        this._precio = precio;
        
    }

    get idMenu(){
        return this._idMenu;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio; 
    }


    toString(){
        return `ID: ${this._idMenu} | Plato: ${this._nombre} | Precio: $${this._precio}`
    }
 

}

class Comanda{

    static contadorComandas = 0;
    
    static get MAX_COMANDAS_PERMITIDAS(){
        return 8;
    }

    constructor(){

        this._idComanda = ++Comanda.contadorComandas;
        this._menus = [];

    }

    AgregarPlatoMenu(menu){
        if( this._menus.length < Comanda.MAX_COMANDAS_PERMITIDAS){
            this._menus.push(menu);
        }else{
            console.log("Ya realizo el maximo pedido permitido, Realice otra orden");
        }
    }

    calcTotal(){
        let totalComanda = 0;
        for( let menu of this._menus){
            totalComanda += menu.precio;
        }
        return totalComanda;
    }

    mostrarComanda(){
        let platoOrden = '';
        for( let menu of this._menus ){
            platoOrden += '\n' + menu.toString() + ' ';
        }
        console.log(`Orden : ${this._idComanda} | Total: $ ${this.calcTotal()} | Plato: ${platoOrden}`);
    }
}

let plato1 = new Menu('Combo de mariscos con fresco natural de limon', 15);
let plato2 = new Menu('Sopa de Pollo con Coca Cola', 12);
let plato3 = new Menu('Burrito mixto con bebida incluida', 6);

let comanda1 = new Comanda();
comanda1.AgregarPlatoMenu(plato1);
comanda1.AgregarPlatoMenu(plato3);
comanda1.mostrarComanda();