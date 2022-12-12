import { listAllCategoriesService } from "../../services/categories";

const listAllsCategoriesController = async (request, response) => {
  const data = await listAllCategoriesService();
  return response.status(200).json(data);
};

export { listAllsCategoriesController };
