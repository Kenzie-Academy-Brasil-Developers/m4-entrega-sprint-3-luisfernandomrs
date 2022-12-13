import { database } from "../../database";
import { AppError } from "../../errors/appError";

const deleteCategoryFromDataService = async (categoryDeleteId) => {
  const categoryExists = await database.query(
    `
                SELECT 
                    *
                    FROM
                        categories
                    WHERE
                        id = $1;`,
    [categoryDeleteId]
  );
  if (!categoryExists.rowCount > 0) {
    throw new AppError("category not found", 404);
  }

  const queryResponse = await database.query(
    `
        DELETE
            FROM 
                categories
            WHERE
                id = $1
            RETURNING * ;`,
    [categoryDeleteId]
  );

  return queryResponse;
};

export { deleteCategoryFromDataService };
