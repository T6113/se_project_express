const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");

const app = express();
const { PORT = 3001 } = process.env;

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.warn("Connected to MongoDB");
  })
  .catch(console.error);

app.use(express.json());

// Temporary middleware to set a default user ID for all requests

app.use((req, res, next) => {
  req.user = {
    _id: "688bb51a9b017e969df3565c", // Replace with a real user ID from your database if needed
  };
  next();
});

app.use("/", mainRouter);

app.listen(PORT, () => {
  console.warn(`Server is running on port ${PORT}`);
});
