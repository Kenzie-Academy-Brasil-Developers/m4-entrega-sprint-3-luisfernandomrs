import { updatedCategoryDataService } from "../../services/categories";

const updatedCategoryDataController = async (request, response) => {
  const { id } = request.params
  const data = await updatedCategoryDataService(request.body.name, id);
  return response.status(200).json(data);
};

export { updatedCategoryDataController };
