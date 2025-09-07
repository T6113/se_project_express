require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { errors } = require("celebrate");

const mainRouter = require("./routes/index");
const { login, createUser } = require("./controllers/users");
const { getItems } = require("./controllers/clothingItems");
const auth = require("./middlewares/auth");
const { requestLogger, errorLogger } = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
const { NotFoundError } = require("./utils/errors");

const app = express();
const { PORT = 3001 } = process.env;

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.warn("Connected to MongoDB");
  })
  .catch(console.error);

app.use(express.json());
app.use(cors());

// Request logging
app.use(requestLogger);

// Crash test route for server recovery testing
app.get("/crash-test", (req, res, next) => {
  setTimeout(() => {
    throw new Error("Server will crash now");
  }, 0);
});

// Public routes
app.post("/signin", login);
app.post("/signup", createUser);
app.get("/items", getItems); // Public GET /items

// Authorization middleware for all other routes
app.use(auth);

app.use("/", mainRouter);

// Handle non-existent routes
app.use((req, res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

// Error logging
app.use(errorLogger);

// Celebrate error handling
app.use(errors());

// Centralized error handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.warn(`Server is running on port ${PORT}`);
});
