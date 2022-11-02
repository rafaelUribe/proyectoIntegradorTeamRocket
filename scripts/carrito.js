import footer from "./components/footer.js";
import countItemsInCart from "./utilities/countItemsInCart.js";



let arreglo = JSON.parse(localStorage.getItem("cart"));

console.log(typeof(arreglo));
console.log(arreglo.length)

let objetoCarrito;
let codigo = '';
let total = 0;
for(let i = 0; i<arreglo.length; i++){
    objetoCarrito = JSON.parse(arreglo[i]);
    console.log(objetoCarrito);

    codigo += `<div class="card mb-3 my-4 p-4 bg-cream" style="max-width: 540px; margin:0px auto">
    <div class="row g-0">
      <div class="col-sm-4 mx-auto">
        <img src="${objetoCarrito.simg1}" class="img-fluid rounded-2 " alt="...">
      </div>
      <div class="col-sm-8">
        <div class="card-body text-center">
          <h5 class="card-title">${objetoCarrito.nombre}</h5>
          <p class="card-text mt-4">$${objetoCarrito.precio}</p>
          <button class="btn btn-succes bg-green buy-btn mt-3 text-light" style="min-width: 200px">Remover</button>
        </div>
      </div>
    </div>
  </div>`;

  total += Number(objetoCarrito.precio);
}

document.getElementById('contenido').innerHTML = codigo;
document.getElementById('total').innerHTML = total;



countItemsInCart();
footer();

