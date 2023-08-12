const inputUsuario = document.querySelector("#usuario");
const inputContrasenia = document.querySelector("#contrasenia");

const CLAVE_USUARIOS = "lista-usuarios";
const CLAVE_CONTRASENIAS = "lista-contrasenias";

function verificar() {
    let nombre = inputUsuario.value;
    let clave = inputContrasenia.value;
    let listaUsuarios = "def lista usuarios";
    let listaContrasenias = "def lista contrasenias";
    let ingresoVerificado = false;

    listaUsuarios = JSON.parse(localStorage.getItem(CLAVE_USUARIOS));
    if (listaUsuarios === null) {
        alert("no hay cuentas registradas");
    } else {

        for (let i = 0; i < listaUsuarios.length; i++) {
            if (listaUsuarios[i] === nombre) {
                listaContrasenias = JSON.parse(localStorage.getItem(CLAVE_CONTRASENIAS));
                /* alert("encontre el nombre del usuario"); */
            }
            for (let i = 0; i < listaContrasenias.length; i++) {
                if (listaContrasenias[i] === clave) {
                    ingresoVerificado = true;
                    /*  alert("contraseña verificada"); */
                }

            }
        }
        if (ingresoVerificado) {
            alert("cuenta verificada, puede ingresar")
        } else {
            alert("usuario y/o clave incorrecto")
        }
    }
}