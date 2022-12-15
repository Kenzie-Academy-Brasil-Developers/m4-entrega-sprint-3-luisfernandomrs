import * as yup from "yup"
import { AppError } from "../errors/appError";
const validateDataMiddleware = (schema) => async (request, response, next) => {

    try {
        const validated = await schema.validate(request.body, {
            abortEarly: false,
            stripUnknown: true,
        });

        request.body = validated;
        next()
    } catch (error) {

        throw new AppError({ message: error.message }, 400)
    }
};

export { validateDataMiddleware };