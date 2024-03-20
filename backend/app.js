const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./utils/config");
const itemRouter = require("./routes/itemRoutes");
const categoryRouter = require("./routes/categoryRoutes");

const app = express();

const connectToDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    });
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

connectToDB();

app.use(cors());
app.use(express.json());
app.use("/api/items", itemRouter);
app.use("/api/categories", categoryRouter);
app.use(express.static(path.join(__dirname, "dist")));

module.exports = app;
