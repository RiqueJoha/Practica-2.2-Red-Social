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
    
}
