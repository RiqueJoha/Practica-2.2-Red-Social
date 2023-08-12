const inputUsuarioIngresado=document.querySelector("#usuario-ingresado");
const inputContraseniaIngresado=document.querySelector("#contrasenia-ingresada");
const inputContraseniaVerif=document.querySelector("#contrasenia-verif");

const CLAVE_USUARIOS="lista-usuarios";
const CLAVE_CONTRASENIAS="lista-contrasenias";




function registrar() {

    let contraseniaUno=inputContraseniaIngresado.value;
    let contraseniaDos=inputContraseniaVerif.value;
    let listaUsuarios= "def lista usuarios";
    let listaContrasenias= "def lista contrasenias";

    if (contraseniaUno === contraseniaDos) {
      /*   alert("son iguales"); */
        document.querySelector("a").href="./index.html"; 

        listaUsuarios= JSON.parse(localStorage.getItem(CLAVE_USUARIOS));
        listaContrasenias= JSON.parse(localStorage.getItem(CLAVE_CONTRASENIAS));

        if (listaUsuarios === null){
            listaUsuarios = [];
            localStorage.setItem (CLAVE_USUARIOS, JSON.stringify(listaUsuarios));
            
        }
        if (listaContrasenias === null){
            listaContrasenias = [];
            localStorage.setItem (CLAVE_CONTRASENIAS, JSON.stringify(listaContrasenias));
            
        }
        listaUsuarios.push(inputUsuarioIngresado.value);
        localStorage.setItem (CLAVE_USUARIOS, JSON.stringify(listaUsuarios));
        listaContrasenias.push(inputContraseniaIngresado.value);
        localStorage.setItem (CLAVE_CONTRASENIAS, JSON.stringify(listaContrasenias));

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
