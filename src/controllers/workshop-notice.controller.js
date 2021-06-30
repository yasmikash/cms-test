const WorkshopNoticeService = require("../services/workshop-notice.service");

module.exports = class ResearchNoticeController {
  constructor() {
    this.workshopNoticeService = new WorkshopNoticeService();
  }
  createWorkshopNotice = async (req, res, next) => {
    try {
      const research = await this.workshopNoticeService.createWorkshopNotice(
        "60dabfd29fd86b413452a3b7", //TODO
        req.params.workshopNoticeId
      );
      res.json(research);
    } catch (error) {
      next(error);
    }
  };

  getWorkshopNotices = async (req, res, next) => {
    try {
      const notices = await this.workshopNoticeService.getWorkshopNotices();
      res.json(notices);
    } catch (error) {
      next(error);
    }
  };

  getWorkshopNotice = async (req, res, next) => {
    try {
      const notice = await this.workshopNoticeService.getWorkshopNotice(
        req.params.workshopNoticeId
      );
      res.json(notice);
    } catch (error) {
      next(error);
    }
  };

  approveWorkshopNotice = async (req, res, next) => {
    try {
      const research = await this.workshopNoticeService.approveWorkshopNotice(
        "60dabfd29fd86b413452a3b6", //TODO
        req.params.workshopNoticeId
      );
      res.json(research);
    } catch (error) {
      next(error);
    }
  };

  deleteWorkshopNotice = async (req, res, next) => {
    try {
      const deletedNotice =
        await this.workshopNoticeService.deleteWorkshopNotice(
          req.params.workshopNoticeId
        );
      res.json(deletedNotice);
    } catch (error) {
      next(error);
    }
  };
};
