import * as yup from "yup"
import { AppError } from "../errors/appError";
const validateDataMiddleware = (schema) => async (request, response, next) => {

    try {
        const validated = await schema.validate(request.body, {
            abortEarly: false,
            stripUnknown: true,
        });

        request.validatedBody = validated;
        next()
    } catch (error) {
        // console.log(error)
        // return response.status(400).json({ message: error.message });
        throw new AppError("erro no try catch", 501)
    }
};

export { validateDataMiddleware };