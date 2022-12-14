import { database } from "../database";
import { AppError } from "../errors/appError";

const categoryExistsMiddleware = async (request, response, next) => {
    const categoryName = request.body.name
    const categoryExists = await database.query(
        ` SELECT 
            *
            FROM
                categories
            WHERE
                "name" = $1;`, [categoryName]
    );
    if (categoryExists.rowCount > 0) {
        throw new AppError("category already exists", 400);
    }

    return next()

    // try {
    //     const categoryName = request.body.name
    //     console.log(categoryName)
    //     const categoryExists = await database.query(
    //         ` SELECT 
    //         *
    //         FROM
    //             categories
    //         WHERE
    //             "name" = $1;`, [categoryName]
    //     );
    //     if (categoryExists.rowCount === 0) {
    //         return next()
    //     }


    // } catch (error) {
    //     throw new AppError("category already exists", 409);
    // }


}

export { categoryExistsMiddleware }