const countItemsInCart = () => {
    const cartCountBtn = document.getElementById("cart-count")
    let local = localStorage.getItem("cart")
    if(local == null){
        local == []
        cartCountBtn.innerHTML = 0
    } else {
        local = JSON.parse(local)
        cartCountBtn.innerHTML = local.length
        console.log("conto mas de 1")
    }
}

export default countItemsInCart
