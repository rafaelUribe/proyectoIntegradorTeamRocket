import fetchProducts from "../scripts/utilities/fetchProducts.js"
import setAsDetailed from "../scripts/utilities/setAsDetailed.js"
import footer from "./components/footer.js"
import countItemsInCart from "./utilities/countItemsInCart.js"

footer()

const featured_products_div = document.getElementById("featured-products")
const btn_to_catalogue = document.getElementById("toCatalogue")

countItemsInCart()

let lineup = []

const goToProductDetail = ({target}) => {
    const id = parseInt(target.title)
    const product = JSON.stringify(lineup.filter(p => p.id_product === id)[0])
    console.log(lineup,id)
    setAsDetailed(product)
    window.location = "./pagina-producto.html";
    
}

const addToCart = ({target}) => {
    const product = target.value
    const local = localStorage.getItem("cart")
    let memoryA = JSON.parse(local)
    if(memoryA == null){
        memoryA = []
    }
    memoryA.push(product)
    const memoryAString = JSON.stringify(memoryA)
    localStorage.setItem("cart", memoryAString)
    countItemsInCart()
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

    let set = arr.slice(0,2)

    set.forEach(producto => {
        const id = producto.id_product
        const nombre = producto.name
        const descripcion = producto.description
        const url = producto.img_1
        const price = formatter.format(producto.price)

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
                <p title="${id}" class="btn-dtl"
                    style="min-height: 200px"
                >${descripcion}</p>
                <h4 class="text-center btn-dtl" title="${id}">${price}</h4>
                <button 
                    class="btn btn-success mt-2 w-100 btn-crt"
                    value='${JSON.stringify(producto)}'
                >
                    Añadir a carrito
                </button>
            </div>`
    })

    btnsDtl = document.getElementsByClassName("btn-dtl")
    btnsCrt = document.getElementsByClassName("btn-crt")
    for(let i=0; i<btnsDtl.length; i++){
        btnsDtl[i].addEventListener("click", goToProductDetail)
    }
    for(let i=0; i<btnsCrt.length; i++){
        btnsCrt[i].addEventListener("click", addToCart)
    }
    
}

validateProducts()

btn_to_catalogue.addEventListener("click", (e => window.location = "./catalogue.html"))