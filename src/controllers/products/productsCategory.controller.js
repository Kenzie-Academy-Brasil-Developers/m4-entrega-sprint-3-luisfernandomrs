import { productsCategoryService } from "../../services/products"

const productsCategoryController = async (request, response) => {
    const categoryId = request.params.id
    const data = await productsCategoryService(categoryId)
    return response.status(200).json(data)
}

export { productsCategoryController }