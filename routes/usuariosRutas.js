const ruta=require("express").Router();
const UsuarioClase=require("../clases/UsuarioClase");
const UsuarioBD = require("../bd/UsuariosBD");

ruta.get("/", async (req,res)=>{
    const usuariobd = new UsuarioBD();
    const usuariosMysql = await usuariobd.mostrarUsuarios();

    var usuariosCorrectos = [];
     usuariosMysql.forEach(usuario => {
         var usuario1 = new UsuarioClase(usuario);
         if(usuario1.nombre != undefined && usuario1.celular != undefined && usuario1.correo != undefined){
            usuariosCorrectos.push(usuario);
         }
     });
     console.log(usuariosCorrectos);
    res.render("mostrarUsuarios",{usuariosCorrectos});
})

ruta.get("/mostrarProductos", (req,res)=>{
    res.render("mostrarProductos");
})

ruta.get("/agregarUsuario", (req, res)=>{
    res.render("formulario");
})

ruta.get("/agregarProducto", (req,res)=>{
    res.render("formulario2");
})

ruta.post("/agregarUsuario", (req,res)=>{
    var usuario1=new UsuarioClase(req.body);
    if(usuario1.nombre != undefined && usuario1.celular != undefined && usuario1.correo != undefined){
        const usuariobd = new UsuarioBD();
        usuariobd.nuevoUsuario(usuario1.mostrarDatos);
        console.log(usuario1.mostrarDatos);
        res.redirect("/");
        // res.render("inicio", usuario1.mostrarDatos);
    }else{
        res.render("error");
    }
});

ruta.get("/editarUsuario/:id_usuario", async (req,res)=>{
    try {
        const usuariobd = new UsuarioBD();
        const usuario = await usuariobd.usuarioID(req.params.id_usuario);
        res.render("editarUsuario", usuario);
    } catch (error) {
        console.error("Error al modificar el usuario: "+error);
    }
    // res.end();
})

ruta.get("/borrarUsuario/:id_usuario", async (req,res)=>{
    try {
        const usuariobd = new UsuarioBD();
        await usuariobd.borrarUsuario(req.params.id_usuario);
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
})

ruta.post("/editarUsuario", async (req,res)=>{
    try {
        const usuariobd = new UsuarioBD();
        console.log(req.body);
        await usuariobd.editarUsuario(req.body);
        console.log("Usuario editado correctamente");
        res.redirect("/");
    } catch (error) {
        console.log("Error al editar el usuario");
    }
})

module.exports=ruta;