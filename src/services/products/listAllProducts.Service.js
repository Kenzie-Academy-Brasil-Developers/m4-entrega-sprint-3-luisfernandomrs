
import { database } from "../../database"
import { AppError } from "../../errors/appError"
import { listProductsSerializer } from "../../serializers/products/createProduct.serializer"



const listAllProductsService = async () => {

    const queryResponse = await database.query(`
        SELECT
            *
            FROM 
                products;
        `);
    const validatedProducts = await listProductsSerializer.validate(queryResponse.rows, {
        stripUnknown: true
    })



    return validatedProducts

}

export { listAllProductsService }