import { createProductService } from "../../services/products";

const createProductController = async (request, response) => {
  const body = request.validatedBody;
  const category_id = request.params.id
  const data = await createProductService(body, category_id);
  return response.status(201).json(data);
};

export { createProductController };
