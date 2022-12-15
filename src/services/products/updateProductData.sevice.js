import { database } from "../../database"

const updateProductDataSevice = async (body, productId) => {
    let query = `UPDATE products SET `
    const keys = Object.keys(body)
    const values = Object.values(body)

    keys.forEach((key, index) => {
        query += `${key} = \$${index += 1}, `
    })

    query = query.slice(0, -2)

    query += ` WHERE id = \$${keys.length += 1} RETURNING*;`

    const queryResponse = await database.query(
        query,
        [...values, productId]
    )


    return queryResponse.rows[0]

}

export { updateProductDataSevice }