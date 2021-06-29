const WorkshopModel = require("../models/workshop.model");
const WorkshopNoticeModel = require("../models/workshop-notice.model");
module.exports = class ResearchNoticeService {
  createWorkshopNotice = async (userId, workshopId) => {
    const workshop = await WorkshopModel.findById(workshopId, "-_id");
    const workshopNotice = new WorkshopNotice({
      ...JSON.parse(JSON.stringify(workshop)),
      createdDate: new Date(),
      user: userId,
    });
    const createdNotice = await workshopNotice.save();
    return createdNotice;
  };

  getWorkshopNotices = async () => {
    const notices = await WorkshopModel.find();
    return notices;
  };

  approveWorkshopNotice = async (adminId, workshopNoticeId) => {
    const workshopNotice = await WorkshopNoticeModel.findById(workshopNoticeId);
    workshopNotice.status = "APPROVED";
    workshopNotice.admin = adminId;
    const updatedNotice = await workshopNotice.save();
    return updatedNotice;
  };
};
