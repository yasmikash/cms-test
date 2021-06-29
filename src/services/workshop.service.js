const WorkshopModel = require("../models/workshop.model");
module.exports = class ResearchService {
  createWorkshop = async (data, files) => {
    if (!files)
      throw HTTPException.createValidationError(
        "Flyer file should be uploaded"
      );
    const researchFile = `${v4()}.jpg`;
    await files.researchFile.mv(`${config.uploadPath}/${researchFile}`);
    const workshop = new WorkshopModel({
      ...data,
      user: data.user.id,
      createdDate: new Date(),
    });
    const workshopCreated = await workshop.save();
    return workshopCreated;
  };
};
