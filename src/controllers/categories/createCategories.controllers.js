import { createCategoriesService } from "../../services/categories";

const createCategoriesController = async (request, response) => {
  const categoriesBody = request.validatedBody;

  const data = await createCategoriesService(categoriesBody);

  return response.status(201).json(data);
};

export { createCategoriesController };
