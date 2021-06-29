const ResearchNoticeService = require("../services/research-notice.service");

module.exports = class ResearchNoticeController {
  constructor() {
    this.researchNoticeService = new ResearchNoticeService();
  }
  createResearchNotice = async (req, res, next) => {
    try {
      const research = await this.researchNoticeService.createResearchNotice(
        "60dabfd29fd86b413452a3b7", //TODO
        req.params.researchId
      );
      res.json(research);
    } catch (error) {
      next(error);
    }
  };

  approveResearchNotice = async (req, res, next) => {
    try {
      const research = await this.researchNoticeService.approveResearchNotice(
        "60dabfd29fd86b413452a3b6", //TODO
        req.params.researchId
      );
      res.json(research);
    } catch (error) {
      next(error);
    }
  };
};
