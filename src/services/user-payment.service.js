const v4 = require("uuid").v4;
const UserPaymentModel = require("../models/user-payment.model");
const ResearchModel = require("../models/research.model");

module.exports = class UserPaymentService {
  createPayment = async (data, userId, researchId) => {
    const receipt = `ICAF${v4()}`;
    const payment = new UserPaymentModel({
      ...data,
      researchId: researchId,
      user: userId,
      paidDate: new Date(),
      status: "successful",
      receiptId: receipt,
    });
    const paymentCreated = await payment.save();
    await ResearchModel.findByIdAndUpdate(researchId, { status: "PAID" });
    return paymentCreated;
  };

  getPayment = async (userId) => {
    const payment = await UserPaymentModel.find({ user: userId });
    return payment;
  };

  getPaymentById = async (paymentId) => {
    const payment = await UserPaymentModel.find({ _id: paymentId });
    return payment;
  };
};
