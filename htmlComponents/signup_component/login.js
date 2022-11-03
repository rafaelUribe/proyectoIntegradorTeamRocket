//  ==================== Creamos base de datos de usuarios ====================
/* const baseUsuarios = {
    "Luis": "123",
    "Ethan" : "Humano", 
    "Maria" : "321"
    
} */

// ==================== La guardamos en el local storage ====================

//localStorage.setItem('usuarios', JSON.stringify(baseUsuarios));
//usuarios es el nombre que yo le doy en el localStorage
//baseUsuarios es el nombre de mi objeto

//==================== Recupoeramos base de datos del localstorage ====================
const usuarios = JSON.parse(localStorage.getItem('usuarios'));
console.log(usuarios);

//==================== Boton de acceder ====================


function login() {


    //Guardamos los elementos que el usuario ponga como usuario y password
    //User y pass son los id que pusimos en el form
    let usuario = document.getElementById("user").value;
    let contraseña = document.getElementById("pass").value;

    warning = "";
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
//==================== Aquí buscamos los usuatrios ====================

//En el for externo iteramos a los usuarios

    for (let i=0;i<usuarios.length;i++) {

            console.log("Aqui imprimimos los usuarios pa ver si los carga");
            console.log(usuarios[i].usuario);
/*             console.log(usuarios.usuario);
 */    
            //En este ciclo comparamos el usuario de entrada con los usuarios
            //Si encuentra al usuario entra a este ciclo
            if (usuario == usuarios[i].usuario ) {//Aqui compara la contraseña de entrada con la del usuario en la base
                if (contraseña == usuarios[i].contraseña) {
                    //Si ls dos coniciden se logea correctamente
                    window.location = "https://www.youtube.com/watch?v=NwzGmP_BJaE&ab_channel=JudithTiral";
    
                } else {
                    //Si la contraseña no coincide manda mensaje
                    warning += `<br> Contraseña incorrecta <br>`
                   parrafo.innerHTML = warning;
                   return false
                }
        
            } 
    
   
    }

    //Cuando no encuentra al usuario sale del ciclo for in e imprimimos este mensaje

    warning += `<br> Usuario no registrado <br>`
    parrafo.innerHTML = warning;



}