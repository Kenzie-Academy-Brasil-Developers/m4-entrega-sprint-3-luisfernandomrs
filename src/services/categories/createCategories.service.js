
import AppError from "../../errors/appError";
import { database } from "../../database";
import { returnedCategoriesSerializer } from "../../serializers/categories";

const createCategoriesService = async (body) => {

  const categoryExists = await database.query(
    ` SELECT 
            *
            FROM
                categories
            WHERE
                "name" = ($1);`, [body.name]
  );
  if (categoryExists.rowCount > 0) {
    throw new AppError("category already exists", 409);
  }

  const queryResponse = await database.query(
    `       INSERT INTO
                categories("name")
            VALUES
                ($1)
            RETURNING *;`, [body.name]
  );

  const returnedCategories = await returnedCategoriesSerializer.validate(
    queryResponse.rows[0],
    {
      stripUnknown: true,
    }
  );

  return returnedCategories;
};

export { createCategoriesService };
