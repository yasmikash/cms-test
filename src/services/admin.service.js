const WorkshopNoticeModel = require("../models/workshop-notice.model");
const ResearchNoticeModel = require("../models/research-notice.model");

module.exports = class AdminService {
  getStatistics = async () => {
    const workshopNotices = await WorkshopNoticeModel.count();
    const approvedWorkshopNotices = await WorkshopNoticeModel.count({
      status: "APPROVED",
    });
    const researchNotices = await ResearchNoticeModel.count();
    const approvedResearchNotices = await ResearchNoticeModel.count({
      status: "APPROVED",
    });
    return {
      workshopNotices,
      approvedWorkshopNotices,
      researchNotices,
      approvedResearchNotices,
    };
  };
};
