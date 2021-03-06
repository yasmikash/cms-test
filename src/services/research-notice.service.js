const ResearchModel = require("../models/research.model");
const ResearchNoticeModel = require("../models/research-notice.model");
const HTTPException = require("../exceptions/HTTPException");
module.exports = class ResearchNoticeService {
  createResearchNotice = async (userId, researchId) => {
    const research = JSON.parse(
      JSON.stringify(await ResearchModel.findById(researchId, "-_id"))
    );
    const researchNotice = new ResearchNoticeModel({
      ...JSON.parse(JSON.stringify(research)),
      createdDate: new Date(),
      user: userId,
    });
    if (!research)
      throw HTTPException.createValidationError("No such research");
    research.status = "NOTICE_CREATED";
    await ResearchModel.findByIdAndUpdate(researchId, research);
    const createdNotice = await researchNotice.save();
    return createdNotice;
  };

  getResearchNotices = async () => {
    const notices = await ResearchNoticeModel.find();
    return notices;
  };

  getResearchNotice = async (researchNoticeId) => {
    const notice = await ResearchNoticeModel.findById(researchNoticeId);
    return notice;
  };

  approveResearchNotice = async (adminId, researchNoticeId) => {
    const researchNotice = await ResearchNoticeModel.findById(researchNoticeId);
    researchNotice.status = "APPROVED";
    researchNotice.admin = adminId;
    const updatedNotice = await researchNotice.save();
    return updatedNotice;
  };

  deleteResearchNotice = async (researchNoticeId) => {
    const deletedNotice = await ResearchNoticeModel.findByIdAndDelete(
      researchNoticeId
    );
    return deletedNotice;
  };
};
