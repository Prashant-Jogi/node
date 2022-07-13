const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentsSchema = new Schema(
  {
    name: {
      type: String,
    },
    rollno: {
      type: Number,
    },
    std: {
      type: Number,
    },
  },
  {
    collection: "student",
  }
);

module.exports = mongoose.model("student", studentsSchema);
