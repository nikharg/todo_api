const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;
app.use(express.json());

const todoRoutes = require("./routes/todoRoutes");

app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

const dbConnect = require("./config/databse");

dbConnect();

app.get("/", (req, res) => {
  res.send("This is homepage");
});
