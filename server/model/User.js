const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  rating: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
