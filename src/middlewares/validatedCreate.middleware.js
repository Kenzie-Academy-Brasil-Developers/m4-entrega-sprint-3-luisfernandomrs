import * as yup from "yup"
const validateDataMiddleware = (schema) => async (request, response, next) => {
    try {
        const validated = await schema.validate(request.body, {
            abortEarly: false,
            stripUnknown: true,
        });
        request.validatedBody = validated;
        next()
    } catch (error) {

        return response.status(400).json({ message: error.message });
    }
};

export { validateDataMiddleware };
