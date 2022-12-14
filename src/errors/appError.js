class AppError extends Error {
  constructor(message, statusCode = 400) {
    super();
    this.message = { message };
    this.statusCode = statusCode;
  }
}
const dealWithAppError = (error, request, response) => {
  console.log("oisabhsagdhsg")
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ mesage: error.message });
  }
  console.log(error)
  return response.status(500).json({ message: "internal server error" });
};



export { AppError, dealWithAppError };
