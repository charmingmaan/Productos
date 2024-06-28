const ConectarBD = require("./ConectarBD");
class ProductosBD extends ConectarBD{
    constructor(){
        super();
    }
    async nuevoProducto(datosProducto){
        const sql="insert into productos values(null,'"+datosProducto.nombrePro+"','"+datosProducto.precio+"','"+datosProducto.cantidad+"','"+datosProducto.descripcion+"');";
        try {
            await this.conectarMySql();
            const productosMysql=await this.conexion.execute(sql);
            console.log("Crea un nuevo producto");
            await this.cerrarConexion();
            return productosMysql;
        } catch (error) {
            console.error("Error al agregar un producto nuevo: "+error)
            console.error(sql);
        }
    }
    async mostrarProductos() {
        const sql = "select * from productos;";
        try {
            await this.conectarMySql();
            const [productoMySql] = await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Se mostraron los productos correctamente");
            return (productoMySql);
        } catch (error) {
            console.error("Error al mostrar los productos: "+error);
            console.error(sql);
        }
    }
    async productoID(idPro) {
        const sql = "select * from productos where idPro = "+idPro+";";
        try {
            await this.conectarMySql();
            const [[producto]] = await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Consulta correcta por id");
            return producto;
        } catch (error) {
            console.error("Error al consultar con id "+error);
            console.error(sql);
        }
    }
    async editarProducto(productoo){
        const sql = "update productos set nombrePro = '"+productoo.nombrePro+"', precio = '"+productoo.precio+"', cantidad = '"+productoo.cantidad+"', descripcion = '"+productoo.descripcion+"' where idPro= '"+productoo.idPro+"':";
        const sql1 = `update productos set nombrePro ='${productoo.nombrePro}', precio ='${productoo.precio}', cantidad ='${productoo.cantidad}', descripcion ='${productoo.descripcion}' where idPro ='${productoo.idPro}';`;
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql1);
            await this.cerrarConexion();
            console.log("Actualizacion correcto del producto");
        } catch (error) {
            console.error("Error al actualizar el producto: "+error);
            console.error(sql1);
        }
    }
    async borrarProducto(idPro){
        const sql = "delete from productos where id = "+idPro+";";
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Producto eliminado");
        } catch (error) {
            console.error("Error al eliminar el producto: "+error);
            console.error(sql);
        }
    }
}
module.exports=ProductosBD;
