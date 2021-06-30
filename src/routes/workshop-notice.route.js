const Router = require("express").Router;

const WorkshopController = require("../controllers/workshop.controller");
const WorkshopNoticeController = require("../controllers/workshop-notice.controller");
const authorize = require("../middlewares/authorize.middleware");
module.exports = class UserRoute {
  constructor() {
    this.path = "/workshop-notices";
    this.router = Router();
    this.workshopController = new WorkshopController();
    this.workshopNoticeController = new WorkshopNoticeController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(
      `${this.path}`,
      //authorize("USER"),
      this.workshopNoticeController.getWorkshopNotices
    );
    this.router.get(
      `${this.path}/:workshopNoticeId`,
      //authorize("USER"),
      this.workshopNoticeController.getWorkshopNotice
    );
    this.router.post(
      `${this.path}/:workshopNoticeId`,
      //authorize("USER"),
      this.workshopNoticeController.createWorkshopNotice
    );
    this.router.post(
      `${this.path}/:workshopNoticeId/approve`,
      //authorize("ADMIN"),
      this.workshopNoticeController.approveWorkshopNotice
    );
    this.router.delete(
      `${this.path}/:workshopNoticeId`,
      //authorize("ADMIN"),
      this.workshopNoticeController.deleteWorkshopNotice
    );
  }
};
