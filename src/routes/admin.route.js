const Router = require("express").Router;

const ResearchController = require("../controllers/research.controller");
const authorize = require("../middlewares/authorize.middleware");

module.exports = class UserRoute {
  constructor() {
    this.path = "/admins";
    this.router = Router();
    this.researchController = new ResearchController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(
      `${this.path}/research/research-topic`,
      authorize("ADMIN"),
      this.researchController.createResearchTopic
    );
  }
};
