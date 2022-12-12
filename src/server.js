import { startDatabase } from "./database";
import app from "./app";


app.listen(3000, async () => {
    await startDatabase();
    console.log("Server running");
});
