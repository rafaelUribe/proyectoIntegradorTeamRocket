let carritoBase = JSON.parse(localStorage.getItem("cart"));
console.log(carritoBase)
// carritoBase = JSON.parse(carritoBase)
let carritoSinDuplicados = [...new Set(carritoBase)];
let prueba = new Set(carritoBase)

function renderizarCarrito(carritoSinDuplicados) {

  console.log(carritoSinDuplicados);

  let objetoCarrito;
  let codigo = '';
  let total = 0;

  let comparar;
  for (let i = 0; i < carritoSinDuplicados.length; i++) {
    objetoCarrito = JSON.parse(carritoSinDuplicados[i]);
    let cantidad = 0;

    for (let j = 0; j < carritoBase.length; j++) {
      comparar = JSON.parse(carritoBase[j])
      if (objetoCarrito.id === comparar.id) {
        cantidad++;
      }
    }

    codigo += `<div class="card mb-3 my-4 p-4 bg-cream" style="max-width: 540px; margin:0px auto">
                  <div class="row g-0">
                    <div class="col-sm-4 mx-auto">
                      <img src="${objetoCarrito.simg1}" class="img-fluid rounded-2 " alt="...">
                    </div>
                    <div class="col-sm-8">
                      <div class="card-body text-center">
                        <h5 class="card-title">${objetoCarrito.nombre}</h5>
                        <p class="card-text mt-4">Cantidad: ${cantidad}</p>
                        <p class="card-text mt-1">Subtotal: $${objetoCarrito.precio * cantidad}</p>
                        <button class="btn btn-succes bg-green buy-btn mt-1 text-light remover" style="min-width: 200px"  onclick="borrar(${objetoCarrito.id})">Remover</button>
                      </div>
                    </div>
                  </div>
                </div>`;

    total += Number(objetoCarrito.precio * cantidad);
  }

  document.getElementById('contenido').innerHTML = codigo;
  document.getElementById('total').innerHTML = total;
}

function borrar(id) {
  let comparar;
  let carritoSinDuplicados;
  prueba.forEach((item)=>{
    comparar = JSON.parse(item)
    if(id === Number(comparar.id)){
      prueba.delete(item);
    }
  });
  carritoSinDuplicados = [...new Set(prueba)];
  renderizarCarrito(carritoSinDuplicados);
}


renderizarCarrito(carritoSinDuplicados);
let remover = document.querySelector(".remover");

remover.addEventListener('click', borrar)