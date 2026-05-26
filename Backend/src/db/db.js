const mongoose = require('mongoose')
async function connetDb() {
if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL is missing from .env")
}
    
await mongoose.connect(process.env.MONGO_URL)

console.log("Connected to Db ")

}

module.exports =connetDb
