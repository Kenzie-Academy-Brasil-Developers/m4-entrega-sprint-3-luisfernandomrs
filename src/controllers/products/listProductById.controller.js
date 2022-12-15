import { listProductByIdService } from "../../services/products"

const listProductByIdController = async (request, response) => {
    const productId = request.params.id
    const data = await listProductByIdService(productId)
    return response.status(200).json(data)
}

export { listProductByIdController }