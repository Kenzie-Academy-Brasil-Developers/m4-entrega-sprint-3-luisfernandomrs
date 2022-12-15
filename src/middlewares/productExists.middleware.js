import { database } from "../database"
import { AppError } from "../errors/appError"

const productExistsMiddleware = async (request, response, next) => {
    const productId = request.params.id

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

    next()

}

export { productExistsMiddleware }