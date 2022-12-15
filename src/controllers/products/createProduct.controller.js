import { createProductService } from "../../services/products";

const createProductController = async (request, response) => {
  // const body = request.validatedBody;
  const data = await createProductService(request.body);
  return response.status(201).json(data);
};

export { createProductController };
