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
      // authorize("USER"),
      this.workshopController.createWorkshop
    );
    this.router.get(
      `${this.path}/users/:userId`,
      // authorize("USER"),
      this.workshopController.getWorkshop
    );
    this.router.get(
      `${this.path}/`,
      // authorize("USER"),
      this.workshopController.getAllWorkshops
    );
    this.router.patch(
      `${this.path}/update`,
      //authorize("USER"),
      this.workshopController.UpdateWorkshop
    );
    this.router.get(
      `${this.path}/:workshopId`,
      // authorize("USER"),
      this.workshopController.getWorkshopId
    );
    this.router.delete(
      `${this.path}/delete/:workshopId`,
      // authorize("USER"),
      this.workshopController.deleteWorkshopById
    );
  }
};
