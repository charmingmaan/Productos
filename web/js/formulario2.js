var regexNombrepro = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexCantidad = /^\d+$/;
var regexDescripcion = /^.{1,200}$/;
var regexPrecio = /^\d+(\.\d{1,2})?$/;

var Nombrepro=document.getElementById("nombrePro");
var mensajeNombre=document.getElementsByClassName("mensajeNombre") [0];
var circleCrossNombre=document.getElementsByClassName("circleCrossNombre") [0];
var circleCheckNombre=document.getElementsByClassName("circleCheckNombre") [0];
var enviarDatos=1;
var band=0;

nombre.addEventListener("blur", ()=>{    
    if (!regexNombrepro.test(Nombrepro.value)) {
        enviarDatos=0;
        mensajeNombre.classList.remove("ocultar");
        Nombrepro.classList.add("error");
        Nombrepro.classList.remove("correcto");
        circleCrossNombre.classList.remove("ocultar");
        circleCheckNombre.classList.add("ocultar");
    }else{
        band++;
        enviarDatos = 1;
        mensajeNombre.classList.add("ocultar");
        Nombre.classList.remove("error");
        Nombrepro.classList.add("correcto");
        circleCrossNombre.classList.add("ocultar");
        circleCheckNombre.classList.remove("ocultar");
    }
});

var precio=document.getElementById("precio");
var mensajePrecio=document.getElementsByClassName("mensajePrecio") [0];
var circleCrossPrecio=document.getElementsByClassName("circleCrossPrecio") [0];
var circleCheckPrecio=document.getElementsByClassName("circleCheckPrecio") [0];

precio.addEventListener("blur", () => {
    if (!regexPrecio.test(precio.value)) {
        enviarDatos++;
        mensajePrecio.classList.remove("ocultar");
        precio.classList.add("error");
        precio.classList.add("correcto");
        circleCrossPrecio.classList.remove("ocultar");
        circleCheckPrecio.classList.add("ocultar");
    } else {
        mensajePrecio.classList.add("ocultar");
        precio.classList.add("correcto");
        precio.classList.add("error");
        circleCrossPrecio.classList.add("ocultar");
        circleCheckPrecio.classList.remove("ocultar");
    }
});

var cantidad=document.getElementById("cantidad");
var mensajeCantidad=document.getElementsByClassName("mensajeCantidad") [0];
var circleCrossCantidad=document.getElementsByClassName("circleCrossCantidad") [0];
var circleCheckCantidad=document.getElementsByClassName("circleCheckCantidad") [0];

cantidad.addEventListener("blur", ()=>{
    if (!regexCorreo.test(correo.value)) {
        enviarDatos=0;
        mensajeCantidad.classList.remove("ocultar");
        cantidad.classList.add("error");
        cantidad.classList.remove("correcto");
        circleCrossCantidad.classList.remove("ocultar");
        circleCheckCantidad.classList.add("ocultar");
    }else{
        band++;
        enviarDatos = 1;
        mensajeCantidad.classList.add("ocultar");
        cantidad.classList.remove("error");
        cantidad.classList.add("correcto");
        circleCrossCantidad.classList.add("ocultar");
        circleCheckCantidad.classList.remove("ocultar");
    }
})

var descripcion=document.getElementById("descripcion");
var mensajeDescripcion=document.getElementsByClassName("mensajeDescripcion") [0];
var circleCrossDescripcion=document.getElementsByClassName("circleCrossDescripcion") [0];
var circleCheckDescripcion=document.getElementsByClassName("circleCheckDescripcion") [0];

descripcion.addEventListener("blur", ()=>{
    if (!regexDescripcion.test(descripcion.value)) {
        enviarDatos=0;
        mensajeDescripcion.classList.remove("ocultar");
        descripcion.classList.add("error");
        descripcion.classList.remove("correcto");
        circleCrossDescripcion.classList.remove("ocultar");
        circleCheckDescripcion.classList.add("ocultar");
    }else{
        band++;
        enviarDatos = 1;
        mensajeDescripcion.classList.add("ocultar");
        descripcion.classList.remove("error");
        descripcion.classList.add("correcto");
        circleCrossDescripcion.classList.add("ocultar");
        circleCheckDescripcion.classList.remove("ocultar");
    }
})

var formulario=document.getElementById("formulario");
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    if (enviarDatos === 1 && band === 3 ){
        formulario.submit();
        requestNotification();
    }else{
        enviarDatos === 0;
        requestNotification1();
    }
})

function requestNotification() {
    Notification.requestPermission()
        .then(Permission => {
            if(Permission === "granted") {
                new Notification("Se registro correctamente")
            }
        })    
}

function requestNotification1() {
    Notification.requestPermission()
        .then(Permission => {
            if(Permission === "granted") {
                new Notification("Error al registrarse")
            }
        })
}