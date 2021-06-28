const Router = require("express").Router;

const ResearchController = require("../controllers/research.controller");
const authorize = require("../middlewares/authorize.middleware");

module.exports = class UserRoute {
  constructor() {
    this.path = "/research";
    this.router = Router();
    this.researchController = new ResearchController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(
      `${this.path}`,
      authorize("USER"),
      this.researchController.createResearch
    );
    this.router.post(
      `${this.path}/create-notice`,
      authorize("USER"),
      this.researchController.createResearchNotice
    );
    this.router.get(
      `${this.path}/users/:userId`,
      authorize("USER"),
      this.researchController.getResearch
    );
  }
};
