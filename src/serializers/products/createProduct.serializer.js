import * as yup from "yup"

const createProductSerializer = yup.object().shape({
    name: yup.string().max(200).required(),
    price: yup.number().required(),
    category_id: yup.number()
})

const returnedProductSerializer = yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    price: yup.string(),
    category_id: yup.number().nullable()
})
const updateProductSerializer = yup.object().shape({
    name: yup.string().max(200).notRequired(),
    price: yup.string().notRequired(),
})

const ReturnProductCategoty = yup.object().shape({
    name: yup.string(),
    price: yup.string(),
    category: yup.string()
})

const listProductsSerializer = yup.array(returnedProductSerializer)
const listReturnProductCategoty = yup.array(ReturnProductCategoty)


export { createProductSerializer, returnedProductSerializer, listProductsSerializer, updateProductSerializer, listReturnProductCategoty }