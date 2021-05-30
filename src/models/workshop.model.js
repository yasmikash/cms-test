const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ObjectId } = mongoose.Types;

const WorkshopSchema = new Schema({
  title: String,
  description: String,
  flyer: String,
  persons: String,
  startDate: Date,
  starTime: Date,
  endTime: Date,
  status: {
    type: String,
    default: "PENDING_REVIEW",
  },
  reviewerDescription: String,
  createdDate: Date,
  user: ObjectId,
});

module.exports = mongoose.model("Workshop", WorkshopSchema);
