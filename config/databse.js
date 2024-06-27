const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.Database_URL, {
      useNewUrlParser: true,
      UseUnifiedTopology: true,
    })
    .then(() => console.log("DB connected successfully"))
    .catch((e) => {
      console.log("DB connection failed");
      console.error(e.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
