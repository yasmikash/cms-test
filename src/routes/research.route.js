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
      // authorize("USER"),
      this.researchController.createResearch
    );
    this.router.get(
      `${this.path}/topics`,
      // authorize("USER"),
      this.researchController.getResearchTopics
    );
    this.router.post(
      `${this.path}/topics`,
      // authorize("USER"),
      this.researchController.createResearchTopic
    );
    this.router.get(
      `${this.path}/users/:userId`,
      // authorize("USER"),
      this.researchController.getResearch
    );
    this.router.get(
      `${this.path}`,
      //authorize("USER"),
      this.researchController.getAllResearch
    );
    this.router.patch(
      `${this.path}/update`,
      //authorize("USER"),
      this.researchController.UpdateResearch
    );
    this.router.get(
      `${this.path}/:researchId`,
      // authorize("USER"),
      this.researchController.getResearchById
    );
    this.router.delete(
      `${this.path}/delete/:researchId`,
      // authorize("USER"),
      this.researchController.deleteResearchById
    );
  }
};
