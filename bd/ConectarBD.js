class ConectarBD {
    constructor(){
        this.conexion=null;
        this.mysql=require("mysql2/promise");
    }
    async conectarMySql(){
        try{
             this.conexion=await this.mysql.createConnection({
                host:"127.0.0.1",
                user:"root",
                password:"",
                database:"Usuario",
                port:"3306"
            });
            console.log("Conectado MySQL");
        } catch (error){
            console.error("Error al conectar con MySQL: "+error);
        }
    }
    async cerrarConexion(){
         try {
            await this.conexion.end();
            console.log("Conexion de MySQL terminada");
        } catch (error) {
            console.error("Error en terminar la conexion: "+error);
        }
    }
}
module.exports=ConectarBD;
