import { database } from "../../database"
import { AppError } from "../../errors/appError"
import { returnedProductSerializer } from "../../serializers/products/createProduct.serializer"

const listProductByIdService = async (productId) => {
    const productExists = await database.query(`
        SELECT
            *
            FROM 
                products
            WHERE 
                id = $1;`, [productId]
    )

    if (!productExists.rowCount > 0) {
        throw new AppError("Product not found", 404)
    }

    // console.log(productExists.rows[0])
    const productReturned = await returnedProductSerializer.validate(productExists.rows[0])

    // console.log(productReturned)
    // const teste = "teste"
    return productReturned

}
export { listProductByIdService }