const HTTPException = require("../exceptions/HTTPException");
const WorkshopModel = require("../models/workshop.model");

module.exports = class ResearchService {
  createWorkshop = async (data) => {
    const workshop = new WorkshopModel({
      ...data,
      user: data.user.id,
      createdDate: new Date(),
    });
    const workshopCreated = await workshop.save();
    return workshopCreated;
  };
};
