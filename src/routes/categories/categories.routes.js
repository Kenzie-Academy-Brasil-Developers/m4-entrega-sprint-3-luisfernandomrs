import { Router } from "express";
import {
    createCategoriesController,
    deleteCategoryFromDataController,
    listAllsCategoriesController,
    returnsDataFromACategoryController,
} from "../../controllers/categories";

import { updatedCategoryDataController } from "../../controllers/categories/updatedCategoryData.controller";
import { validateDataMiddleware } from "../../middlewares/validatedCreate.middleware";

import { createCategoriesSerializer } from "../../serializers/categories";

const categoriesRoutes = Router();

categoriesRoutes.post(
    "",
    validateDataMiddleware(createCategoriesSerializer),
    createCategoriesController
);
categoriesRoutes.get("", listAllsCategoriesController);
categoriesRoutes.get("/:id", returnsDataFromACategoryController);
categoriesRoutes.patch("/:id", updatedCategoryDataController);
categoriesRoutes.delete("/:id", deleteCategoryFromDataController);
export default categoriesRoutes;
