const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT||3001;
const MONGODB_URI = process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URI
    : "mongodb://localhost:27017"; 

module.exports = {
  PORT,
  MONGODB_URI,
};

