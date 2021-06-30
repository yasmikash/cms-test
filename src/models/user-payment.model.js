const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ObjectId } = mongoose.Types;

const UserPaymentSchema = new Schema({
  receiptId: String,
  firstname: String,
  paidFor: String,
  lastname: String,
  amount: Number,
  country: String,
  cardname: String,
  cardNumber: Number,
  expDate: Date,
  cvv: Number,
  status: String,
  paidDate: Date,
  user: ObjectId,
  researchId: ObjectId,
});

module.exports = mongoose.model("UserPayment", UserPaymentSchema);
