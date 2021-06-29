const WorkshopModel = require("../models/workshop.model");
const WorkshopNoticeModel = require("../models/workshop-notice.model");
module.exports = class ResearchNoticeService {
  createWorkshopNotice = async (userId, workshopId) => {
    const workshop = await WorkshopModel.find(workshopId);
    const workshopNotice = new WorkshopNotice({
      ...workshop,
      createdDate: new Date(),
      user: userId,
    });
    const createdNotice = await workshopNotice.save();
    return createdNotice;
  };

  approveWorkshopNotice = async (adminId, workshopNoticeId) => {
    const workshopNotice = await WorkshopNoticeModel.find(workshopNoticeId);
    workshopNotice.status = "APPROVED";
    workshopNotice.admin = adminId;
    const updatedNotice = await workshopNotice.save();
    return updatedNotice;
  };
};
