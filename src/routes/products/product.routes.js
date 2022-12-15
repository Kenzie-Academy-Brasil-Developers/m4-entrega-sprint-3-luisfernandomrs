import { Router } from "express";
import { createProductController, deleteProductController, listAllProductsController, listProductByIdController, productsCategoryController, updateProductDataController } from "../../controllers/products";
import { productExistsMiddleware } from "../../middlewares/productExists.middleware";
import { returnProductExistsMiddleware } from "../../middlewares/returnProductExists.middleware";
import { validateDataMiddleware } from "../../middlewares/validatedCreate.middleware";
import { createProductSerializer } from "../../serializers/products/createProduct.serializer";

const productsRoutes = Router()

productsRoutes.post("", validateDataMiddleware(createProductSerializer), createProductController)
productsRoutes.get("", listAllProductsController)
productsRoutes.get("/:id", returnProductExistsMiddleware, listProductByIdController)
productsRoutes.patch("/:id", returnProductExistsMiddleware, updateProductDataController)
productsRoutes.delete("/:id", returnProductExistsMiddleware, deleteProductController)
productsRoutes.get("/category/:id", productsCategoryController)


export default productsRoutes