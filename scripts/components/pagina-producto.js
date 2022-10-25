/* Cambiar imagen pequeña a imagen principal de producto */
import countItemsInCart from "../utilities/countItemsInCart.js";
import footer from "./footer.js";

import footer from "./footer.js";

const mainImg = document.getElementById("mainImg");
const smallImg = document.getElementsByClassName("small-img");
let producto = {};

const getProductFromLocalStorage = () => {
    producto = JSON.parse(localStorage.getItem("detail"));
    producto = JSON.parse(producto);
    console.log(producto);
    mostrarInfo(producto);
}

/*
function mostrarInfo(producto){
    let div = document.createElement()
    let formato = 
    `<section class="container p-5 pt-0 sproduct">
        <div class="row mt-2 justify-content-center">
            <!-- Galería fotos -->
            <div class="col-lg-5 col-md-12 col-12">
                <div class="row">
                    <img class="img-fluid w-100 pb-1" src="https://i.ibb.co/cN8yyc6/foto-producto-1.jpg" alt="Producto 1" id="mainImg">
                </div>
                <div class="row mt-3">
                    <div class="small-img-group">
                        <div class="small-img-col img-fluid">
                            <img class="small-img" src="https://i.ibb.co/cN8yyc6/foto-producto-1.jpg" width="100%" alt="producto 1">
                        </div>
                        <div class="small-img-col img-fluid">
                            <img class="small-img" src="https://i.ibb.co/V3CCGVd/granos-2.jpg" width="100%" alt="producto 2">
                        </div>
                        <div class="small-img-col img-fluid">
                            <img class="small-img" src="https://i.ibb.co/mXMmQZ4/granos-cafe.jpg" width="100%" alt="producto 3">
                        </div>
                        <div class="small-img-col img-fluid">
                            <img class="small-img" src="https://i.ibb.co/mXMmQZ4/granos-cafe.jpg" width="100%" alt="producto 4">
                    </div>
                </div>
                </div>
            </div>
            <!-- Descripción producto -->
            <div class="col-lg-5 col-md-12 col-12">
                <h3 class="mt-3 mb-3">Café Chiapas molido tostado oscuro</h3>
                <p>Tamaño: 480g</p>
                <p>Conoce nuestra selección de granos cultivados por productores de San Cristóbal de las Casas, Chiapas. Deléitate con este exquisito café de alta acidez, aroma intenso, sabor agradable y apreciable cuerpo.</p>
                <h2 class="precio mt-3 mb-3">$139.00</h2>
                <!-- Botón añadir carrito -->
                <div class="row justify-content-center">
                <!--  <input class="mt-1" type="number" value="1"> -->
                    <button class="buy-btn btn btn-success w-50">Añadir a carrito</button>
                </div>
            </div>
        </div>
    </section>`;
} */

footer()

smallImg[0].onclick = () =>{
    mainImg.src = smallImg[0].src;
};
smallImg[1].onclick = () =>{
    mainImg.src = smallImg[1].src;
};
smallImg[2].onclick = () =>{
    mainImg.src = smallImg[2].src;
};
smallImg[3].onclick = () =>{
    mainImg.src = smallImg[3].src;
};

getProductFromLocalStorage();
footer();
countItemsInCart();