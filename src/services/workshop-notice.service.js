const WorkshopModel = require("../models/workshop.model");
const WorkshopNoticeModel = require("../models/workshop-notice.model");
const HTTPException = require("../exceptions/HTTPException");
module.exports = class ResearchNoticeService {
  createWorkshopNotice = async (userId, workshopId) => {
    const workshop = await WorkshopModel.findById(workshopId, "-_id");
    const workshopNotice = new WorkshopNoticeModel({
      ...JSON.parse(JSON.stringify(workshop)),
      createdDate: new Date(),
      user: userId,
    });
    if (!workshop)
      throw HTTPException.createValidationError("No such workshop");
    workshop.status = "NOTICE_CREATED";
    await workshop.save();
    const createdNotice = await workshopNotice.save();
    return createdNotice;
  };

  getWorkshopNotices = async () => {
    const notices = await WorkshopNoticeModel.find();
    return notices;
  };

  getWorkshopNotice = async (workshopNoticeId) => {
    const notice = await WorkshopNoticeModel.findById(workshopNoticeId);
    return notice;
  };

  approveWorkshopNotice = async (adminId, workshopNoticeId) => {
    const workshopNotice = await WorkshopNoticeModel.findById(workshopNoticeId);
    workshopNotice.status = "APPROVED";
    workshopNotice.admin = adminId;
    const updatedNotice = await workshopNotice.save();
    return updatedNotice;
  };

  deleteWorkshopNotice = async (workshopNoticeId) => {
    const deletedNotice = await WorkshopNoticeModel.findByIdAndDelete(
      workshopNoticeId
    );
    return deletedNotice;
  };
};
