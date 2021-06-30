const Router = require("express").Router;

const ResearchController = require("../controllers/research.controller");
const ResearchNoticeController = require("../controllers/research-notice.controller");
const authorize = require("../middlewares/authorize.middleware");

module.exports = class UserRoute {
  constructor() {
    this.path = "/research-notices";
    this.router = Router();
    this.researchController = new ResearchController();
    this.researchNoticeController = new ResearchNoticeController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(
      `${this.path}`,
      //authorize("ADMIN"),
      this.researchNoticeController.getResearchNotices
    );
    this.router.get(
      `${this.path}/:researchNoticeId`,
      //authorize("ADMIN"),
      this.researchNoticeController.getResearchNotice
    );
    this.router.post(
      `${this.path}/:researchId`,
      //authorize("USER"),
      this.researchNoticeController.createResearchNotice
    );
    this.router.post(
      `${this.path}/:researchNoticeId/approve`,
      //authorize("ADMIN"),
      this.researchNoticeController.approveResearchNotice
    );
    this.router.delete(
      `${this.path}/:researchNoticeId`,
      //authorize("ADMIN"),
      this.researchNoticeController.deleteResearchNotice
    );
  }
};
