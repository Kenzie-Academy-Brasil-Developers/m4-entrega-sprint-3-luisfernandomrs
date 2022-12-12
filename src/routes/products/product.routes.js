import { Router } from "express";
import { createProductController } from "../../controllers/products";
import { validateDataMiddleware } from "../../middlewares/validatedCreate.middleware";
import { createProductSerializer } from "../../serializers/products/createProduct.serializer";

const productsRoutes = Router()

productsRoutes.post("", validateDataMiddleware(createProductSerializer), createProductController)



export default productsRoutes