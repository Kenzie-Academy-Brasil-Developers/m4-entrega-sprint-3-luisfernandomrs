import { updatedCategoryDataService } from "../../services/categories";

const updatedCategoryDataController = async (request, response) => {
  const { name } = request.validatedBody
  const { id } = request.params
  const data = await updatedCategoryDataService(name, id);
  return response.status(200).json(data);
};

export { updatedCategoryDataController };
