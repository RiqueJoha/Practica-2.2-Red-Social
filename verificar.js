const inputUsuario=document.querySelector("#usuario");
const inputContrasenia=document.querySelector("#contrasenia");

const CLAVE_USUARIOS="lista-usuarios";
const CLAVE_CONTRASENIAS="lista-contrasenias";

function verificar() {
    let nombre=inputUsuario.value;
    let usuario=inputContrasenia.value;
    let listaUsuarios= "def lista usuarios";
    let listaContrasenias= "def lista contrasenias";

    listaUsuarios= JSON.parse(localStorage.getItem(CLAVE_USUARIOS));
    if (listaUsuarios === null) {
        alert ("no hay cuentas registradas");
    } else {
        
    }
}