const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mainRouter = require("./routes/index");
const { login, createUser } = require("./controllers/users");
const { getItems } = require("./controllers/clothingItems");
const auth = require("./middlewares/auth");


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

// Public routes
app.post("/signin", login);
app.post("/signup", createUser);
app.get("/items", getItems); // Public GET /items

// Authorization middleware for all other routes
app.use(auth);

app.use("/", mainRouter);

app.listen(PORT, () => {
  console.warn(`Server is running on port ${PORT}`);
});
