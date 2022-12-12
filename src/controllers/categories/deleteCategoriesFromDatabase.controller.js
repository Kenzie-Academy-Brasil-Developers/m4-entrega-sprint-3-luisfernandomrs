import { deleteCategoryFromDataService } from "../../services/categories";

const deleteCategoryFromDataController = async (request, response) => {
  const categoryDeleteId = request.params.id;
  const data = await deleteCategoryFromDataService(categoryDeleteId);
  return response.status(204).json(data);
};

export { deleteCategoryFromDataController };
