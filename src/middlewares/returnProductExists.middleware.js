
import { database } from "../database";
import { AppError } from "../errors/appError";

const returnProductExistsMiddleware = async (request, response, next) => {
    const productId = request.params.id
    try {


        const productExists = await database.query(
            `
                    SELECT 
                        *
                        FROM
                            products
                        WHERE
                            id = $1;`,
            [productId]
        );
        if (productExists.rowCount === 0) {
            throw new AppError("category not found", 404);
        }

        next()
    } catch (error) {

        throw new AppError(error.message, 404);
    }

}

export { returnProductExistsMiddleware }