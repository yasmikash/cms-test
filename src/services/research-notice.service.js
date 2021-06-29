const ResearchModel = require("../models/research.model");
const ResearchNoticeModel = require("../models/research-notice.model");

module.exports = class ResearchNoticeService {
  createResearchNotice = async (userId, researchId) => {
    const research = await ResearchModel.find(researchId);
    const researchNotice = new ResearchNoticeModel({
      ...research,
      createdDate: new Date(),
      user: userId,
    });
    const createdNotice = await researchNotice.save();
    return createdNotice;
  };

  approveResearchNotice = async (adminId, researchNoticeId) => {
    const researchNotice = await ResearchNoticeModel.find(researchNoticeId);
    researchNotice.status = "APPROVED";
    researchNotice.admin = adminId;
    const updatedNotice = await researchNotice.save();
    return updatedNotice;
  };
};
