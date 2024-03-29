import { database } from "../../database"

const deleteProductService = async (productId) => {
    const queryDeleteProduct = await database.query(`
    DELETE 	
	    FROM 
	        products 
	    WHERE 
		    id = $1;`, [productId]
    )

    return {}
}

export { deleteProductService }