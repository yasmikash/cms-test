const UserPaymentService = require("../services/user-payment.service");

module.exports = class UserPaymentController {
  constructor() {
    this.userPaymentService = new UserPaymentService();
  }

  createPayment = async (req, res, next) => {
    try {
      const payment = await this.userPaymentService.createPayment(
        req.body,
        req.body.user,
        req.body.researchId
      );
      res.json(payment);
    } catch (error) {
      next(error);
    }
  };

  getPayment = async (req, res, next) => {
    try {
      const payment = await this.userPaymentService.getPayment(
        req.params.userId
      );
      res.json(payment);
    } catch (error) {
      next(error);
    }
  };

  getPaymentById = async (req, res, next) => {
    try {
      const payment = await this.userPaymentService.getPaymentById(
        req.params.paymentId
      );
      res.json(payment);
    } catch (error) {
      next(error);
    }
  };
};
