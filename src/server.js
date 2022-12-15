import { startDatabase } from "./database";
import app from "./app";


export default app.listen(3000, async () => {
    await startDatabase();
    console.log("Server running");
});

