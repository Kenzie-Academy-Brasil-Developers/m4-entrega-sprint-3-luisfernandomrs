import * as yup from "yup"

const createProductSerializer = yup.object().shape({
    name: yup.string().max(200).required(),
    price: yup.number().positive().min(1).max(8).required(),
    category_id: yup.number
})

const returnedProductSerializer = yup.object().shape({
    id: yup.number,
    name: yup.string,
    price: yup.number,
    category_id: yup.number
})

const listAllProductsSerializer = yup.array(returnedProductSerializer)



export { createProductSerializer, returnedProductSerializer, listAllProductsSerializer }