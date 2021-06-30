const v4 = require("uuid").v4;

const HTTPException = require("../exceptions/HTTPException");
const KeynoteModel = require("../models/keynote.model");
const config = require("../util/config");

module.exports = class KeynoteService {
  createKeynote = async (data, userId, files) => {
    if (!files)
      throw HTTPException.createValidationError("Image should be uploaded");
    const imageFile = `${v4()}.jpeg`;
    await files.imageFile.mv(`${config.imageUploadPath}/${imageFile}`);

    const keynote = new KeynoteModel({
      ...data,
      user: userId,
      imageFile,
      createdDate: new Date(),
    });
    const keynoteCreated = await keynote.save();
    return keynoteCreated;
  };

  getKeynote = async (_id) => {
    const keynote = await KeynoteModel.find({ _id: _id });
    return keynote;
  };

  getAllKeynotes = async () => {
    const keynotes = await KeynoteModel.find();
    return keynotes;
  };
};
