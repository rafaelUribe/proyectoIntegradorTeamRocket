import countItemsInCart from  "./utilities/countItemsInCart.js"
import footer from "./components/footer.js"

let product = {}

const getProductFromLocalStorage = () => {
    producto = JSON.parse(localStorage.getItem("detail"))
    console.log(producto)
 }


footer();
countItemsInCart();


