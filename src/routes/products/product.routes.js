import { Router } from "express";
import { createProductController, deleteProductController, listAllProductsController, listProductByIdController, productsCategoryController, updateProductDataController } from "../../controllers/products";
import { productExistsMiddleware } from "../../middlewares/productExists.middleware";
import { validateDataMiddleware } from "../../middlewares/validatedCreate.middleware";
import { createProductSerializer } from "../../serializers/products/createProduct.serializer";

const productsRoutes = Router()
// validateDataMiddleware(createProductSerializer)
productsRoutes.post("", createProductController)
productsRoutes.get("", listAllProductsController)
productsRoutes.get("/:id", listProductByIdController)
productsRoutes.patch("/:id", productExistsMiddleware, updateProductDataController)
productsRoutes.delete("/:id", productExistsMiddleware, deleteProductController)
productsRoutes.get("/category/:id", productsCategoryController)


export default productsRoutes