const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");
const notFound = require("./middleware/notFound");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

app.use(notFound);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running.... : http://localhost:${PORT}`);
});