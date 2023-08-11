const inputUsuarioIngresado=document.querySelector("#usuario-ingresado");
const inputContraseniaIngresado=document.querySelector("#contrasenia-ingresada");
const inputContraseniaVerif=document.querySelector("#contrasenia-verif");

function registrar() {

    let contraseniaUno=inputContraseniaIngresado.value;
    let contraseniaDos=inputContraseniaVerif.value;

    if (contraseniaUno === contraseniaDos) {
        alert("son iguales");
        ocument.querySelector("a").href="./index.html";
    }else{
        alert(" no son iguales");
        document.querySelector("a").href="#";
    }
}









/* 
const inputUser= document.querySelector("#usuario");
const inputClave= document.querySelector("#contraseña");

localStorage.setItem ("123","JOHA");

function ingresar(){
     usuarioingresado=inputUser.value;
     claveingresada=inputClave.value;

    
    
    if ((usuarioingresado == "JOHA")&& (claveingresada=="123")) {
        alert( "Ingreso exitoso");
    } else {
        alert("Usuario Inexistente: debe registrarse");
    } 
    
} */
