import fetchProducts from "../scripts/utilities/fetchProducts.js"
import setAsDetailed from "../scripts/utilities/setAsDetailed.js"
import countItemsInCart from "./utilities/countItemsInCart.js"
import footer from "./components/footer.js"

const productsContainer = document.getElementById("catalogue-products")
const flclaro = document.getElementById("claro")
const flmedio = document.getElementById("medio")
const flmediooscuro = document.getElementById("mediooscuro")
const floscuro = document.getElementById("oscuro")
const flgrano = document.getElementById("grano")
const flmolido = document.getElementById("molido")

footer()

countItemsInCart()

let lineup = []
let filterLayer = []

const goToProductDetail = ({target}) => {
    const id = parseInt(target.title)
    const product = JSON.stringify(lineup.filter(p => p.id_product === id)[0])
    console.log(lineup,id)
    setAsDetailed(product)
    window.location = "./pagina-producto.html";
    
}

const addToCart = ({target}) => {
    const product = target.title
    console.log(product)
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
    printProducts(lineup)
    saveProductsToLocalStorage(lineup, 1)
    console.log("fetched from remote")
    filterLayer = [...lineup]
}
const getFromLocalStorage = (localProducts) => {
    lineup = localProducts
    printProducts(lineup)
    console.log("fetched from local")
    filterLayer = [...lineup]
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

let tostado = ""
let presentacion = ""

const applyFilters = () => {
    filterLayer = [...lineup]
    filterLayer = filterLayer.filter( product => product.id_roast.name.includes(tostado))
    filterLayer = filterLayer.filter( product => product.id_presentation.name.includes(presentacion))
    printProducts(filterLayer);
}

const toggleAndFilterTostado = ({target}) => {
    const makeAllFalse = () =>{
        flclaro.checked = false
        flmedio.checked = false
        flmediooscuro.checked = false
        floscuro.checked = false
    } 
    const str = target.id
    switch(str){
        case "claro":
            if(flclaro.checked === true){
                makeAllFalse()
                flclaro.checked = true
                tostado = "claro"
                console.log(tostado)
            } else {
                makeAllFalse()
                tostado = ""
            }
        break;
        case "medio":
            if(flmedio.checked === true){
                makeAllFalse()
                flmedio.checked = true
                tostado = "medio"
                console.log(tostado)
            } else {
                makeAllFalse()
                tostado = ""
            }
        break;
        case "mediooscuro":
            if(flmediooscuro.checked === true){
                makeAllFalse()
                flmediooscuro.checked = true
                tostado = "medio oscuro"
                console.log(tostado)
            } else {
                makeAllFalse()
                tostado = ""
            }
        break;
        case "oscuro":
            if(floscuro.checked === true){
                makeAllFalse()
                floscuro.checked = true
                tostado = "oscuro"
                console.log(tostado)
            } else {
                makeAllFalse()
                tostado = ""
            }
        break;
    }
    applyFilters()
}

const toggleAndFilterPresentacion = ({target}) => {
    const makeAllFalse = () =>{
        flgrano.checked = false
        flmolido.checked = false
    }
    const str = target.id
    switch(str){
        case "grano":
            if(flgrano.checked === true){
                makeAllFalse()
                flgrano.checked = true
                presentacion = str
                console.log(str)
            } else {
                makeAllFalse()
                presentacion = ""
            }
        break;
        case "molido":
            if(flmolido.checked === true){
                makeAllFalse()
                flmolido.checked = true
                presentacion = str
                console.log(str)
            } else {
                makeAllFalse()
                presentacion = ""
            }
        break;
    }
    applyFilters()
}

const printProducts = (arr) => {

    productsContainer.innerHTML = ""

    arr.length > 0 && arr.forEach(producto => {
        const id = producto.id_product
        const nombre = producto.name
        const descripcion = producto.description
        const url = producto.img_1
        const price = formatter.format(producto.price)

        productsContainer.innerHTML +=
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
            <div title="${id}" class="btn-dtl align-middle"
                style="min-height: 200px; vertical-align: middle;"          
            >
                ${descripcion}
            </div>
            <h4 class="text-center btn-dtl" title="${id}">${price}</h4>
            <button 
                class="btn btn-success mt-2 w-100 btn-crt"
                value='${JSON.stringify(producto)}'
            >
                Añadir a carrito
            </button>
        </div>`
    });

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

flclaro.addEventListener("click", toggleAndFilterTostado)
flmedio.addEventListener("change", toggleAndFilterTostado)  
flmediooscuro.addEventListener("change", toggleAndFilterTostado) 
floscuro.addEventListener("change", toggleAndFilterTostado)
flgrano.addEventListener("change", toggleAndFilterPresentacion)
flmolido.addEventListener("change", toggleAndFilterPresentacion)