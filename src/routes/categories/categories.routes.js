import { Router } from "express";
import {
    createCategoriesController,
    deleteCategoryFromDataController,
    listAllsCategoriesController,
    returnsDataFromACategoryController,
} from "../../controllers/categories";

import { updatedCategoryDataController } from "../../controllers/categories/updatedCategoryData.controller";
import { categoryExistsMiddleware } from "../../middlewares/categoryExists.middleware";
import { returnCategoryExistsMiddleware } from "../../middlewares/returnCategoryExists.middleware";
import { validateDataMiddleware } from "../../middlewares/validatedCreate.middleware";

import { createCategoriesSerializer } from "../../serializers/categories";

const categoriesRoutes = Router();

categoriesRoutes.post("", categoryExistsMiddleware, createCategoriesController);
categoriesRoutes.get("", listAllsCategoriesController);
categoriesRoutes.get("/:id", returnCategoryExistsMiddleware, returnsDataFromACategoryController);
categoriesRoutes.patch("/:id", returnCategoryExistsMiddleware, updatedCategoryDataController);
categoriesRoutes.delete("/:id", returnCategoryExistsMiddleware, deleteCategoryFromDataController);
export default categoriesRoutes;
