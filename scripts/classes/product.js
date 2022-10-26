class product {
    constructor(id, name, price, img_url, stock, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img_url = img_url;
        this.stock = stock;
        this.description = description;
        this.buttonLabel = "Añadir al carrito"
    }

}

export default product