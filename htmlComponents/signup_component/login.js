/* baseDeDatos = localStorage.getItem("sistema-de-login");

if (!baseDeDatos) {
    cargarDatosUsuario();
}

function cargarDatosUsuario () {
    badeDeDatos = {
        "Luis": {
            password : "Ponciano"
        },
        "Ethan": {
            password : "HumanoProgramado"
        }
    }
} */
//  ==================== Creamos base de datos de usuarios ====================
const baseUsuarios = {
    "Luis": {
        password : "Ponciano"
    },
    "Ethan": {
        password : "Humano"
    }
}


// ==================== La guardamos en el local storage ====================

localStorage.setItem('usuarios', JSON.stringify(baseUsuarios));

//==================== Recupoeramos base de datos del localstorage ====================
const usuarios = JSON.parse(localStorage.getItem('usuarios'));
console.log(usuarios);

//==================== Boton de acceder ====================


function login(){
    


    let usuario = document.getElementById("user").value;
    let contraseña = document.getElementById("pass").value;

    warning ="";
    if (!usuario && !contraseña) {
            warning += `<br> Ingresa usuario y contraseña <br> `
            parrafo.innerHTML = warning;
            return false
    }

    if (!usuario) {
        warning += `<br> Ingresa usuario <br>`
        parrafo.innerHTML = warning;
        return false
    }

    if (!contraseña) {
        warning += `<br> Ingresa contraseña <br>`
        parrafo.innerHTML = warning;
        return false
    }



        //Aquí buscamos el usuario

        //const keysUsuarios = Object.keys(baseUsuarios).map(key => {
            //console.log(key);
            if (usuario == "Luis" && contraseña == 123) {

        
        

                //console.log(baseDeDatos)
        
                window.location = "https://www.youtube.com/watch?v=NwzGmP_BJaE&ab_channel=JudithTiral";
        
            } 






    else {
        warning += `<br> Usuario no registrado <br>`
        parrafo.innerHTML = warning;
        return false
    }
}