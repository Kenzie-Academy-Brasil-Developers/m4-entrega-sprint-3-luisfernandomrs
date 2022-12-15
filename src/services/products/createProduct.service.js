import { database } from "../../database";
import { AppError } from "../../errors/appError";
import { returnedProductSerializer } from "../../serializers/products/createProduct.serializer";

const createProductService = async (body) => {
    try {
        const queryResponse = await database.query(`
        INSERT INTO 
            products(name, price, category_id)
        VALUES 
           ( $1, $2, $3)
        RETURNING*;
        `, [body.name, body.price, body.category_id]
        )
        const returnedProduct = await returnedProductSerializer.validate(
            queryResponse.rows[0],
            {
                abortEarly: true,
                stripUnknown: false,
            }
        );
        return returnedProduct

    } catch (error) {
        throw new AppError(error, 404)
    }


};

export { createProductService }
