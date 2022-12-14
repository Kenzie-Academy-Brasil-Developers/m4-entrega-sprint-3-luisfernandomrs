import "express-async-errors";
import express from "express";
import { dealWithAppError } from "./errors/appError";
import categoriesRoutes from "./routes/categories/categories.routes";

import productsRoutes from "./routes/products/product.routes";

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);
app.use("/products", productsRoutes)
app.use(dealWithAppError);

export default app;
