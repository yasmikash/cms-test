const v4 = require("uuid").v4;

const HTTPException = require("../exceptions/HTTPException");
const WorkshopModel = require("../models/workshop.model");
const config = require("../util/config");

module.exports = class WorkshopService {
  createWorkshop = async (data, userId, files) => {
    if (!files)
      throw HTTPException.createValidationError(
        "workshop proposal file should be uploaded"
      );
    const flyerFile = `${v4()}.pdf`;
    await files.flyerFile.mv(`${config.uploadPath}/${flyerFile}`);

    const workshop = new WorkshopModel({
      ...data,
      user: userId,
      flyerFile,
      createdDate: new Date(),
    });
    const workshopCreated = await workshop.save();
    return workshopCreated;
  };

  getWorkshop = async (userId) => {
    const workshop = await WorkshopModel.find({ user: userId });
    return workshop;
  };

  UpdateWorkshop = async (data, id, files) => {
    if (!files)
      throw HTTPException.createValidationError(
        "workshop proposal file should be uploaded"
      );
    const flyerFile = `${v4()}.pdf`;
    await files.flyerFile.mv(`${config.uploadPath}/${flyerFile}`);

    await WorkshopModel.findByIdAndUpdate(id, {
      ...data,
      flyerFile,
      createdDate: new Date(),
    });

    const workshop = await WorkshopModel.find({ _id: id });
    return workshop;
  };

  getWorkshopById = async (workshopId) => {
    const workshop = await WorkshopModel.find({ _id: workshopId });
    return workshop;
  };

  deleteWorkshopById = async (workshopId) => {
    const workshop = await WorkshopModel.findByIdAndDelete(workshopId);
    return workshop;
  };
};
