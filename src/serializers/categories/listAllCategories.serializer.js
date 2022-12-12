import * as yup from "yup";
import { returnedCategoriesSerializer } from "./createCategories.serializer";


const listCategoriesSerializer = yup.array(returnedCategoriesSerializer);

export { listCategoriesSerializer };
