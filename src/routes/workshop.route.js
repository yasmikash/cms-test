const Router = require("express").Router;

const WorkshopController = require("../controllers/workshop.controller");
const authorize = require("../middlewares/authorize.middleware");

module.exports = class UserRoute {
  constructor() {
    this.path = "/workshops";
    this.router = Router();
    this.workshopController = new WorkshopController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(
      `${this.path}`,
      authorize("USER"),
      this.workshopController.createWorkshop
    );
  }
};
