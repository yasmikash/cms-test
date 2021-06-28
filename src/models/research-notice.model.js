const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ObjectId } = mongoose.Types;

const ResearchSchema = new Schema({
  title: String,
  description: String,
  researchFile: String,
  topicInterests: [ObjectId],
  customTopicInterests: [String],
  pdf: String,
  authors: [String],
  status: {
    type: String,
    default: "PENDING_REVIEW",
  },
  createdDate: Date,
  user: ObjectId,
});

module.exports = mongoose.model("Research", ResearchSchema);
