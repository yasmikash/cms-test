const Router = require("express").Router;

const WorkshopController = require("../controllers/workshop.controller");
const authorize = require("../middlewares/authorize.middleware");

module.exports = class UserRoute {
  constructor() {
    this.path = "/workshop-notice";
    this.router = Router();
    this.workshopController = new WorkshopController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(
      `${this.path}`,
      authorize("USER"),
      this.workshopController.createWorkshopNotice
    );
    this.router.post(
      `${this.path}/:workshopId/approve`,
      authorize("ADMIN"),
      this.workshopController.approveWorkshopNotice
    );
  }
};
