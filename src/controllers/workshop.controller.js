const WorkshopService = require("../services/workshop.service");

module.exports = class UserController {
  constructor() {
    this.workshopService = new WorkshopService();
  }

  createWorkshop = async (req, res, next) => {
    try {
      const workshop = await this.workshopService.createWorkshop(
        req.body,
        req.body.user,
        req.files
      );
      res.json(workshop);
    } catch (error) {
      next(error);
    }
  };

  getWorkshop = async (req, res, next) => {
    try {
      const workshop = await this.workshopService.getWorkshop(
        req.params.userId
      );
      res.json(workshop);
    } catch (error) {
      next(error);
    }
  };

  getAllWorkshops = async (req, res, next) => {
    try {
      const research = await this.workshopService.getAllWorkshops();
      res.json(research);
    } catch (error) {
      next(error);
    }
  };

  UpdateWorkshop = async (req, res, next) => {
    try {
      const workshop = await this.workshopService.UpdateWorkshop(
        req.body,
        req.body.id,
        req.files
      );
      res.json(workshop);
    } catch (error) {
      next(error);
    }
  };

  getWorkshopId = async (req, res, next) => {
    try {
      const workshop = await this.workshopService.getWorkshopById(
        req.params.workshopId
      );
      res.json(workshop);
    } catch (error) {
      next(error);
    }
  };

  deleteWorkshopById = async (req, res, next) => {
    try {
      const workshop = await this.workshopService.deleteWorkshopById(
        req.params.workshopId
      );
      res.json(workshop);
    } catch (error) {
      next(error);
    }
  };
};
