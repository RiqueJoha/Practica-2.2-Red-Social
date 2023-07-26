const inputUser= document.querySelector("#usuario");
const inputClave= document.querySelector("#contraseña");
const pResultado=document.querySelector("#resultado");

const NOMBRE_USER="JOHA";
const CLAVE_USER= "123";

function ingresar(){
     usuarioingresado=inputUser.value;
     claveingresada=inputClave.value;


    
    if ((usuarioingresado == NOMBRE_USER)&& (claveingresada==CLAVE_USER)) {
        alert( "Ingreso exitoso");
    } else {
        alert("Usuario o clave incorrecta");
    } 
    
}