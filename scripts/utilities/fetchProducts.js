const fetchProducts = async () => {
    try {
        const response = await fetch("https://guiedanibackend-production.up.railway.app/api/products");
        const r = await response.json();
        console.log(r)
        return r
    } catch (error) {
       console.log(error) 
    }
}

export default fetchProducts