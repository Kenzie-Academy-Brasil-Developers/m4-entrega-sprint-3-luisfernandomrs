import database from "../../database";
import AppError from "../../errors/appError";
import { returnedCategoriesSerializer } from "../../serializers/categories";

const updatedCategoryDataService = async (updateData, categoryUpdatedId) => {
  const categoryExists = await database.query(
    `
            SELECT 
                *
                FROM
                    categories
                WHERE
                    id = $1;`,
    [categoryUpdatedId]
  );
  if (!categoryExists.rowCount > 0) {
    throw new AppError("category not found", 404);
  }

  let query = `UPDATE categories SET `;
  const keys = object.keys(updateData);
  const values = object.values(updateData);

  keys.forEach((key, index) => {
    query += `${key} = \$${(index += 1)}, `;
  });

  query = query.slice(0, -2);

  query += `WHERE id = \$${(keys.length += 1)} RETURNING * ;`;

  const queryResponse = await database.query(query, [
    ...values,
    categoryUpdatedId,
  ]);

  const returnedCategories = await returnedCategoriesSerializer.validate(
    queryResponse.rows[0]
  );

  return returnedCategories;
};

export { updatedCategoryDataService };
