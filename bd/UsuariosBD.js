const ConectarBD = require("./ConectarBD");

class UsuarioBD extends ConectarBD{
    constructor(){
        super();
    }
    async nuevoUsuario(datosUsuario){
        const sql="insert into usuario values(null,'"+datosUsuario.nombre+"','"+datosUsuario.celular+"','"+datosUsuario.correo+"');";
        try {
            await this.conectarMySql();
            const usuariosMysql=await this.conexion.execute(sql);
            console.log("Crea un nuevo usuario");
            await this.cerrarConexion();
            return usuariosMysql;
        } catch (error) {
            console.error("Error al agregar un usuario nuevo: "+error)
            console.error(sql);
        }
    }
    async mostrarUsuarios() {
        const sql = "select * from usuario;";
        try {
            await this.conectarMySql();
            const [usuarioMySql] = await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Se mostraron los datos correctamente");
            return (usuarioMySql);
        } catch (error) {
            console.error("Error al mostrar los datos: "+error);
            console.error(sql);
        }
    }
    async usuarioID(id) {
        const sql = "select * from usuario where id = "+id+";";
        try {
            await this.conectarMySql();
            const [[usuario]] = await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Consulta correcta por id");
            return usuario;
        } catch (error) {
            console.error("Error al consultar con id "+error);
            console.error(sql);
        }
    }
    async editarUsuario(usuarioo){
        const sql = "update usuario set nombre = '"+usuarioo.nombre+"', celular = '"+usuarioo.celular+"', correo = '"+usuarioo.correo+"' where id= '"+usuarioo.id+"':";
        const sql1 = `update usuario set nombre ='${usuarioo.nombre}', celular ='${usuarioo.celular}', correo ='${usuarioo.correo}' where id ='${usuarioo.id}';`;
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql1);
            await this.cerrarConexion();
            console.log("Actualizacion correcto de usuario");
        } catch (error) {
            console.error("Error al actualizar el usuario: "+error);
            console.error(sql1);
        }
    }
    async borrarUsuario(id){
        const sql = "delete from usuario where id = "+id+";";
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Usuario eliminado");
        } catch (error) {
            console.error("Error al eliminar el usuario: "+error);
            console.error(sql);
        }
    }
}
module.exports=UsuarioBD;