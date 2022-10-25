const fetchProducts = async () => {
    try {
        const response = await fetch("https://sheets.googleapis.com/v4/spreadsheets/18XLzuyYJm9HdyiVWR8-mz64l2LfzKzym3nrtyXAkso8/values/products!A:J?key=AIzaSyAtlxUEuKZG1L3L9SLjFXXUzCezLkZ6kOU");
        const {values} = await response.json();
        const objectKeys = values.shift();
        const model = {};
        objectKeys.forEach( key => model[key] = "")
        const products = values.map( value => {
            const p = {...model}
            value.map( (element, index )=> p[objectKeys[index]] = element)
            return p
        })
        return products
    } catch (error) {
       console.log(error) 
    }
}

export default fetchProducts