import { database } from "../../database"
import { listReturnProductCategoty } from "../../serializers/products/createProduct.serializer"

const productsCategoryService = async (categoryId) => {
    const productsCategory = await database.query(`
    SELECT 
        pro.name,
        pro.price,
        ca.name as category
	FROM 
    	products pro 
	JOIN 
        categories ca  ON ca.id = pro.category_id 
	WHERE 
	    ca.id = $1;`, [categoryId]
    )
    const validatedReturned = await listReturnProductCategoty.validate(productsCategory.rows)
    return validatedReturned
}

export { productsCategoryService }