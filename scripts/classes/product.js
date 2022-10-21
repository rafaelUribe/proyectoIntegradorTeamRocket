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

    addToCart() {
        
    }

    getProductCard() {
        let formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        return `<div 
                    style=
                    "
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        width: 250px;
                        background: #E9E5D6;
                        padding: 2rem;
                        box-shadow: 0 6px 8px gray;
                        border-radius: .5rem;
                    "
                >
                    <div
                        style=
                        "
                            width: 180px;
                            height: 180px;
                            background-image: url(${this.img_url});
                            background-size: cover;
                            background-position: center;
                            background-repead: no-repeat;
                            border-radius: .5rem;
                        "
                    >
                    </div>
                    <div
                        style=
                        "   
                            margin-top: 1rem;
                        "
                    >
                        <h3>
                            ${this.name}
                        </h3>
                    </div>
                    <div>
                        <p style="text-align: center">
                            ${this.description}
                        </p>
                    </div>
                    <div>
                        <h4 style="text-align: center">
                            ${formatter.format(this.price)}
                        </h4>
                    </div>
                    <div>
                        <button
                            class='btn btn-success'
                            style="width: 180px;"
                        >
                            ${this.buttonLabel}
                        </button>
                    </div>
                </div>`
    }

}

export default product