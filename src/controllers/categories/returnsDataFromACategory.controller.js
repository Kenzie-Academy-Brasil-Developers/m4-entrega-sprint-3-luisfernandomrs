import { returnsDataFromACategoryService } from "../../services/categories";

const returnsDataFromACategoryController = async (request, response) => {
  const idCategory = request.params.id;
  const data = await returnsDataFromACategoryService(idCategory);
  return response.json(data);
};

export default returnsDataFromACategoryController;
