import { database } from "../../database";
import { returnedCategoriesSerializer } from "../../serializers/categories";

const returnsDataFromACategoryService = async (id) => {
  const queryResponse = await database.query(
    `

        SELECT 
            *
            FROM 
                categories
                WHERE
                    id = $1;`, [id]
  );
  const returnedCategory = await returnedCategoriesSerializer.validate(
    queryResponse.rows[0],
    {
      stripUnknown: true,
    }
  );

  return returnedCategory;
};

export { returnsDataFromACategoryService };
