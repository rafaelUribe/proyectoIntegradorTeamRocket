const countItemsInCart = () => {
    const cartCountBtn = document.getElementById("cart-count")
    cartCountBtn.innerHtml = localStorage.getItem("cart").split(",").length
}

export default countItemsInCart
