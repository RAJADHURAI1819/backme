const mongoose = require("mongoose");
const insmovSchema = mongoose.Schema({
  _id: {
    type: String,
    require: true,
  },
  movie: {
    type: String,
    require: true,
  },
  year: {
    type: String,
    require: true,
  },
  Genre: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("insmovModel", insmovSchema, "Insert");
