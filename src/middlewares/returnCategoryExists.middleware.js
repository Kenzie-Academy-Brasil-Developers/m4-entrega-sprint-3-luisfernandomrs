
import { database } from "../database";
import { AppError } from "../errors/appError";

const returnCategoryExistsMiddleware = async (request, response, next) => {
    const categoryId = request.params.id

    // console.log(categoryId)

    // if (!typeof categoryId === "number") {
    //     throw new AppError("Invalid Id ", 400)
    // }


    // const categoryExists = await database.query(
    //     `
    //             SELECT 
    //                 *
    //                 FROM
    //                     categories
    //                 WHERE
    //                     id = $1;`,
    //     [categoryId]
    // );
    // console.log(categoryExists.rowCount)
    // if (!categoryExists.rowCount > 0) {
    //     throw new AppError("category not found", 404);
    // }

    // return next()

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
        console.log(categoryExists.rows[0])
        if (categoryExists.rowCount === 0) {
            throw new AppError("category not found", 404);
        }

        next()
    } catch (error) {
        console.log(error.message)
        throw new AppError(error.message, 404);
    }

}

export { returnCategoryExistsMiddleware }