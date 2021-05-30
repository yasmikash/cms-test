const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  email: String,
  firstName: String,
  lastName: String,
  contactNo: String,
  type: String,
  password: String,
  createdDate: Date,
});

module.exports = mongoose.model("User", UserSchema);
