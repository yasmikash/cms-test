const WorkshopService = require("../services/workshop.service");

module.exports = class UserController {
  constructor() {
    this.workshopService = new WorkshopService();
  }

  createWorkshop = async (req, res, next) => {
    try {
      const workshop = await this.workshopService.createWorkshop(req.body);
      res.json(workshop);
    } catch (error) {
      next(error);
    }
  };
};
