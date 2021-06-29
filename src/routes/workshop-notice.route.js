const Router = require("express").Router;

const WorkshopController = require("../controllers/workshop.controller");
const WorkshopNoticeController = require("../controllers/workshop-notice.controller");
const authorize = require("../middlewares/authorize.middleware");
module.exports = class UserRoute {
  constructor() {
    this.path = "/workshop-notice";
    this.router = Router();
    this.workshopController = new WorkshopController();
    this.workshopNoticeController = new WorkshopNoticeController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(
      `${this.path}/:workshopId`,
      //authorize("USER"),
      this.workshopNoticeController.createWorkshopNotice
    );
    this.router.post(
      `${this.path}/:workshopId/approve`,
      //authorize("ADMIN"),
      this.workshopNoticeController.approveWorkshopNotice
    );
  }
};
