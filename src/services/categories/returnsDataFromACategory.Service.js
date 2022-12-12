import { database } from "../../database";
import AppError from "../../errors/appError";
import { returnedCategoriesSerializer } from "../../serializers/categories";

const returnsDataFromACategoryService = async (id) => {
  const categoryExists = await database.query(
    `
            SELECT 
                *
                FROM
                    categories
                WHERE
                    id = $1;`,
    [id]
  );
  if (!categoryExists.rowCount > 0) {
    throw new AppError("category not found", 404);
  }
  const queryResponse = await database.query(
    `

        SELECT 
            *
            FROM 
                categories
                WHERE
                    id = $1;`,
    [id]
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
