const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./route/routee");
const MONGO_URI =
  "mongodb+srv://RajaDhurai:wIPHhwXDT1u6Zpep@cluster0.fgvpdxc.mongodb.net/Movies";

const DB_URI = MONGO_URI;
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use("/api/v1", routes);
// mongoose.connect('mongodb://127.0.0.1:27017/favouritesDB');
// const DB_URI = process.env.MONGODB_SERVER;
mongoose.connect(DB_URI);
mongoose.connection
  .once("open", () => {
    console.log("Connected to DB");
  })
  .on("error", (err) => {
    console.log(err);
  });
let port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
module.exports = app;
