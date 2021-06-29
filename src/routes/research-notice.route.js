const Router = require("express").Router;

const ResearchController = require("../controllers/research.controller");
const ResearchNoticeController = require("../controllers/research-notice.controller");
const authorize = require("../middlewares/authorize.middleware");

module.exports = class UserRoute {
  constructor() {
    this.path = "/research-notice";
    this.router = Router();
    this.researchController = new ResearchController();
    this.researchNoticeController = new ResearchNoticeController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(
      `${this.path}/:researchId`,
      //authorize("USER"),
      this.researchNoticeController.createResearchNotice
    );
    this.router.post(
      `${this.path}/:researchId/approve`,
      //authorize("ADMIN"),
      this.researchNoticeController.approveResearchNotice
    );
  }
};
