import { listAllProductsService } from "../../services/products"

const listAllProductsController = async (request, response) => {
    const data = await listAllProductsService()
    return response.status(200).json(data)
}

export { listAllProductsController }