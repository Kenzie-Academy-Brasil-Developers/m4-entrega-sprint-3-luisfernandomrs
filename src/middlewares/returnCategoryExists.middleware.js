
import { database } from "../database";
import { AppError } from "../errors/appError";

const returnCategoryExistsMiddleware = async (request, response, next) => {
    const categoryId = request.params.id
    try {


        const categoryExists = await database.query(
            `
                    SELECT 
                        *
                        FROM
                            categories
                        WHERE
                            id = $1;`,
            [categoryId]
        );

        if (categoryExists.rowCount === 0) {
            throw new AppError("category not found", 404);
        }

        next()
    } catch (error) {
        throw new AppError(error.message, 404);
    }

}

export { returnCategoryExistsMiddleware }