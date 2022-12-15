import { updateProductDataSevice } from "../../services/products"

const updateProductDataController = async (request, response) => {
    const body = request.body
    const productId = request.params.id
    const data = await updateProductDataSevice(body, productId)
    return response.status(200).json(data)
}

export { updateProductDataController }