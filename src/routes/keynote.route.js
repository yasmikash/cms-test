const Router = require("express").Router;

const KeynoteController = require("../controllers/keynote.controller");
const authorize = require("../middlewares/authorize.middleware");

module.exports = class UserRoute {
  constructor() {
    this.path = "/keynotes";
    this.router = Router();
    this.keynoteController = new KeynoteController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(
      `${this.path}`,
      //   authorize("USER"),
      this.keynoteController.createKeynote
    );
    this.router.get(
      `${this.path}/keynote/:keynoteid`,
      //   authorize("USER"),
      this.keynoteController.getKeynote
    );
    this.router.get(
      `${this.path}`,
      //authorize("USER"),
      this.keynoteController.getAllKeynotes
    );
  }
};
