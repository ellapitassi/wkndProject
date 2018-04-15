app.service('ProductService', function() {
    const products = [
        {id: 1, name: 'face cream', price: 15},
        {id: 2, name: 'nail polish', price: 10},
        {id: 3, name: 'hairspray', price: 12}]

    const getProducts = () => {
        return {
            products
        }
    }

    const beingEditedIds = []

    const editProduct = (id) => {
        console.log('id', id)
        if (!beingEditedIds.includes(id)){
            beingEditedIds.push(id)
            console.log(beingEditedIds)
        }
    }

    const cancelEditing = (id) => {
        var index = beingEditedIds.indexOf(id)
        if (index !== -1) {
            beingEditedIds.splice(index, 1);
        } 
    }

    const closeEdits = () => {
        beingEditedIds.splice(0, beingEditedIds.length)
    }


    return {
        products,
        getProducts,
        editProduct,
        beingEditedIds,
        cancelEditing,
        closeEdits
    }
})

//functions in here to modify, 

//get box to display
//get cancel to display

//stop 2-way data binding
//then get hard save
