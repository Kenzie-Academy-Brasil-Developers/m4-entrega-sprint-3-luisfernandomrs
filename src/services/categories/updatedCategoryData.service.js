import { database } from "../../database";
import { AppError } from "../../errors/appError";
import { returnedCategoriesSerializer } from "../../serializers/categories";

const updatedCategoryDataService = async (name, id) => {

  const categoryExists = await database.query(
    `
              UPDATE 
                  categories
                  SET
                  name = $1
                  WHERE
                    id = $2
                    RETURNING *;`,
    [name, id]
  );

  const returnedCAtegory = await returnedCategoriesSerializer.validate(categoryExists.rows[0])


  return returnedCAtegory

};

export { updatedCategoryDataService };
