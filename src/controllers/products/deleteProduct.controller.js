import { deleteProductService } from "../../services/products"

const deleteProductController = async (request, response) => {
    const productId = request.params.id
    const data = await deleteProductService(productId)
    return response.status(204)
}

export { deleteProductController }