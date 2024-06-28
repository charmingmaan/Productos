var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var regexCelular = /^\d{10}$/;

var nombre=document.getElementById("nombre");
var mensajeNombre=document.getElementsByClassName("mensajeNombre") [0];
var circleCrossNombre=document.getElementsByClassName("circleCrossNombre") [0];
var circleCheckNombre=document.getElementsByClassName("circleCheckNombre") [0];
var enviarDatos=1;
var band=0;

nombre.addEventListener("blur", ()=>{    
    if (!regexNombre.test(nombre.value)) {
        enviarDatos=0;
        mensajeNombre.classList.remove("ocultar");
        nombre.classList.add("error");
        nombre.classList.remove("correcto");
        circleCrossNombre.classList.remove("ocultar");
        circleCheckNombre.classList.add("ocultar");
    }else{
        band++;
        enviarDatos = 1;
        mensajeNombre.classList.add("ocultar");
        nombre.classList.remove("error");
        nombre.classList.add("correcto");
        circleCrossNombre.classList.add("ocultar");
        circleCheckNombre.classList.remove("ocultar");
    }
});

var celular=document.getElementById("celular");
var mensajeCelular=document.getElementsByClassName("mensajeCelular") [0];
var circleCrossCelular=document.getElementsByClassName("circleCrossCelular") [0];
var circleCheckCelular=document.getElementsByClassName("circleCheckCelular") [0];

celular.addEventListener("blur", ()=>{
    if (!regexCelular.test(celular.value)) {
        enviarDatos=0;
        mensajeCelular.classList.remove("ocultar");
        celular.classList.add("error");
        celular.classList.remove("correcto");
        circleCrossCelular.classList.remove("ocultar");
        circleCheckCelular.classList.add("ocultar");
    }else{
        band++;
        enviarDatos = 1;
        mensajeCelular.classList.add("ocultar");
        celular.classList.remove("error");
        celular.classList.add("correcto");
        circleCrossCelular.classList.add("ocultar");
        circleCheckCelular.classList.remove("ocultar");
    }
})

var correo=document.getElementById("correo");
var mensajeCorreo=document.getElementsByClassName("mensajeCorreo") [0];
var circleCrossCorreo=document.getElementsByClassName("circleCrossCorreo") [0];
var circleCheckCorreo=document.getElementsByClassName("circleCheckCorreo") [0];

correo.addEventListener("blur", ()=>{
    if (!regexCorreo.test(correo.value)) {
        enviarDatos=0;
        mensajeCorreo.classList.remove("ocultar");
        correo.classList.add("error");
        correo.classList.remove("correcto");
        circleCrossCorreo.classList.remove("ocultar");
        circleCheckCorreo.classList.add("ocultar");
    }else{
        band++;
        enviarDatos = 1;
        mensajeCorreo.classList.add("ocultar");
        correo.classList.remove("error");
        correo.classList.add("correcto");
        circleCrossCorreo.classList.add("ocultar");
        circleCheckCorreo.classList.remove("ocultar");
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
        // alert("Hay campos con error o sin validar");
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