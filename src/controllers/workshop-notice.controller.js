const WorkshopNoticeService = require("../services/workshop-notice.service");

module.exports = class ResearchNoticeController {
  constructor() {
    this.workshopNoticeService = new WorkshopNoticeService();
  }
  createWorkshopNotice = async (req, res, next) => {
    try {
      const research = await this.workshopNoticeService.createResearchNotice(
        "60dabfd29fd86b413452a3b7", //TODO
        req.params.researchId
      );
      res.json(research);
    } catch (error) {
      next(error);
    }
  };

  approveWorkshopNotice = async (req, res, next) => {
    try {
      const research = await this.workshopNoticeService.approveResearchNotice(
        "60dabfd29fd86b413452a3b6", //TODO
        req.params.researchId
      );
      res.json(research);
    } catch (error) {
      next(error);
    }
  };
};
