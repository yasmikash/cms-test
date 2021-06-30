const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ObjectId } = mongoose.Types;

const KeyNoteSchema = new Schema({
  name: String,
  workPlace: String,
  description: String,
  imageFile: String,
  status: {
    type: String,
    default: "PENDING_REVIEW",
  },
  createdDate: Date,
  user: ObjectId,
});

module.exports = mongoose.model("KeyNotes", KeyNoteSchema);
