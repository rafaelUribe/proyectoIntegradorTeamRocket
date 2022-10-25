/* Cambiar imagen pequeña a imagen principal de producto */
import countItemsInCart from "../utilities/countItemsInCart.js";
import footer from "./footer.js";

const mainImg = document.getElementById("mainImg");
const smallImg = document.getElementsByClassName("small-img");
let producto = {};

const getProductFromLocalStorage = () => {
    producto = JSON.parse(localStorage.getItem("detail"))
    producto = JSON.parse(producto)
    console.log(producto)
 }

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