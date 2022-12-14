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
        console.log(error)
        throw new AppError({ message: error.message }, 400)
    }
};

export { validateDataMiddleware };