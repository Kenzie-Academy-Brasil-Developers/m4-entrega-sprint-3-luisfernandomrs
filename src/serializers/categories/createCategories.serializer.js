import * as yup from "yup";

const createCategoriesSerializer = yup.object().shape({
  name: yup.string().max(200).required()
});

const returnedCategoriesSerializer = yup.object().shape({
  id: yup.number(),
  name: yup.string(),
});

export { createCategoriesSerializer, returnedCategoriesSerializer };
