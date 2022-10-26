const countItemsInCart = () => {
    const cartCountBtn = document.getElementById("cart-count")
    let local = localStorage.getItem("cart")
    if(local == null){
        local == []
        cartCountBtn.innerHTML = 0
    } else {
        local = JSON.parse(local)
        cartCountBtn.innerHTML = local.length
    }
}

export default countItemsInCart
