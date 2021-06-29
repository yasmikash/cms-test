const Router = require("express").Router;

const ResearchController = require("../controllers/research.controller");
const authorize = require("../middlewares/authorize.middleware");

module.exports = class UserRoute {
  constructor() {
    this.path = "/research-notice";
    this.router = Router();
    this.researchController = new ResearchController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(
      `${this.path}`,
      authorize("USER"),
      this.researchController.createResearchNotice
    );
    this.router.post(
      `${this.path}/:researchId/approve`,
      authorize("ADMIN"),
      this.researchController.approveResearchNotice
    );
  }
};
