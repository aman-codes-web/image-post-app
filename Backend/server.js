const path = require("path");

require("dotenv").config({ path: path.join(__dirname, ".env") });

const app = require("./src/app");
const connetDb = require("./src/db/db")

async function startServer() {
    try {
        await connetDb();

        app.listen(3000, () => {
            console.log("Server is running on port 3000")
        })
    } catch (error) {
        console.error("Failed to start server:", error.message)
        process.exit(1)
    }
}

startServer()
