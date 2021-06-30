const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ObjectId } = mongoose.Types;

const WorkshopSchema = new Schema({
  title: String,
  description: String,
  flyerFile: String,
  persons: String,
  startDate: Date,
  startTime: String,
  endTime: String,
  status: {
    type: String,
    default: "PENDING_REVIEW",
  },
  reviewerDescription: String,
  createdDate: Date,
  user: ObjectId,
  admin: ObjectId,
});

module.exports = mongoose.model("Workshop", WorkshopSchema);
