import AppError from "../errors/appError";

const dealWithAppError = (error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json(error.message);
  }

  return response.status(500).json({ message: "internal server error" });
};

export default dealWithAppError;
