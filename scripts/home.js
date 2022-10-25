import fetchProducts from "../scripts/utilities/fetchProducts.js"
import setAsDetailed from "../scripts/utilities/setAsDetailed.js"
import countItemsInCart from "./utilities/countItemsInCart.js"

const featured_products_div = document.getElementById("featured-products")
const btn_to_catalogue = document.getElementById("toCatalogue")
const cartCountBtn = document.getElementById("cart-count")

cartCountBtn.innerHTML = 0
const cartStorage = localStorage.getItem("cart")
cartStorage != "null" && countItemsInCart()

let lineup = []

const goToProductDetail = ({target}) => {
    const id = target.title || target.alt
    const product = JSON.stringify(lineup.filter(p => p.id === id)[0])
    setAsDetailed(product)
    window.location = "./pagina-producto.html";
}

const saveProductsToLocalStorage = (lineup, hours) => {
    const products = {
        content: [...lineup],
        time: Date.now() + (hours * 3600000)
    }
    localStorage.setItem('products', JSON.stringify(products))
}

const getFromRemote = async() => {
    lineup = await fetchProducts()
    printFeatured(lineup)
    saveProductsToLocalStorage(lineup, 1)
    console.log("fetched from remote")
}
const getFromLocalStorage = (localProducts) => {
    lineup = localProducts
    printFeatured(lineup)
    console.log("fetched from local")
}

const validateProducts = () => {
    const localProducts = JSON.parse(localStorage.getItem("products"))
    localProducts?.content.length > 0 && localProducts.time > Date.now() ?
        getFromLocalStorage(localProducts.content) :
        getFromRemote()
}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

let btnsDtl = []
let btnsCrt = []

const printFeatured = (arr) => {
    const featured = arr.filter(pr => pr.featured === "TRUE");

    featured.forEach(producto => {
        const id = producto.id
        const nombre = producto.nombre
        const descripcion = producto.descripcion
        const url = producto.imagen
        const price = formatter.format(producto.precio)
        const detailID = `btn-dtl-${id}`
        const addToCartID = `btn-crt-${id}`

        featured_products_div.innerHTML +=
            `<div id="${id}" class="col-lg-4  p-4 bg-cream text-center rounded-4 shadow m-4" style="max-width: 300px;">
                <button 
                    class="img-fluid rounded-4 btn-dtl"
                    style="
                        width: 250px;
                        height: 250px;
                        background: transparent url('${url}') no-repeat center;
                        background-size: cover;
                        border: none;
                    "
                    title="${id}"
                >
                </button>
                <h4 class="mt-3 pe-auto btn-dtl" title="${id}">${nombre}</h4>
                <p title="${id}" class="btn-dtl">${descripcion}</p>
                <h4 class="text-center btn-dtl" title="${id}">${price}</h4>
                <button 
                class="btn btn-success mt-2 w-100 btn-crt"
                id="${addToCartID}"
                value="${id}"
                onClick="localStorage.setItem('cart', localStorage.getItem('cart') + ',' + this.value);
                        window.location.reload()
                "
                >Añadir a carrito</button>
            </div>`
    })

    btnsDtl = document.getElementsByClassName("btn-dtl")
    btnsCrt = document.getElementsByClassName("btn-crt")
    for(let i=0; i<btnsDtl.length; i++){
        btnsDtl[i].addEventListener("click", goToProductDetail)
        console.log(btnsDtl[i])
    }
    
}



validateProducts()

btn_to_catalogue.addEventListener("click", (e => window.location = "./catalogue.html"))