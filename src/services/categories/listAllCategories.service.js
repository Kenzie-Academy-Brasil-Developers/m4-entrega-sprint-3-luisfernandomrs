import { database } from "../../database";
import { listCategoriesSerializer } from "../../serializers/categories";

const listAllCategoriesService = async () => {

  const queryResponse = await database.query(`
        SELECT 
            *
            FROM 
                categories;
        `);


  const validatedCategories = await listCategoriesSerializer.validate(queryResponse.rows);

  return validatedCategories

};

export { listAllCategoriesService }
