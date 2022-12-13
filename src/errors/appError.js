class AppError extends Error {
  constructor(message, statusCode = 400) {
    super();
    this.message = { message };
    this.statusCode = statusCode;
  }
}
const dealWithAppError = (error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json(error.message);
  }
  //console.error(error)
  return response.status(500).json({ message: "internal server error" });
};



export { AppError, dealWithAppError };
