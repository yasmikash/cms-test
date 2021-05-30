const Router = require("express").Router;

const UserController = require("../controllers/user.controller");
const authorize = require("../middlewares/authorize.middleware");

module.exports = class UserRoute {
  constructor() {
    this.path = "/users";
    this.router = Router();
    this.userController = new UserController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(`${this.path}/sign-in`, this.userController.signIn);
    this.router.post(`${this.path}/sign-up`, this.userController.signUp);
  }
};
