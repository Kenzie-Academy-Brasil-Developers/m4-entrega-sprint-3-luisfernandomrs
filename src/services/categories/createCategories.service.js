import { database } from "../../database";
import { returnedCategoriesSerializer } from "../../serializers/categories";

const createCategoriesService = async (body) => {
  const queryResponse = await database.query(
    `       INSERT INTO
                categories(name)
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

  return returnedCategories
};

export { createCategoriesService };
