class ProductoClase{
    constructor(producto1){
        this.idPro=producto1.idPro;
        this.nombrePro=producto1.nombrePro;
        this.precio=producto1.precio;
        this.cantidad=producto1.cantidad;
        this.descripcion=producto1.descripcion;
    }
    set idPro(idPro){
        this._idPro=idPro;
    }
    set nombrePro(nombrePro){
        var regexNombrepro = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if (regexNombrepro.test(nombrePro)){
            this._nombrePro=nombrePro;
        }
    };
    set cantidad(cantidad){
        var regexCantidad = /^\d+$/;
        if (regexCantidad.test(cantidad)){
            this._cantidad=cantidad;
        }
    };
    set precio(precio){
        var regexPrecio= /^\d+(\.\d{1,2})?$/;
        if (regexPrecio.test(precio)){
            this._precio=precio;
        }
    };

    set descripcion(descripcion){
        var regexDescripcion =/^.{1,200}$/;
        if (regexDescripcion.test(descripcion)){
            this._descripcion=descripcion;
        }
    };
    get idPro(){
        return this._idPro;
    }
    get nombrePro(){
        return this._nombrePro;
    };
    get cantidad(){
        return this._cantidad;
    };
    get precio(){
        return this._precio;
    };
    get descripcion(){
        return this._descripcion;
    };

    get mostrarDatos(){
        return {
            nombrePro:this.nombrePro,
            cantidad:this.cantidad,
            precio:this.precio,
            descripcion:this.descripcion
        }
    }
}

module.exports=ProductoClase;