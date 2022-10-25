
const formulario = document.querySelector("#formularioProducto");

const procesaTodo = (event) => {
    event.preventDefault();

    const datos = new FormData(event.target);
    
    const datosCompletos = Object.fromEntries(datos.entries());

    console.log(JSON.stringify(datosCompletos));
}

formulario.addEventListener('submit', procesaTodo);