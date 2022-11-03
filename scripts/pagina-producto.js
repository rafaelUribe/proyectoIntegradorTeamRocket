/* Cambiar imagen pequeña a imagen principal de producto */
import countItemsInCart from "./utilities/countItemsInCart.js";
import footer from "./components/footer.js";

const main = document.querySelector("main")
let addToCartButton = null;

let producto = {};

const getProductFromLocalStorage = () => {
    producto = JSON.parse(localStorage.getItem("detail"));
    producto = JSON.parse(producto);
    mostrarInfo(producto);
}

const addProductToCart = ({target}) => {
    let cartProducts = JSON.parse(localStorage.getItem("cart"));
    if(cartProducts == null) cartProducts = []
    const item = JSON.parse(target.value)
    cartProducts.push(item)
    localStorage.setItem("cart",JSON.stringify(cartProducts))
    countItemsInCart()
}

let smallImgs = []
let mainIMG = null

const replaceImg = ({target}) => {
    mainIMG.src = target.src
}

let IMG = ""
let img1 = ""
let img2 = ""
let img3 = ""

function mostrarInfo(producto){
    IMG = producto.imagen
    img1 = producto.simg1
    img2 = producto.simg2
    img3 = producto.simg3
    const name = producto.nombre
    const price = producto.precio
    const gramos = producto.gramos
    const desc = producto.de

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    
    main.innerHTML = `<section class="container p-5 pt-0 sproduct">
        <div class="row mt-2 justify-content-center">
            <div class="col-lg-5 col-md-12 col-12">
                <div class="row">
                    <img class="img-fluid w-100 pb-1" src="${IMG}" alt="Producto 1" id="mainImg">
                </div>
                <div class="row mt-3">
                    <div class="small-img-group">
                        <div class="small-img-col img-fluid"> 
                            <img class="small-img" src="${IMG}" width="100%" alt="producto 1">
                        </div>
                        <div class="small-img-col img-fluid">
                            <img class="small-img" src="${img1}" width="100%" alt="producto 2">
                        </div>
                        <div class="small-img-col img-fluid">
                            <img class="small-img" src="${img2}" width="100%" alt="producto 3">
                        </div>
                        <div class="small-img-col img-fluid">
                            <img class="small-img" src="${img3}" width="100%" alt="producto 4">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-12 col-12">
                <h3 class="mt-3 mb-3">${name}</h3>
                <p>Tamaño: ${gramos}g</p>
                <p>Conoce nuestra selección de granos cultivados por productores de San Cristóbal de las Casas, Chiapas. Deléitate con este exquisito café de alta acidez, aroma intenso, sabor agradable y apreciable cuerpo.</p>
                <h2 class="precio mt-3 mb-3">
                     ${formatter.format(price)}
                </h2>
                <div class="row justify-content-center">
                    <button class="buy-btn btn btn-success w-50" value='${JSON.stringify(producto)}' id='add-to-cart'>Añadir a carrito</button>
                </div>
            </div>
        </div>
    </section>`;

    smallImgs = document.getElementsByClassName("small-img");
    mainIMG = document.getElementById("mainImg");
    addToCartButton = document.getElementById("add-to-cart")
    
    for(let i = 0; i<smallImgs.length; i++){
        smallImgs[i].addEventListener("click", replaceImg)
    }

    addToCartButton.addEventListener("click", addProductToCart)

}

// smallImg[0].onclick = () =>{
//     mainImg.src = smallImg[0].src;
// };
// smallImg[1].onclick = () =>{
//     mainImg.src = smallImg[1].src;
// };
// smallImg[2].onclick = () =>{
//     mainImg.src = smallImg[2].src;
// };
// smallImg[3].onclick = () =>{
//     mainImg.src = smallImg[3].src;
// };

getProductFromLocalStorage();
footer();
countItemsInCart();