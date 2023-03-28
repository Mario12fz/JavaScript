class Producto { 

    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;

    }

    get idProducto(){
        return this._idProducto;
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
        return `ID:  ${this._idProducto} | Producto: ${this._nombre} | Precio: ${this._precio} |` ;
    }

}

class Orden{

    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if( this._productos.length < Orden.MAX_PRODUCTOS ){
            this._productos.push(producto);

        }else{
            console.log('No se pueden agregar mas productos');
        }
    }

    calcTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio; // totalVenta = totalVenta + producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += '\n' + producto.toString() + ' ';

        }
        console.log(` Orden: ${this._idOrden} Total: $${this.calcTotal()}, Productos: ${productosOrden} `)
    }
}

let producto1 = new Producto('Coca Cola', 1.15);
let priducto2 = new Producto('Camisa', 9);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(priducto2);
orden1.mostrarOrden();

let producto3 = new Producto('Pantalon', 25);
let producto4 = new Producto('Sudadera', 30);
let producto5 = new Producto('Collar', 90);
let producto6 = new Producto('Cadenar', 35);

let orden2 = new Orden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(priducto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto5); 


orden2.mostrarOrden();