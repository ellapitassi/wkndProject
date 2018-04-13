app.service('ProductService', function() {
    const products = [
        {id: 1, name: 'face cream', price: 15},
        {id: 2, name: 'nail polish', price: 10},
        {id: 3, name: 'hairspray', price: 12}]

    const getProducts = () => {
        console.log('in getProucts')
        return {
            products
        }
    }

    const editProduct = () => {
        
    }

    return {
        products,
        getProducts
    }
})

//functions in here to modify, 
//get box to display
//stop 2-way data binding
//then get hard save
