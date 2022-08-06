const mongoose = require("mongoose");
const logger = require("../logger");
require("dotenv").config();

activeMongoose().catch((err) =>
  logger.error(`Error when connecting to DB : ${err}`)
); //Error Catching

//* Write All functions within this function
async function activeMongoose() {
  await mongoose.connect(
    `mongodb://127.0.0.1:27017/${process.env.DATABASE_NAME}`
  );

  logger.info(`Connection to DB successful!`);
}
