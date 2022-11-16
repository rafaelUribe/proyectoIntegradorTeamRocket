const baseUsuarios =[
    {
        usuario: "Luis",
        telefono : 5549975405, 
        email : "luis_40@gmail.com",
        contraseña: 123456
        
    }
];

function addUser () {
    //Jalamos los datos del form
    let entradaUsuario = document.getElementById("entradaUsuario").value;
    let entradaTelefono = document.getElementById("entradaTelefono").value;
    let entradaEmail = document.getElementById("entradaEmail").value;
    let entradaContraseña = document.getElementById("entradaContraseña").value;
 
    //Los agregamos a la base 
    const newUser = {
        usuario: entradaUsuario, 
        telefono: entradaTelefono,
        email: entradaEmail,
        contraseña: entradaContraseña
    };
    baseUsuarios.push(newUser);
    console.log(baseUsuarios);

    //Lo guardamos en el localStorage
localStorage.setItem('usuarios', JSON.stringify(baseUsuarios));
}


