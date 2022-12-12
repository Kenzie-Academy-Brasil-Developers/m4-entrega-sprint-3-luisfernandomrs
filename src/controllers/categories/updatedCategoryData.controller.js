import { updatedCategoryDataService } from "../../services/categories";

const updatedCategoryDataController = async (request, response) => {
  const updateData = request.body;
  const categoryUpdatedId = request.params.id;
  const data = await updatedCategoryDataService(updateData, categoryUpdatedId);
  return response.status(200).json(data);
};

export { updatedCategoryDataController };
