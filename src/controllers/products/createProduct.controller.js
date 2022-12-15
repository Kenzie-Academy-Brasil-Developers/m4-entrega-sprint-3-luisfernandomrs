import { createProductService } from "../../services/products";

const createProductController = async (request, response) => {
  const data = await createProductService(request.body);
  return response.status(201).json(data);
};

export { createProductController };
