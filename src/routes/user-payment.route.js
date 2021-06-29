const Router = require("express").Router;

const UserPaymentController = require("../controllers/user-payment.controller");
const authorize = require("../middlewares/authorize.middleware");

module.exports = class UserRoute {
  constructor() {
    this.path = "/payment";
    this.router = Router();
    this.userPaymentController = new UserPaymentController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(
      `${this.path}`,
      // authorize("USER"),
      this.userPaymentController.createPayment
    );
    this.router.get(
      `${this.path}/users/:userId`,
      // authorize("USER"),
      this.userPaymentController.getPayment
    );

    this.router.get(
      `${this.path}/:paymentId`,
      // authorize("USER"),
      this.userPaymentController.getPaymentById
    );
  }
};
