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
  if (!categoryExists > 0) {
    throw new AppError("category not found", 404)
  }
  const returnedCAtegory = await returnedCategoriesSerializer.validate(categoryExists.rows[0])


  return returnedCAtegory



  // const categoryExists = await database.query(
  //   `
  //           SELECT 
  //               *
  //               FROM
  //                   categories
  //               WHERE
  //                   id = $1;`,
  //   [categoryUpdatedId]
  // );
  // if (!categoryExists.rowCount > 0) {
  //   throw new AppError("category not found", 404);
  // }





  // let query = `UPDATE categories SET `;
  // console.log(query)
  // const keys = object.keys(updateData);
  // console.log(keys)
  // const values = object.values(updateData);
  // console.log(values)
  // keys.forEach((key, index) => {
  //   query += `${key} = \$${(index += 1)}, `;
  // });

  // query = query.slice(0, -2);

  // query += `WHERE id = \$${(keys.length += 1)} RETURNING * ;`;

  // const queryResponse = await database.query(query, [...values, categoryUpdatedId]);
  // console.log(queryResponse)
  // const returnedCategories = await returnedCategoriesSerializer.validate(
  //   queryResponse.rows[0]
  // );

};

export { updatedCategoryDataService };
