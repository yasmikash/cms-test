const Router = require("express").Router;

const AdminController = require("../controllers/admin.controller");
const authorize = require("../middlewares/authorize.middleware");

module.exports = class UserRoute {
  constructor() {
    this.path = "/admins";
    this.router = Router();
    this.adminController = new AdminController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(
      `${this.path}/stats`,
      //authorize("ADMIN"),
      this.adminController.getStatistics
    );
  }
};
