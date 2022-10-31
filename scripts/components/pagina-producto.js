
import countItemsInCart from "../utilities/countItemsInCart.js";
import footer from "./footer.js";

const mainImg = document.getElementById("mainImg");
const smallImg = document.getElementsByClassName("small-img");
let sproduct = {};

const getProductFromLocalStorage = () => {
    sproduct = JSON.parse(localStorage.getItem("detail"))
    sproduct = JSON.parse(sproduct)
    console.log(sproduct)
    showInfo(sproduct);
}


const showInfo = (sproduct) =>{
    let div = document.createElement("div");
    const objDiv = document.getElementById("product-info");
    let productName = sproduct.nombre;
    let price = sproduct.precio;
    let description = sproduct.descripcion;
    let mainImg = sproduct.imagen;
    let smallImg1 = sproduct.imagen;
    let smallImg2 = sproduct.simg1;
    let smallImg3 = sproduct.simg2;
    let smallImg4 = sproduct.simg3;

    let formato = 
    `<div class="row mt-2 justify-content-center">
        <!-- Galería fotos -->
        <div class="col-lg-5 col-md-12 col-12">
            <div class="row">
                <img class="img-fluid w-100 pb-1" src="${mainImg}" alt="Producto 1" id="mainImg">
            </div>
            <div class="row mt-3">
                <div class="small-img-group">
                    <div class="small-img-col img-fluid">
                        <img class="small-img" src="h${smallImg1}" width="100%" alt="producto 1">
                    </div>
                    <div class="small-img-col img-fluid">
                        <img class="small-img" src="${smallImg2}" width="100%" alt="producto 2">
                    </div>
                    <div class="small-img-col img-fluid">
                        <img class="small-img" src="${smallImg3}" width="100%" alt="producto 3">
                    </div>
                    <div class="small-img-col img-fluid">
                        <img class="small-img" src="${smallImg4}" width="100%" alt="producto 4">
                </div>
            </div>
            </div>
        </div>
        <!-- Descripción producto -->
        <div class="col-lg-5 col-md-12 col-12">
            <h3 class="mt-3 mb-3">${productName}</h3>
            <p>Tamaño: 480g</p>
            <p>${description}</p>
            <h2 class="precio mt-3 mb-3">$${price}</h2>
            <!-- Botón añadir carrito -->
            <div class="row justify-content-center">
            <!--  <input class="mt-1" type="number" value="1"> -->
                <button class="buy-btn btn btn-success w-50">Añadir a carrito</button>
            </div>
        </div>
    </div>`;

div.innerHTML = formato;
div.className = "container p-5 pt-0 sproduct";
}


/* Galería producto */
/*
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
};*/

getProductFromLocalStorage();
//showInfo();
footer();
countItemsInCart();