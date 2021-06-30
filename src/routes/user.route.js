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
    this.router.get(
      `${this.path}/:userId`,
      // authorize("USER"),
      this.userController.getUser
    );
    this.router.patch(
      `${this.path}/update`,
      // authorize("USER"),
      this.userController.UpdateUser
    );
    this.router.delete(
      `${this.path}/delete/:userId`,
      // authorize("USER"),
      this.userController.deleteUserById
    );
  }
};
